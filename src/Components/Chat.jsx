import  { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { createSocketConnection } from "../utils/socket";
import { useSelector } from "react-redux";

const Chat = () => {
  const { toUserId } = useParams();

  const user = useSelector((store) => store?.user);
  const userId = user?._id;

  const [messages, setMessages] = useState([]);
   const [newMessage, setNewMessage] = useState("")
  useEffect(() => {
    if (!userId) {
      return;
    }
    const socket = createSocketConnection();


    socket.emit("joinChat", { firstName: user?.firstName,userId, toUserId });



    socket.on("messageReceived",({firstName,text}) =>{


     console.log(firstName,text);
         setMessages((messages)=>[...messages,{firstName,text}]);
         console.log(messages);
    });


    return () => {
      socket.disconnect();
    };
  }, [userId, toUserId]);





  const sendMessages = ()=>{
 
    const socket = createSocketConnection();
    socket.emit("sendMessage",{
    firstName:user.firstName,
    userId,
    toUserId,
    text: newMessage

    })

  setNewMessage("");
   
  }



  return (
    <div>
      <div className="w-1/2 mx-auto border border-gray-600 m-5 h-[70vh] flex flex-col p-4">
        <h1 className="p-5 border-b border-gray-600">Chat</h1>
        <div className="flex-1 overflow-scroll p-5">

          {messages.map((mess,index)=>{
             return <div key={index} className="chat chat-start">
            <div className="chat-header">
               {mess.firstName}
              <time className="text-xs opacity-50">2 hours ago</time>
            </div>
            <div className="chat-bubble">{mess.text}</div>
            <div className="chat-footer opacity-50">Seen</div>
          </div>



          })}

        </div>

        <div className="flex gap-2 p-2">
          <input

            value={newMessage}
            onChange={(e)=>setNewMessage(e.target.value)}
            type="text"
            className="flex-1 p-2 bg-white text-black rounded-full"
          ></input>
          <button onClick={sendMessages} className="btn btn-secondary">send</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
