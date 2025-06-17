import React from 'react'
import Navbar from '../components/Navbar'

function PrivacyPolicy() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto py-8 px-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Privacy Policy
        </h1>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600">
            Your privacy is important to us. This privacy policy explains how we
            collect, use, and protect your personal information.
          </p>
          <ul className="list-disc pl-5 mt-4">
            <li>
              OTP only verifies your phone number.
            </li>
            <li>
              No raw ID or phone data is stored in plaintext.
            </li>
            <li>
              All data is encrypted.
            </li>
            <li>
              We do not share or sell your data to third parties.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
