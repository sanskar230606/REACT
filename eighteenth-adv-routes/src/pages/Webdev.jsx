import React, { useState } from 'react'

export default function Webdev() {
  const [expandedFramework, setExpandedFramework] = useState(null)

  const frameworks = [
    {
      icon: '⚛️',
      name: 'React',
      desc: 'Build interactive UIs with component-based architecture',
      topics: ['JSX', 'Hooks', 'State Management', 'Routing'],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: '⚡',
      name: 'Vue.js',
      desc: 'Progressive framework for building user interfaces',
      topics: ['Components', 'Directives', 'Composition API', 'Pinia'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: '🔨',
      name: 'Next.js',
      desc: 'Full-stack React framework with SSR and static generation',
      topics: ['Server Components', 'App Router', 'API Routes', 'Deployment'],
      color: 'from-slate-600 to-slate-900'
    },
    {
      icon: '🚀',
      name: 'Node.js',
      desc: 'JavaScript runtime for building server-side applications',
      topics: ['Express', 'Async/Await', 'APIs', 'Databases'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: '🎨',
      name: 'Tailwind CSS',
      desc: 'Utility-first CSS framework for rapid UI development',
      topics: ['Utilities', 'Components', 'Responsive Design', 'Animation'],
      color: 'from-blue-400 to-cyan-400'
    },
    {
      icon: '💾',
      name: 'Databases',
      desc: 'Learn SQL and NoSQL databases for data persistence',
      topics: ['MongoDB', 'PostgreSQL', 'Firebase', 'Redis'],
      color: 'from-purple-500 to-pink-500'
    }
  ]

  const courses = [
    {
      title: 'Web Fundamentals',
      level: 'Beginner',
      duration: '3 weeks',
      students: 4200,
      price: 19,
      color: 'from-blue-600 to-cyan-500',
      topics: 'HTML, CSS, JavaScript'
    },
    {
      title: 'React Mastery',
      level: 'Intermediate',
      duration: '5 weeks',
      students: 3800,
      price: 39,
      color: 'from-cyan-600 to-blue-500',
      topics: 'Components, Hooks, State'
    },
    {
      title: 'Full-Stack Development',
      level: 'Advanced',
      duration: '8 weeks',
      students: 2900,
      price: 69,
      color: 'from-purple-600 to-pink-500',
      topics: 'Frontend + Backend + Database'
    },
    {
      title: 'Web Design Principles',
      level: 'Beginner',
      duration: '4 weeks',
      students: 3100,
      price: 29,
      color: 'from-emerald-600 to-teal-500',
      topics: 'UI/UX, Design Systems, Figma'
    }
  ]

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 via-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4">
            <span className="text-6xl animate-bounce">💻</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mb-4">
            Web Development
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Master modern web development. Build beautiful, responsive, and performant web applications using the latest technologies and frameworks.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 border-y border-slate-700/50 bg-slate-900/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              { label: 'Students', value: '25K+' },
              { label: 'Courses', value: '60+' },
              { label: 'Job Ready', value: '98%' },
              { label: 'Avg Rating', value: '4.95★' }
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">{stat.value}</p>
                <p className="text-xs text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frameworks & Technologies */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Frameworks & Technologies</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {frameworks.map((framework, i) => (
            <div
              key={i}
              onClick={() => setExpandedFramework(expandedFramework === i ? null : i)}
              className="group cursor-pointer p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:bg-slate-800"
            >
              <div className="flex items-start justify-between mb-3">
                <p className="text-4xl">{framework.icon}</p>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${framework.color} text-white opacity-80`}>
                  Popular
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{framework.name}</h3>
              <p className="text-slate-400 text-sm mb-4">{framework.desc}</p>

              {expandedFramework === i && (
                <div className="mt-4 pt-4 border-t border-slate-600">
                  <p className="text-xs text-slate-300 font-semibold mb-2">Key Topics:</p>
                  <div className="flex flex-wrap gap-2">
                    {framework.topics.map((topic, j) => (
                      <span key={j} className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded border border-cyan-500/30">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Popular Courses</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, i) => (
            <div key={i} className="group rounded-xl overflow-hidden bg-slate-800/50 border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
              <div className={`h-32 bg-gradient-to-r ${course.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">{course.title}</h3>
                <p className="text-sm text-slate-400 mb-3">{course.topics}</p>

                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                    {course.level}
                  </span>
                </div>

                <div className="space-y-2 mb-4 text-sm text-slate-300">
                  <div className="flex items-center justify-between">
                    <span>⏱️ {course.duration}</span>
                    <span>👥 {course.students.toLocaleString()}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                  <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    ${course.price}
                  </span>
                  <button className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white text-sm font-semibold rounded-lg transition-all duration-200">
                    Enroll
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Web Development Process</h2>
        <div className="grid md:grid-cols-5 gap-4">
          {[
            { icon: '🎨', title: 'Design', desc: 'UI/UX Design' },
            { icon: '👨‍💻', title: 'Frontend', desc: 'Build Interface' },
            { icon: '⚙️', title: 'Backend', desc: 'Server Logic' },
            { icon: '💾', title: 'Database', desc: 'Data Storage' },
            { icon: '🚀', title: 'Deploy', desc: 'Go Live' }
          ].map((step, i) => (
            <div key={i} className="text-center p-4 rounded-lg bg-slate-800/30 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300">
              <p className="text-4xl mb-2">{step.icon}</p>
              <h3 className="font-bold text-white">{step.title}</h3>
              <p className="text-xs text-slate-400">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Project Showcase */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Build Real Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { project: 'E-Commerce Platform', tech: 'React, Node.js, MongoDB', difficulty: 'Advanced' },
            { project: 'Social Media App', tech: 'Next.js, Firebase', difficulty: 'Intermediate' },
            { project: 'Task Management Tool', tech: 'React, Express, PostgreSQL', difficulty: 'Intermediate' }
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300">
              <h3 className="text-lg font-bold text-white mb-2">{item.project}</h3>
              <p className="text-slate-400 text-sm mb-3">{item.tech}</p>
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded border border-yellow-500/30">
                  {item.difficulty}
                </span>
                <button className="px-4 py-1 bg-cyan-600/20 hover:bg-cyan-600/30 text-cyan-300 text-sm rounded transition-all duration-200">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-xl bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-purple-600/20 border border-cyan-500/30 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Start Building Amazing Websites</h2>
          <p className="text-slate-300 mb-8">Join our community and become a professional web developer</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-bold rounded-lg transition-all duration-200 transform hover:scale-105">
              Start Learning
            </button>
            <button className="px-8 py-3 border-2 border-cyan-500/50 hover:border-cyan-500 text-cyan-300 hover:text-cyan-200 font-bold rounded-lg transition-all duration-200">
              View Curriculum
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
