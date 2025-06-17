import React from 'react'
import Navbar from '../components/Navbar'

function LegalAction() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto py-8 px-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Legal Action Tracker
        </h1>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600">
            This page will show when a court case or LSK action is filed.
            (Future Integration Point)
          </p>
        </div>
      </div>
    </div>
  )
}

export default LegalAction
