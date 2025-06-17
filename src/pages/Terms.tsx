import React from 'react'
import Navbar from '../components/Navbar'

function Terms() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto py-8 px-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Terms & Conditions
        </h1>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600">
            These terms and conditions govern your use of WeThePeopleKE. By
            accessing or using the platform, you agree to be bound by these
            terms.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Terms
