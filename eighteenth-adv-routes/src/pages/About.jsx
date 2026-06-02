import React from 'react'

export default function About() {
  const team = [
    { name: 'Alex Johnson', role: 'Lead Instructor', color: 'from-blue-500 to-cyan-500' },
    { name: 'Sam Rivera', role: 'Curriculum Designer', color: 'from-purple-500 to-pink-500' },
    { name: 'Jordan Lee', role: 'Technical Mentor', color: 'from-emerald-500 to-teal-500' }
  ]

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">About Our Platform</h1>
          <p className="text-xl text-slate-300">Dedicated to teaching modern React routing patterns</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700">
            <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-slate-300 leading-relaxed">
              We're committed to making advanced React routing accessible to developers of all levels. Through practical, hands-on projects, we help you master complex navigation patterns and build scalable applications.
            </p>
          </div>
          <div className="p-8 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700">
            <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-slate-300 leading-relaxed">
              To empower developers worldwide with the skills needed to build sophisticated, production-ready React applications with confidence and expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <div key={i} className="text-center p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-slate-600 transition-all duration-300">
              <div className={`w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-4xl font-bold text-white`}>
                {member.name.charAt(0)}
              </div>
              <h3 className="text-xl font-semibold text-white">{member.name}</h3>
              <p className="text-slate-400 mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Our Values</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { title: 'Excellence', icon: '✨' },
            { title: 'Integrity', icon: '🎯' },
            { title: 'Community', icon: '🤝' },
            { title: 'Innovation', icon: '💡' }
          ].map((value, i) => (
            <div key={i} className="p-6 text-center rounded-lg bg-slate-800/30 border border-slate-700">
              <p className="text-4xl mb-3">{value.icon}</p>
              <h3 className="font-semibold text-white">{value.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
