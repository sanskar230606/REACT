import React from 'react'

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-3xl"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl sm:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6 leading-tight">
              Advanced Routing in React
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Master dynamic routing, nested routes, and advanced navigation patterns. Build professional single-page applications with React Router.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105">
                Start Learning
              </button>
              <button className="px-8 py-3 border-2 border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-semibold rounded-lg transition-all duration-200">
                View Docs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-8">
          <div className="text-center">
            <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">10K+</p>
            <p className="text-slate-400 mt-2">Students Enrolled</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">50+</p>
            <p className="text-slate-400 mt-2">Video Lessons</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400">4.9★</p>
            <p className="text-slate-400 mt-2">Avg Rating</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: '🚀', title: 'Dynamic Routes', desc: 'Learn to create dynamic, parameter-based routes' },
            { icon: '🎯', title: 'Nested Navigation', desc: 'Master nested routing structures and layouts' },
            { icon: '⚡', title: 'Performance', desc: 'Code splitting and lazy loading techniques' }
          ].map((feature, i) => (
            <div key={i} className="group p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:bg-slate-800">
              <p className="text-4xl mb-4">{feature.icon}</p>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
