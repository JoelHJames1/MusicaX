import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Music2, Youtube } from 'lucide-react';

export function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <Music2 className="w-8 h-8 text-indigo-600" />
              <h1 className="text-2xl font-semibold text-gray-900">Musica X</h1>
            </Link>
            <nav className="flex space-x-6">
              <Link 
                to="/privacy" 
                className={`text-gray-600 hover:text-indigo-600 ${location.pathname === '/privacy' ? 'text-indigo-600' : ''}`}
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className={`text-gray-600 hover:text-indigo-600 ${location.pathname === '/terms' ? 'text-indigo-600' : ''}`}
              >
                Terms of Use
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex space-x-6">
              <Link 
                to="/privacy" 
                className="text-sm text-gray-500 hover:text-indigo-600"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="text-sm text-gray-500 hover:text-indigo-600"
              >
                Terms of Use
              </Link>
            </div>
            <p className="text-center text-gray-500">
              © {new Date().getFullYear()} Musica X. All rights reserved.
            </p>
            <div className="flex items-center space-x-2">
              <Youtube className="w-4 h-4 text-red-600" />
              <span className="text-sm text-gray-500">Powered by YouTube</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}