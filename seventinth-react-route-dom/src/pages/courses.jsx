import React from 'react'

const courses = () => {
  const coursesList = [
    {
      id: 1,
      title: 'React Basics',
      duration: '4 weeks',
      level: 'Beginner',
      students: '1,250',
      rating: 4.8,
      price: '$29'
    },
    {
      id: 2,
      title: 'Advanced React Patterns',
      duration: '6 weeks',
      level: 'Advanced',
      students: '850',
      rating: 4.9,
      price: '$49'
    },
    {
      id: 3,
      title: 'React with TypeScript',
      duration: '5 weeks',
      level: 'Intermediate',
      students: '920',
      rating: 4.7,
      price: '$39'
    },
    {
      id: 4,
      title: 'State Management with Redux',
      duration: '4 weeks',
      level: 'Intermediate',
      students: '650',
      rating: 4.6,
      price: '$35'
    }
  ]

  const getLevelColor = (level) => {
    switch(level) {
      case 'Beginner':
        return 'bg-green-100 text-green-800'
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800'
      case 'Advanced':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Courses</h1>
          <p className="text-xl opacity-90">Choose from our selection of React courses</p>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coursesList.map(course => (
            <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-indigo-500 to-blue-500 h-32"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                <div className="mb-3">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(course.level)}`}>
                    {course.level}
                  </span>
                </div>
                <div className="text-sm text-gray-600 space-y-2 mb-4">
                  <p>⏱️ {course.duration}</p>
                  <p>👥 {course.students} students</p>
                  <p>⭐ {course.rating} rating</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">{course.price}</span>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition duration-200">
                    Enroll
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default courses
