import React from 'react'
import Navbar from '../components/Navbar'

function Vote() {
  // Mock data for issues and clauses
  const issues = [
    {
      id: 1,
      title: 'The Finance Bill 2024',
      clauses: [
        {
          id: 1,
          title: 'Clause 1: Tax on Bread',
          text: 'A 16% VAT will be imposed on bread.',
          explanation: 'This clause introduces a tax on bread, potentially increasing its price.',
        },
        {
          id: 2,
          title: 'Clause 2: Increased Fuel Levy',
          text: 'The fuel levy will be increased by 8%.',
          explanation: 'This clause increases the fuel levy, which may raise transportation costs.',
        },
      ],
    },
  ]

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto py-8 px-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Voting Dashboard
        </h1>
        {issues.map((issue) => (
          <div key={issue.id} className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              {issue.title}
            </h2>
            {issue.clauses.map((clause) => (
              <div
                key={clause.id}
                className="border-b border-gray-200 py-4 last:border-b-0"
              >
                <h3 className="text-lg font-medium text-gray-700">
                  {clause.title}
                </h3>
                <p className="text-gray-600">{clause.text}</p>
                <p className="text-sm text-gray-500 mt-1">
                  Explanation: {clause.explanation}
                </p>
                <div className="mt-2 flex space-x-4">
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    ✅ Yes
                  </button>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    ❌ No
                  </button>
                  <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                    🟡 Abstain
                  </button>
                </div>
              </div>
            ))}
            <div className="mt-4">
              <p className="text-gray-600">
                Progress: <span className="font-semibold">50%</span> (You have
                voted on 1 out of 2 clauses)
              </p>
              <div className="bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-500 rounded-full h-2"
                  style={{ width: '50%' }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Vote
