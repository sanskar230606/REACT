import React, { useState } from 'react'

export default function AiMl() {
  const [selectedTopic, setSelectedTopic] = useState(null)

  const topics = [
    {
      icon: '🧠',
      title: 'Machine Learning',
      desc: 'Learn supervised, unsupervised, and reinforcement learning algorithms',
      skills: ['Classification', 'Regression', 'Clustering', 'Dimensionality Reduction']
    },
    {
      icon: '🤖',
      title: 'Deep Learning',
      desc: 'Master neural networks, CNNs, RNNs, and transformers',
      skills: ['Neural Networks', 'Computer Vision', 'NLP', 'Transformers']
    },
    {
      icon: '📊',
      title: 'Data Science',
      desc: 'Analyze and visualize data for actionable insights',
      skills: ['Data Analysis', 'Visualization', 'Statistical Methods', 'Data Mining']
    },
    {
      icon: '🔬',
      title: 'AI Ethics',
      desc: 'Understand responsible AI and ethical considerations',
      skills: ['Bias Detection', 'Fairness', 'Privacy', 'Transparency']
    }
  ]

  const courses = [
    {
      title: 'Python for ML',
      level: 'Beginner',
      duration: '3 weeks',
      students: 3200,
      price: 24,
      color: 'from-blue-600 to-cyan-500'
    },
    {
      title: 'Advanced Deep Learning',
      level: 'Advanced',
      duration: '8 weeks',
      students: 1850,
      price: 59,
      color: 'from-purple-600 to-pink-500'
    },
    {
      title: 'NLP with Transformers',
      level: 'Intermediate',
      duration: '6 weeks',
      students: 2100,
      price: 49,
      color: 'from-emerald-600 to-teal-500'
    },
    {
      title: 'Computer Vision',
      level: 'Intermediate',
      duration: '7 weeks',
      students: 1950,
      price: 54,
      color: 'from-orange-600 to-red-500'
    }
  ]

  const tools = ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'OpenCV', 'Pandas']

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4">
            <span className="text-6xl animate-bounce">🧠</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-4">
            AI & Machine Learning
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Master artificial intelligence and machine learning. Build intelligent systems that learn from data and make predictions.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 border-y border-slate-700/50 bg-slate-900/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              { label: 'Students', value: '12K+' },
              { label: 'Courses', value: '45+' },
              { label: 'Success Rate', value: '96%' },
              { label: 'Avg Rating', value: '4.9★' }
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{stat.value}</p>
                <p className="text-xs text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Topics */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Core Topics</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topics.map((topic, i) => (
            <div
              key={i}
              onClick={() => setSelectedTopic(selectedTopic === i ? null : i)}
              className="group cursor-pointer p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:bg-slate-800"
            >
              <p className="text-5xl mb-4 transform group-hover:scale-125 transition-transform duration-300">{topic.icon}</p>
              <h3 className="text-xl font-bold text-white mb-2">{topic.title}</h3>
              <p className="text-slate-400 text-sm mb-4">{topic.desc}</p>
              
              {selectedTopic === i && (
                <div className="mt-4 pt-4 border-t border-slate-600">
                  <p className="text-xs text-slate-300 font-semibold mb-2">Skills:</p>
                  <div className="flex flex-wrap gap-2">
                    {topic.skills.map((skill, j) => (
                      <span key={j} className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded border border-blue-500/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Tools & Frameworks */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Tools & Frameworks</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {tools.map((tool, i) => (
            <div
              key={i}
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 hover:border-purple-500/50 text-slate-300 hover:text-white transition-all duration-300 transform hover:scale-110 cursor-pointer"
            >
              {tool}
            </div>
          ))}
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Featured Courses</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, i) => (
            <div key={i} className="group rounded-xl overflow-hidden bg-slate-800/50 border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
              <div className={`h-32 bg-gradient-to-r ${course.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-3">{course.title}</h3>

                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30">
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
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    ${course.price}
                  </span>
                  <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm font-semibold rounded-lg transition-all duration-200">
                    Enroll
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Recommended Learning Path</h2>
        <div className="space-y-4">
          {[
            { step: '01', title: 'Python Fundamentals', time: '1 week' },
            { step: '02', title: 'Math for ML (Linear Algebra & Calculus)', time: '2 weeks' },
            { step: '03', title: 'Machine Learning Algorithms', time: '3 weeks' },
            { step: '04', title: 'Deep Learning & Neural Networks', time: '4 weeks' },
            { step: '05', title: 'Real-world Projects & Capstone', time: '2 weeks' }
          ].map((path, i) => (
            <div key={i} className="p-6 rounded-lg bg-slate-800/30 border border-slate-700 hover:border-blue-500/30 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold">
                  {path.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white">{path.title}</h3>
                </div>
                <span className="text-slate-400">{path.time}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-xl bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 border border-blue-500/30 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your AI Journey?</h2>
          <p className="text-slate-300 mb-8">Join thousands of students learning AI & Machine Learning</p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-lg transition-all duration-200 transform hover:scale-105">
            Get Started Now
          </button>
        </div>
      </section>
    </div>
  )
}
