import React, { useState } from 'react'
import Navbar from '../components/Navbar'

function Login() {
  const [nationalId, setNationalId] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [otp, setOtp] = useState('')
  const [otpSent, setOtpSent] = useState(false)
  const [termsAccepted, setTermsAccepted] = useState(false)

  const sendOtp = () => {
    // Simulate OTP sending
    console.log(
      `Simulating sending OTP to phone number: ${phoneNumber} for ID: ${nationalId}`,
    )
    setOtpSent(true)
  }

  const verifyOtp = () => {
    // Simulate OTP verification
    console.log(`Simulating OTP verification: ${otp}`)
    alert('OTP Verified! (Simulated)')
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto py-8 px-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Signup / Login
        </h1>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="mb-4">
            <label
              htmlFor="nationalId"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              National ID Number
            </label>
            <input
              type="text"
              id="nationalId"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your National ID"
              value={nationalId}
              onChange={(e) => setNationalId(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phoneNumber"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          {!otpSent ? (
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={sendOtp}
            >
              Send OTP
            </button>
          ) : (
            <>
              <div className="mb-4">
                <label
                  htmlFor="otp"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  OTP
                </label>
                <input
                  type="text"
                  id="otp"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={verifyOtp}
              >
                Verify OTP
              </button>
            </>
          )}
          <div className="mb-4 mt-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-green-500"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
              />
              <span className="ml-2 text-gray-700">
  I agree to the <a href="/terms" className="text-green-600 hover:text-green-700 underline">Terms & Conditions</a> and{' '}
  <a href="/privacy-policy" className="text-green-600 hover:text-green-700 underline">Privacy Policy</a>
</span>
            </label>
          </div>
          <p className="text-sm text-gray-600">
            Your data is encrypted. We never share or sell it.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
