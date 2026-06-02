import React from 'react'

export default function Cyber() {
  const topics = [
    {
      icon: '🔐',
      title: 'Network Security',
      desc: 'Learn firewalls, intrusion detection, and network monitoring'
    },
    {
      icon: '🛡️',
      title: 'Cryptography',
      desc: 'Master encryption algorithms and secure communications'
    },
    {
      icon: '🔍',
      title: 'Penetration Testing',
      desc: 'Ethical hacking and vulnerability assessment techniques'
    },
    {
      icon: '⚔️',
      title: 'Threat Analysis',
      desc: 'Identify, analyze and respond to cyber threats'
    }
  ]

  const challenges = [
    { level: 'Beginner', count: 15, xp: '150 XP' },
    { level: 'Intermediate', count: 22, xp: '350 XP' },
    { level: 'Advanced', count: 18, xp: '500 XP' }
  ]

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-violet-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Header */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_25%,rgba(68,68,68,.2)_50%,transparent_50%,transparent_75%,rgba(68,68,68,.2)_75%,rgba(68,68,68,.2))] bg-[length:60px_60px] opacity-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4">
            <span className="text-6xl animate-bounce">🛡️</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 mb-4">
            Cyber Security Mastery
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Master the art of cybersecurity. Learn offensive and defensive techniques from industry experts. Protect systems and prevent attacks.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative py-8 border-y border-slate-700/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 text-center">
            {[
              { label: 'Students', value: '8.5K+' },
              { label: 'Certifications', value: '2K+' },
              { label: 'Modules', value: '120+' },
              { label: 'Challenges', value: '55+' },
              { label: 'Success Rate', value: '94%' },
              { label: 'Avg Rating', value: '4.9★' }
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">{stat.value}</p>
                <p className="text-xs text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="relative py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Core Topics</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topics.map((topic, i) => (
            <div key={i} className="group p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
              <p className="text-5xl mb-4 transform group-hover:scale-125 transition-transform duration-300">{topic.icon}</p>
              <h3 className="text-xl font-bold text-white mb-2">{topic.title}</h3>
              <p className="text-slate-400 text-sm">{topic.desc}</p>
              <div className="mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r from-cyan-500 to-violet-500 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Challenge Levels */}
      <section className="relative py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Hands-On Challenges</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {challenges.map((challenge, i) => (
            <div key={i} className="group p-8 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">{challenge.level}</h3>
                <span className="text-3xl group-hover:rotate-12 transition-transform duration-300">🎯</span>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-slate-300">
                  <span>Challenges</span>
                  <span className="font-bold text-cyan-400">{challenge.count}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Max XP Gain</span>
                  <span className="font-bold text-violet-400">{challenge.xp}</span>
                </div>
                <button className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-cyan-600 to-violet-600 hover:from-cyan-700 hover:to-violet-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105">
                  Start Challenge
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Curriculum */}
      <section className="relative py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Course Curriculum</h2>
        <div className="space-y-4">
          {[
            { module: 'Module 1', title: 'Cybersecurity Fundamentals', lessons: 12, duration: '2 weeks' },
            { module: 'Module 2', title: 'Network Architecture & Security', lessons: 15, duration: '3 weeks' },
            { module: 'Module 3', title: 'Cryptography Deep Dive', lessons: 18, duration: '3 weeks' },
            { module: 'Module 4', title: 'Threat Intelligence & Analysis', lessons: 14, duration: '2 weeks' },
            { module: 'Module 5', title: 'Incident Response & Recovery', lessons: 16, duration: '3 weeks' }
          ].map((item, i) => (
            <div key={i} className="group p-6 rounded-lg bg-slate-800/30 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300 hover:bg-slate-800/50">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="flex-1">
                  <p className="text-cyan-400 font-semibold text-sm mb-1">{item.module}</p>
                  <h3 className="text-xl font-bold text-white mb-2 sm:mb-0">{item.title}</h3>
                </div>
                <div className="flex gap-6 mt-3 sm:mt-0 text-slate-300 text-sm">
                  <span>📚 {item.lessons} lessons</span>
                  <span>⏱️ {item.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-xl bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-violet-600/20 border border-cyan-500/30 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Secure Your Future?</h2>
          <p className="text-slate-300 mb-8 text-lg">Get certified in cybersecurity and advance your career</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-violet-600 hover:from-cyan-700 hover:to-violet-700 text-white font-bold rounded-lg transition-all duration-200 transform hover:scale-105">
              Enroll Now
            </button>
            <button className="px-8 py-3 border-2 border-cyan-500/50 hover:border-cyan-500 text-cyan-300 hover:text-cyan-200 font-bold rounded-lg transition-all duration-200">
              View Details
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
