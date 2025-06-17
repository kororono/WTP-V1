import React from 'react'
import Navbar from '../components/Navbar'

function Educate() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto py-8 px-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Civic Education
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              What is Public Participation?
            </h2>
            <p className="text-gray-600">
              Public participation is the process by which the public's concerns,
              needs, and values are incorporated into governmental and corporate
              decision-making.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              What is the Finance Bill?
            </h2>
            <p className="text-gray-600">
              The Finance Bill is a proposed law that outlines the government's
              plans for taxation and revenue generation.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              What does “Clause” mean in law?
            </h2>
            <p className="text-gray-600">
              In law, a clause is a distinct section or provision within a
              document, such as a contract, will, or statute.
            </p>
          </div>
        </div>
        <section className="mt-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Future AI-Assisted Explanations
          </h2>
          <p className="text-gray-600">
            This section will include AI-assisted explanations for complex civic
            issues in the future.
          </p>
        </section>
      </div>
    </div>
  )
}

export default Educate
