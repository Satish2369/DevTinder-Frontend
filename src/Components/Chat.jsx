import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { createSocketConnection } from "../utils/socket";
import { useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

const Chat = () => {
  const { toUserId } = useParams();

  const user = useSelector((store) => store?.user);
  const userId = user?._id;

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const fetchMessages = async () => {
    const chat = await axios.get(BASE_URL + "/chat/" + toUserId, {
      withCredentials: true,
    });

    console.log(chat?.data);

    const chatMessages = chat?.data?.messages?.map((mess) => {
      return {
        firstName: mess.senderId?.firstName,
        lastName: mess.senderId?.lastName,
        text: mess?.text,
      };
    });

    setMessages(chatMessages);
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  useEffect(() => {
    if (!userId) {
      return;
    }
    const socket = createSocketConnection();

    socket.emit("joinChat", { firstName: user?.firstName, userId, toUserId });

    socket.on("messageReceived", ({ firstName, lastName, text }) => {
      setMessages((messages) => [...messages, { firstName, lastName, text }]);
    });

    return () => {
      socket.disconnect();
    };
  }, [userId, toUserId]);

  const sendMessages = () => {
    const socket = createSocketConnection();
    socket.emit("sendMessage", {
      firstName: user.firstName,
      lastName: user.lastName,
      userId,
      toUserId,
      text: newMessage,
    });

    setNewMessage("");
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Chat Container */}
        <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden shadow-xl">
          
          {/* Chat Header */}
          <div className="px-6 py-4 bg-gray-900 border-b border-gray-800 flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-violet-600 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div>
              <h1 className="text-white font-semibold text-lg">Chat</h1>
              <p className="text-gray-400 text-xs">Online</p>
            </div>
          </div>

          {/* Messages Container */}
          <div className="h-[60vh] overflow-y-auto p-6 space-y-4 bg-gray-950/50">
            {messages.map((mess, index) => {
              const isOwnMessage = mess.firstName === user.firstName;
              return (
                <div
                  key={index}
                  className={`flex ${isOwnMessage ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[75%] ${isOwnMessage ? "order-1" : "order-2"}`}>
                    {/* Sender Name */}
                    <div
                      className={`text-xs text-gray-400 mb-1 ${
                        isOwnMessage ? "text-right" : "text-left"
                      }`}
                    >
                      {mess.firstName} {mess.lastName}
                    </div>

                    {/* Message Bubble */}
                    <div
                      className={`px-4 py-2.5 rounded-2xl ${
                        isOwnMessage
                          ? " bg-zinc-900 text-white rounded-br-md"
                          : "bg-gray-100 text-black rounded-bl-md"
                      }`}
                    >
                      <p className="      text-sm leading-relaxed">{mess.text}</p>
                    </div>

                    {/* Time */}
                    <div
                      className={`text-xs text-gray-500 mt-1 ${
                        isOwnMessage ? "text-right" : "text-left"
                      }`}
                    >
                      Just now
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Input Section */}
          <div className="px-4 py-4 bg-gray-900 border-t border-gray-800">
            <div className="flex items-center gap-3">
              <input
                onKeyDown={(e) => {
                  if (e.key === "Enter") sendMessages();
                }}
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                type="text"
                placeholder="Type a message..."
                className="flex-1 px-5 py-3 bg-gray-800 border border-gray-700 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 transition-colors"
              />
              <button
                onClick={sendMessages}
                className="w-12 h-12 bg-gradient-to-r from-red-600 to-violet-600 hover:from-red-500 hover:to-violet-500 rounded-full flex items-center justify-center transition-all hover:scale-105 active:scale-95"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;