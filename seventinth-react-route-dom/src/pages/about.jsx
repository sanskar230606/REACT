import React from 'react'

const about = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl opacity-90">Learn more about our mission and vision</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We are dedicated to providing high-quality React education to developers worldwide. Our mission is to make learning React accessible, engaging, and practical for everyone.
          </p>
          <p className="text-gray-700 leading-relaxed">
            With over 500+ students and growing, we've helped countless developers master modern web development and build amazing applications.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            To become the most trusted platform for learning React and modern JavaScript. We believe in hands-on learning, community support, and continuous improvement.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Team</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center p-4">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-3"></div>
              <h3 className="font-bold text-gray-900">John Developer</h3>
              <p className="text-gray-600">Lead Instructor</p>
            </div>
            <div className="text-center p-4">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mx-auto mb-3"></div>
              <h3 className="font-bold text-gray-900">Sarah Code</h3>
              <p className="text-gray-600">Course Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default about
