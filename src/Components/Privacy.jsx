import React from 'react';
import { useNavigate } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/24/outline'; // Import close icon

const Privacy = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1); // Go back to previous page
    // OR navigate('/'); // Redirect to home
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md my-8 relative">
      {/* Close Button (Top-right) */}
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 transition-colors"
        aria-label="Close privacy policy"
      >
        <XMarkIcon className="w-6 h-6 text-gray-500" />
      </button>

      {/* Header */}
      <div className="text-center mb-8 pt-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Privacy Policy</h1>
        <p className="text-gray-500">Last Updated: {new Date().toLocaleDateString()}</p>
      </div>

      {/* Content */}
      <div className="space-y-6 text-gray-700">
        <section>
          <h2 className="text-xl font-semibold mb-3">1. Information We Collect</h2>
          <p className="mb-4">
            We collect personal information you provide directly, such as when you create an account, 
            make a purchase, or contact us. This may include:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Name, email address, and contact details</li>
            <li>Payment and transaction information</li>
            <li>Device and usage data (via cookies)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">2. How We Use Your Information</h2>
          <p>
            Your information is used to provide and improve our services, including:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Processing transactions and delivering products</li>
            <li>Personalizing your experience</li>
            <li>Communicating with you about updates</li>
            <li>Detecting and preventing fraud</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">3. Data Sharing</h2>
          <p>
            We do not sell your personal data. We may share information with:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Service providers (e.g., payment processors)</li>
            <li>Legal authorities when required</li>
            <li>Business partners (with your consent)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">4. Your Rights</h2>
          <p>
            Depending on your location, you may have the right to:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Access, correct, or delete your data</li>
            <li>Opt-out of marketing communications</li>
            <li>Withdraw consent (where applicable)</li>
          </ul>
          <p className="mt-4">
            To exercise these rights, contact us at <span className="text-blue-600">privacy@devconnect.me</span>.
          </p>
        </section>

        <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
          <h3 className="text-lg font-medium text-blue-700 mb-2">Contact Us</h3>
          <p className="text-blue-600">
            For privacy-related questions, email us at <strong>privacy@devconnect.me</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;