import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8 bg-white relative rounded-lg">
      {/* Close Button - Top Right */}
      <button 
        onClick={() => navigate(-1)}
        className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 transition-colors duration-200"
        aria-label="Close contact form"
      >
        <FaTimes className="h-6 w-6" />
      </button>

      {/* Header */}
      <div className="text-center mb-12 pt-2">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact DevConnect</h1>
        <p className="text-xl text-gray-600">Have questions or feedback? We'd love to hear from you!</p>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Contact Info */}
        <div className="lg:w-1/2 space-y-8">
          {/* Email */}
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1 text-indigo-600">
              <FaEnvelope className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Email</h3>
              <p className="text-gray-600">contact@devconnect.me</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1 text-indigo-600">
              <FaPhone className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Phone</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1 text-indigo-600">
              <FaMapMarkerAlt className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Location</h3>
              <p className="text-gray-600">India</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="pt-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 transition-colors duration-200">
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 transition-colors duration-200">
                <FaGithub className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 transition-colors duration-200">
                <FaTwitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:w-1/2 bg-gray-50 p-8 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Your email"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
              <input
                type="text"
                id="subject"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Subject"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                rows="5"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Your message"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;