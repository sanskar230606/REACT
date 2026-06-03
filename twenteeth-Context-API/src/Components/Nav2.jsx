import React, { useState } from 'react'

const Nav2 = ({ contextData }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const navLinks = [
    { name: 'Home', href: '#', icon: '🏠' },
    { name: 'Services', href: '#', icon: '⚙️' },
    { name: 'Products', href: '#', icon: '📦' },
    { name: 'Blog', href: '#', icon: '📝' },
    { name: 'Contact', href: '#', icon: '📧' }
  ]

  return (
    <nav className="relative bg-gradient-to-r from-slate-900 via-slate-950 to-black border-b border-slate-800/50 backdrop-blur-md sticky top-0 z-50">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-transparent to-blue-600/10 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-2 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur-lg group-hover:blur-xl transition-all duration-300 opacity-75 group-hover:opacity-100"></div>
              <div className="relative px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white font-black text-lg transform group-hover:scale-110 transition-transform duration-300">
                CA
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 group-hover:from-purple-300 group-hover:to-blue-300 transition-all duration-300">
                Context API
              </h1>
              <p className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors">Master State Management</p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="group relative px-3 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200"
              >
                <span className="flex items-center gap-1.5">
                  {link.icon}
                  {link.name}
                </span>
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            ))}
          </div>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center">
            <div className="relative group">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-4 py-2 pl-10 pr-4 rounded-lg bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300 group-hover:border-slate-600"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">🔍</span>
            </div>
          </div>

          {/* Right Side - Buttons & Mobile Menu */}
          <div className="flex items-center gap-3">
            {/* Auth Buttons - Desktop */}
            <div className="hidden md:flex items-center gap-2">
              <button className="px-4 py-2 text-sm font-semibold text-slate-300 hover:text-white border border-slate-700 rounded-lg hover:border-slate-600 transition-all duration-200 transform hover:scale-105">
                Sign In
              </button>
              <button className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-purple-500/50">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/50 transition-all duration-200"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`block h-6 w-6 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-gradient-to-b from-slate-900 to-black border-b border-slate-800 backdrop-blur-md animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-200 flex items-center gap-2"
              >
                {link.icon}
                {link.name}
              </a>
            ))}
            
            {/* Mobile Search */}
            <div className="px-3 py-2">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3 py-2 pl-10 rounded-lg bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 text-sm relative"
              />
            </div>

            {/* Mobile Auth Buttons */}
            <div className="px-3 py-2 space-y-2 border-t border-slate-800/50 mt-2 pt-2">
              <button className="w-full px-4 py-2 text-sm font-semibold text-slate-300 hover:text-white border border-slate-700 rounded-lg hover:border-slate-600 transition-all duration-200">
                Sign In
              </button>
              <button className="w-full px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-lg transition-all duration-200">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Nav2
