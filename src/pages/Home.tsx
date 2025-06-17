import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'; // You are importing it here

const Home: React.FC = () => {
  return (
    <> 
      <Navbar /> 
    <div className="min-h-screen pb-20 md:pb-8">
      {/* HERO SECTION */}
      <div className="container mx-auto px-4 py-6 md:py-12">
        {/* Main Message */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
            "ALL sovereign power belongs to the people of Kenya and SHALL be exercised…"
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed">
            Welcome to WeThePeopleKE, a civic engagement platform for verified Kenyan citizens to vote on national issues.
          </p>
        </div>

        {/* HOW IT WORKS */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
            How it Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-100 text-center">
              <div className="text-2xl md:text-3xl font-bold text-green-600 mb-3">1.</div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Get Verified</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Verify your identity using your National ID and phone number.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-100 text-center">
              <div className="text-2xl md:text-3xl font-bold text-green-600 mb-3">2.</div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Explore Issues</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Browse current bills and issues open for public voting.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-100 text-center">
              <div className="text-2xl md:text-3xl font-bold text-green-600 mb-3">3.</div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Vote Clause-by-Clause</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Vote on each clause of an issue and make your voice heard.
              </p>
            </div>
          </div>
        </div>

        {/* CTA BUTTON */}
        <div className="text-center">
          <Link
            to="/login"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 md:py-4 md:px-8 lg:py-5 lg:px-10 rounded-lg text-base md:text-lg lg:text-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Get Verified & Vote
          </Link>
        </div>
      </div>
    </div>
			</>
  );
};

export default Home;
