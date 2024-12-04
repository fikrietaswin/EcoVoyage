import { Link } from 'react-router-dom';
import { Leaf, User, Search, Menu, Globe, MapPin, Calendar, Users, X } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isAuthenticated, user, signOut } = useAuth();

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-[2520px] mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-eco-600" />
            <span className="text-xl font-bold text-eco-800">EcoVoyage</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center border border-gray-200 rounded-full hover:shadow-md transition cursor-pointer">
              <div className="flex-1 flex items-center px-6 py-2 border-r border-gray-200">
                <MapPin className="h-4 w-4 text-gray-500 mr-2" />
                <input 
                  type="text" 
                  placeholder="Search destinations"
                  className="bg-transparent border-none outline-none w-full placeholder-gray-500"
                />
              </div>
              <button className="bg-eco-600 p-3 rounded-full ml-2 mr-2 hover:bg-eco-700 transition">
                <Search className="h-4 w-4 text-white" />
              </button>
            </div>

            <Link 
              to="/marketplace"
              className="text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-full transition"
            >
              List your eco-stay
            </Link>
            
            <button className="p-2 hover:bg-gray-100 rounded-full transition">
              <Globe className="h-5 w-5 text-gray-700" />
            </button>

            <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-2 border border-gray-200 rounded-full p-2 hover:shadow-md transition"
              >
                <Menu className="h-4 w-4 text-gray-700" />
                {isAuthenticated ? (
                  <div className="h-7 w-7 rounded-full bg-eco-100 flex items-center justify-center">
                    <User className="h-4 w-4 text-eco-600" />
                  </div>
                ) : (
                  <User className="h-4 w-4 text-gray-700" />
                )}
              </button>

              {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                  {isAuthenticated ? (
                    <>
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Profile
                      </Link>
                      <button
                        onClick={signOut}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Sign Out
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        to="/signin"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Sign In
                      </Link>
                      <Link
                        to="/signup"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Sign Up
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-4">
          <div className="flex items-center border border-gray-200 rounded-full hover:shadow-md transition">
            <div className="flex-1 flex items-center px-4 py-2">
              <MapPin className="h-4 w-4 text-gray-500 mr-2" />
              <input 
                type="text" 
                placeholder="Search destinations"
                className="bg-transparent border-none outline-none w-full placeholder-gray-500 text-sm"
              />
            </div>
            <button className="bg-eco-600 p-2 rounded-full mr-1 hover:bg-eco-700 transition">
              <Search className="h-4 w-4 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white">
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-4 border-b">
              <Link to="/" className="flex items-center space-x-2">
                <Leaf className="h-6 w-6 text-eco-600" />
                <span className="text-lg font-bold text-eco-800">EcoVoyage</span>
              </Link>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2"
              >
                <X className="h-6 w-6 text-gray-700" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto py-4">
              <div className="space-y-1 px-4">
                <Link
                  to="/marketplace"
                  className="block py-3 text-gray-700 border-b border-gray-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  List your eco-stay
                </Link>
                <Link
                  to="/social"
                  className="block py-3 text-gray-700 border-b border-gray-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Social Hub
                </Link>
                <Link
                  to="/blog"
                  className="block py-3 text-gray-700 border-b border-gray-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Blog
                </Link>
                {isAuthenticated ? (
                  <>
                    <Link
                      to="/profile"
                      className="block py-3 text-gray-700 border-b border-gray-100"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Profile
                    </Link>
                    <button
                      onClick={() => {
                        signOut();
                        setIsMobileMenuOpen(false);
                      }}
                      className="block w-full text-left py-3 text-gray-700 border-b border-gray-100"
                    >
                      Sign Out
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/signin"
                      className="block py-3 text-gray-700 border-b border-gray-100"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Sign In
                    </Link>
                    <Link
                      to="/signup"
                      className="block py-3 text-gray-700 border-b border-gray-100"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}