import React from 'react'
import Navbar from '../components/Navbar'

function Profile() {
  // Mock user data
  const user = {
    id: '123456789',
    phone: '+254712345678',
    votingHistory: [
      {
        issue: 'The Finance Bill 2024',
        vote: 'Yes',
        clause: 'Tax on Bread',
      },
      {
        issue: 'The Finance Bill 2024',
        vote: 'No',
        clause: 'Increased Fuel Levy',
      },
    ],
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto py-8 px-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Profile Page
        </h1>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            User Information
          </h2>
          <p className="text-gray-600">
            ID: ******
            {user.id.slice(-3)}
          </p>
          <p className="text-gray-600">
            Phone: +2547******{user.phone.slice(-3)}
          </p>
          <h2 className="text-xl font-semibold text-gray-700 mt-4 mb-4">
            Voting History
          </h2>
          {user.votingHistory.map((item, index) => (
            <div key={index} className="border-b border-gray-200 py-2 last:border-b-0">
              <p className="text-gray-600">
                Issue: {item.issue}
              </p>
              <p className="text-gray-600">
                Clause: {item.clause}
              </p>
              <p className="text-gray-600">
                Vote: {item.vote}
              </p>
            </div>
          ))}
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4">
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profile
