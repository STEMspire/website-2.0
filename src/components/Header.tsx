import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Get Involved', path: '/get-involved' },
    { name: 'Career Quest', path: '/career-quest' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="container-page">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <img
              src="/images/founders/stemspire-logo.png"
              alt="STEMspire logo"
              className="h-8 w-8"
            />
            <span className="font-mono text-lg font-semibold text-navy">STEMspire</span>
          </Link>

          <nav className="hidden items-center gap-5 md:flex lg:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-mono text-sm transition-colors ${
                  isActive(item.path)
                    ? 'text-navy underline decoration-2 underline-offset-8'
                    : 'text-gray-700 hover:text-navy'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-700 hover:text-navy md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="border-t border-gray-200 bg-white md:hidden">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`block border-b border-gray-100 px-4 py-3 font-mono text-sm ${
                isActive(item.path) ? 'text-navy' : 'text-gray-700'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
