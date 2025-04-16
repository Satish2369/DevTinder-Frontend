import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const CancellationNRefund = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8 bg-white relative rounded-lg">
      {/* Close Button */}
      <button 
        onClick={() => navigate(-1)}
        className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 transition-colors duration-200"
        aria-label="Close policy"
      >
        <FaTimes className="h-6 w-6" />
      </button>

      <div className="text-center mb-12 pt-2">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Membership Cancellation & Refund</h1>
        <p className="text-xl text-gray-600">Policies for your DevConnect Premium membership</p>
      </div>

      <div className="space-y-6">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">🔹 Membership Cancellation</h2>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Cancel anytime from your account settings</li>
            <li>No cancellation fees</li>
            <li>Active until the end of your billing cycle</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">🔹 Refund Policy</h2>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>7-day money-back guarantee for new members</li>
            <li>Partial refunds for annual plans (prorated)</li>
            <li>No refunds after 7 days for monthly plans</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default CancellationNRefund;