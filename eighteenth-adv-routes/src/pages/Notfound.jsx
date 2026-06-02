import React from 'react'
import { Link } from 'react-router-dom'

const Notfound = () => {
  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden flex items-center justify-center">
      {/* Animated Background Gradients */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute top-32 right-0 w-96 h-96 bg-gradient-to-bl from-pink-600 to-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-500"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        
        {/* 404 Text with Animation */}
        <div className="mb-8">
          <div className="relative inline-block">
            {/* Glowing Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
            
            {/* 404 Number */}
            <h1 className="relative text-9xl sm:text-[12rem] font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 leading-none mb-2 drop-shadow-2xl transform hover:scale-110 transition-transform duration-300">
              404
            </h1>
          </div>
        </div>

        {/* Lost Message with Animation */}
        <div className="mb-8 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 animate-bounce">
            Oops! Page Not Found
          </h2>
          <p className="text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-slate-400 mb-4 max-w-2xl mx-auto leading-relaxed">
            The page you're looking for has mysteriously vanished into the digital void. Don't worry, let's get you back on track!
          </p>
        </div>

        {/* Floating Icons */}
        <div className="flex justify-center gap-8 mb-12 text-6xl opacity-30 animate-pulse">
          <span className="animate-bounce" style={{ animationDelay: '0s' }}>🚀</span>
          <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>🌟</span>
          <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>💫</span>
        </div>

        {/* Search Box Effect */}
        <div className="mb-12 relative inline-block w-full max-w-md">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-20 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
          <div className="relative px-6 py-4 bg-slate-900/50 rounded-xl border border-slate-700 backdrop-blur-md hover:border-purple-500/50 transition-all duration-300">
            <p className="text-slate-300">
              The page appears to have <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-bold">taken a detour</span>
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          {/* Home Button */}
          <Link 
            to="/" 
            className="group relative px-8 py-4 text-lg font-bold text-white rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:from-purple-700 group-hover:to-pink-700 transition-all duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse"></div>
            <span className="relative flex items-center justify-center gap-2">
              🏠 Back to Home
            </span>
          </Link>

          {/* Contact Button */}
          <Link 
            to="/contact" 
            className="group relative px-8 py-4 text-lg font-bold text-white rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-gradient-to-r border-slate-600 hover:border-blue-500"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-900 group-hover:from-blue-900/50 group-hover:to-purple-900/50 transition-all duration-300"></div>
            <span className="relative flex items-center justify-center gap-2">
              💬 Contact Us
            </span>
          </Link>
        </div>

        {/* Error Details Card */}
        <div className="mt-12 p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 backdrop-blur-md max-w-xl mx-auto">
          <div className="space-y-3 text-left">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚠️</span>
              <div>
                <p className="text-slate-400 text-sm">Error Code</p>
                <p className="text-white font-mono font-bold">404_NOT_FOUND</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">📍</span>
              <div>
                <p className="text-slate-400 text-sm">Current Location</p>
                <p className="text-white font-mono text-sm break-all">{window.location.pathname}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">🔍</span>
              <div>
                <p className="text-slate-400 text-sm">Suggestion</p>
                <p className="text-white text-sm">Check the URL or use the navigation menu</p>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Bottom Text */}
        <div className="mt-12 text-slate-500 text-sm">
          <p>This 404 experience is crafted with care ✨</p>
        </div>
      </div>

      {/* Floating Particles Effect */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-40px) translateX(-10px); }
          75% { transform: translateY(-20px) translateX(10px); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(168, 85, 247, 0.5), 0 0 40px rgba(168, 85, 247, 0.3); }
          50% { box-shadow: 0 0 30px rgba(236, 72, 153, 0.6), 0 0 60px rgba(236, 72, 153, 0.4); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
        
        .delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </div>
  )
}

export default Notfound
