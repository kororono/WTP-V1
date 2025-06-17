import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Vote from './pages/Vote'
import Educate from './pages/Educate'
import SubmitIssue from './pages/SubmitIssue'
import Profile from './pages/Profile'
import LegalAction from './pages/LegalAction'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/vote" element={<Vote />} />
        <Route path="/educate" element={<Educate />} />
        <Route path="/submit-issue" element={<SubmitIssue />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/legal-action" element={<LegalAction />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </Router>
  )
}

export default App
