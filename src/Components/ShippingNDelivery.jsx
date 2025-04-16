import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ShippingNDelivery = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8 bg-white relative rounded-lg">
      {/* Close Button */}
      <button 
        onClick={() => navigate(-1)}
        className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 transition-colors duration-200"
        aria-label="Close information"
      >
        <FaTimes className="h-6 w-6" />
      </button>

      <div className="text-center mb-12 pt-2">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Instant Access</h1>
        <p className="text-xl text-gray-600">How your DevConnect Premium membership works</p>
      </div>

      <div className="space-y-6">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">⚡ Immediate Activation</h2>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Full access granted immediately after payment</li>
            <li>No shipping required - 100% digital service</li>
            <li>Accessible on all your devices</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">📱 Device Compatibility</h2>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Web browsers (Chrome, Safari, Firefox)</li>
            <li>iOS and Android apps available</li>
            <li>Works on up to 5 devices simultaneously</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">🔄 Account Transfers</h2>
          <p className="text-gray-600">
            Membership is tied to your DevConnect account. 
            You can switch devices anytime by logging in.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShippingNDelivery;