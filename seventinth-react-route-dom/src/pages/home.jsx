import React from 'react'

const home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 py-16 sm:py-24">
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Welcome to React Route
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Learn React with modern routing patterns. Master component navigation and create dynamic user interfaces.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-200">
            Get Started
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">Fast Learning</h3>
            <p className="text-gray-600">Quick and efficient courses to get you up to speed with React.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">Comprehensive</h3>
            <p className="text-gray-600">From basics to advanced concepts, we cover everything you need.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl mb-4">💡</div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">Practical</h3>
            <p className="text-gray-600">Real-world projects and examples to apply your knowledge.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default home
