import React, { useState, useMemo } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom';

export default function Courses() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [sortBy, setSortBy] = useState('popular')
  const location = useLocation()

  // Check if we're on a nested route (aiml, webdev, cyber)
  const isNestedRoute = location.pathname !== '/courses'

  const courses = [
    {
      id: 1,
      title: 'React Router Basics',
      level: 'Beginner',
      duration: '4 weeks',
      students: 2543,
      rating: 4.8,
      lessons: 24,
      price: 29,
      color: 'from-blue-600 to-blue-500'
    },
    {
      id: 2,
      title: 'Nested Routes & Layouts',
      level: 'Intermediate',
      duration: '5 weeks',
      students: 1890,
      rating: 4.9,
      lessons: 28,
      price: 39,
      color: 'from-purple-600 to-purple-500'
    },
    {
      id: 3,
      title: 'Advanced Routing Patterns',
      level: 'Advanced',
      duration: '6 weeks',
      students: 1245,
      rating: 4.7,
      lessons: 32,
      price: 49,
      color: 'from-pink-600 to-pink-500'
    },
    {
      id: 4,
      title: 'Dynamic Routes & Parameters',
      level: 'Intermediate',
      duration: '4 weeks',
      students: 2100,
      rating: 4.85,
      lessons: 26,
      price: 35,
      color: 'from-emerald-600 to-emerald-500'
    }
  ]

  const filteredAndSortedCourses = useMemo(() => {
    let result = courses

    // Filter by level
    if (activeFilter !== 'all') {
      result = result.filter(course => course.level.toLowerCase() === activeFilter.toLowerCase())
    }

    // Sort
    if (sortBy === 'popular') {
      result = [...result].sort((a, b) => b.students - a.students)
    } else if (sortBy === 'rating') {
      result = [...result].sort((a, b) => b.rating - a.rating)
    } else if (sortBy === 'price-low') {
      result = [...result].sort((a, b) => a.price - b.price)
    }

    return result
  }, [activeFilter, sortBy])

  const getLevelBadge = (level) => {
    const badges = {
      'Beginner': 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      'Intermediate': 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
      'Advanced': 'bg-red-500/20 text-red-300 border-red-500/30'
    }
    return badges[level] || badges['Beginner']
  }

  const filterButtons = [
    { id: 'all', label: 'All Courses' },
    { id: 'beginner', label: 'Beginner' },
    { id: 'intermediate', label: 'Intermediate' },
    { id: 'advanced', label: 'Advanced' }
  ]

  return (
    <div className="min-h-screen bg-slate-950">
      {isNestedRoute ? (
        <Outlet />
      ) : (
        <>
          {/* Header */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">Our Courses</h1>
          <p className="text-xl text-slate-300">Choose your learning path and master advanced React routing</p>
        </div>
      </section>

      {/* Filter & Sort Section */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Buttons */}
        <div className="mb-8">
          <p className="text-slate-300 font-semibold mb-4">Filter by Level:</p>
          <div className="flex flex-wrap gap-3">
            {filterButtons.map(btn => (
              <button
                key={btn.id}
                onClick={() => setActiveFilter(btn.id)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeFilter === btn.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50'
                    : 'bg-slate-800/50 text-slate-300 border border-slate-700 hover:border-slate-600'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Sort Dropdown */}
        <div className="mb-8">
          <p className="text-slate-300 font-semibold mb-4">Sort by:</p>
          <div className="flex gap-3">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-6 py-2 bg-slate-800/50 border border-slate-700 text-white rounded-lg focus:outline-none focus:border-purple-500 transition-all duration-200 hover:border-slate-600 cursor-pointer"
            >
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
              <option value="price-low">Price (Low to High)</option>
            </select>
            
            {/* Results Count */}
            <div className="px-6 py-2 bg-slate-800/30 border border-slate-700 rounded-lg text-slate-300 flex items-center">
              📊 Showing {filteredAndSortedCourses.length} course{filteredAndSortedCourses.length !== 1 ? 's' : ''}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredAndSortedCourses.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredAndSortedCourses.map(course => (
              <div key={course.id} className="group rounded-xl overflow-hidden bg-slate-800/50 border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
                {/* Course Header */}
                <div className={`h-32 bg-gradient-to-r ${course.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                </div>

                {/* Course Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">{course.title}</h3>

                  {/* Level Badge */}
                  <div className="mb-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${getLevelBadge(course.level)}`}>
                      {course.level}
                    </span>
                  </div>

                  {/* Course Stats */}
                  <div className="space-y-2 mb-4 text-sm text-slate-300">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1">⏱️ {course.duration}</span>
                      <span className="flex items-center gap-1">📚 {course.lessons}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1">👥 {course.students.toLocaleString()}</span>
                      <span className="flex items-center gap-1">⭐ {course.rating}</span>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      ${course.price}
                    </span>
                    <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-sm font-semibold rounded-lg transition-all duration-200">
                      Enroll
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-2xl text-slate-300">No courses found in this category.</p>
            <button
              onClick={() => setActiveFilter('all')}
              className="mt-4 px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all duration-200"
            >
              View All Courses
            </button>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Still deciding?</h2>
          <p className="text-slate-300 mb-6">Get access to all courses with our premium membership</p>
          <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-200">
            View Premium Plans
          </button>
        </div>
      </section>

      {/* Category Buttons */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Explore Other Categories</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* AI & ML Button */}
          <Link to="/courses/aiml" className="group p-8 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-slate-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 block">
            <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🤖</div>
            <h3 className="text-2xl font-bold text-white mb-2">AI & ML</h3>
            <p className="text-slate-300 text-sm mb-4">Master machine learning and artificial intelligence</p>
            <span className="text-blue-400 font-semibold text-sm">Learn More →</span>
          </Link>

          {/* Web Dev Button */}
          <Link to="/courses/webdev" className="group p-8 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-slate-700 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 block">
            <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">💻</div>
            <h3 className="text-2xl font-bold text-white mb-2">Web Dev</h3>
            <p className="text-slate-300 text-sm mb-4">Build modern web applications with cutting-edge technologies</p>
            <span className="text-purple-400 font-semibold text-sm">Learn More →</span>
          </Link>

          {/* Cyber Button */}
          <Link to="/courses/cyber" className="group p-8 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 block">
            <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🛡️</div>
            <h3 className="text-2xl font-bold text-white mb-2">Cyber</h3>
            <p className="text-slate-300 text-sm mb-4">Learn cybersecurity and protect systems from threats</p>
            <span className="text-cyan-400 font-semibold text-sm">Learn More →</span>
          </Link>
        </div>
      </section>
        </>
      )}
    </div>
  )
}
