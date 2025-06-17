import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, User, Book, Plus, Shield } from 'lucide-react';
import KenyanFlag from '/src/components/KenyanFlag.tsx';

const Navbar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { to: '/', icon: Home, label: 'Home' },
    { to: '/vote', icon: Shield, label: 'Vote' },
    { to: '/educate', icon: Book, label: 'Learn' },
    { to: '/submit-issue', icon: Plus, label: 'Submit' },
    { to: '/profile', icon: User, label: 'Profile' },
  ];

  return (
    <>
      {/* TOP BAR - FIXED NAVIGATION */}
      <nav
  className="navbar bg-white/98 backdrop-blur-lg shadow-sm border-b border-gray-100"
  // The .navbar class from your CSS will handle the fixed positioning and z-index.
>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Mobile: Flag + "WeThePeopleKE" (Full name on mobile too) */}
            <div className="md:hidden">
              <Link to="/" className="flex items-center space-x-2 text-gray-800 hover:text-green-600 transition-colors">
                <KenyanFlag size={26} />
                <span className="font-bold text-lg">WeThePeopleKE</span>
              </Link>
            </div>

            {/* Desktop: Flag + Full name + Navigation */}
            <div className="hidden md:flex items-center justify-between w-full">
              {/* Left: Logo */}
              <Link to="/" className="flex items-center space-x-3 text-gray-800 hover:text-green-600 transition-colors">
                <KenyanFlag size={32} />
                <span className="font-bold text-2xl">WeThePeopleKE</span>
              </Link>

              {/* Right: Navigation Icons with Labels */}
              <div className="flex items-center space-x-2">
                {navItems.map(({ to, icon: Icon, label }) => (
                  <Link
                    key={to}
                    to={to}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      isActive(to)
                        ? 'text-green-700 bg-green-100 shadow-sm'
                        : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                    }`}
                  >
                    <Icon size={18} />
                    <span>{label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* BOTTOM TAB BAR - Mobile Only (WhatsApp/Instagram Style) */}
      <div 
        className="md:hidden fixed bottom-0 left-0 right-0 bg-white/98 backdrop-blur-lg border-t border-gray-200 safe-area-pb" 
        style={{ zIndex: 10000 }}
      >
        <div className="flex items-center justify-around">
          {navItems.map(({ to, icon: Icon, label }) => (
            <Link
              key={to}
              to={to}
              className={`flex flex-col items-center justify-center py-3 px-2 min-w-0 flex-1 transition-all duration-200 ${
                isActive(to)
                  ? 'text-green-600'
                  : 'text-gray-500 hover:text-green-500'
              }`}
            >
              <Icon 
                size={22} 
                className={`mb-1 ${isActive(to) ? 'stroke-2' : 'stroke-1.5'}`} 
              />
              <span 
                className={`text-xs font-medium truncate ${
                  isActive(to) ? 'text-green-600' : 'text-gray-500'
                }`}
              >
                {label}
              </span>
            </Link>
          ))}
        </div>
      </div>
</> 
  );
};

export default Navbar;
