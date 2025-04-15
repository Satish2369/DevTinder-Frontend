import React from 'react';
import { useNavigate } from 'react-router-dom';

const TermsnCondition = () => {

     const navigate = useNavigate();
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md my-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Terms and Conditions</h1>
        <p className="text-gray-500">Last Updated: {new Date().toLocaleDateString()}</p>
      </div>

      {/* Content */}
      <div className="space-y-6">
        {/* Section 1 */}
        <section className="bg-gray-50 p-5 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">1. Introduction</h2>
          <p className="text-gray-600 leading-relaxed">
            Welcome to our website. By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement. 
            If you do not agree to abide by these terms, please do not use this website.
          </p>
        </section>

        {/* Section 2 */}
        <section className="bg-gray-50 p-5 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">2. Intellectual Property</h2>
          <p className="text-gray-600 leading-relaxed">
            All content on this website, including text, graphics, logos, and images, is the property of our company and is protected by copyright laws. 
            Unauthorized use may violate copyright, trademark, and other laws.
          </p>
        </section>

        {/* Section 3 */}
        <section className="bg-gray-50 p-5 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">3. User Responsibilities</h2>
          <p className="text-gray-600 mb-3 leading-relaxed">
            As a user of this website, you agree not to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Use the website for any unlawful purpose</li>
            <li>Post or transmit any harmful or malicious content</li>
            <li>Attempt to gain unauthorized access to any part of the website</li>
            <li>Interfere with the proper functioning of the website</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="bg-gray-50 p-5 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">4. Limitation of Liability</h2>
          <p className="text-gray-600 leading-relaxed">
            We shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the website.
          </p>
        </section>

        {/* Section 5 */}
        <section className="bg-gray-50 p-5 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">5. Changes to Terms</h2>
          <p className="text-gray-600 leading-relaxed">
            We reserve the right to modify these terms at any time. Your continued use of the website following any changes constitutes your acceptance of the new terms.
          </p>
        </section>

        {/* Acceptance */}
        <div className="mt-8 p-5 bg-blue-50 rounded-lg border border-blue-100">
          <h3 className="text-lg font-medium text-blue-700 mb-3">Acceptance of Terms</h3>
          <p className="text-blue-600">
            By using this website, you signify your acceptance of these terms. If you do not agree, please refrain from using our site.
          </p>
        </div>
             <div className='flex justify-center '>
             <button className="btn btn-soft btn-secondary px-8 text-2xl" onClick={()=> navigate(-1)}>close</button>
             </div>
       
      </div>
    </div>
  );
};

export default TermsnCondition;