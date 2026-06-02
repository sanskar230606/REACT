import React, { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      info: 'hello@advrouting.com',
      desc: 'We respond within 24 hours'
    },
    {
      icon: '💬',
      title: 'Live Chat',
      info: 'Available 24/7',
      desc: 'Get instant support'
    },
    {
      icon: '📞',
      title: 'Phone',
      info: '+1 (555) 123-4567',
      desc: 'Mon-Fri, 9AM-6PM EST'
    }
  ]

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-xl text-slate-300">Have questions? We'd love to hear from you</p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, i) => (
            <div key={i} className="p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-slate-600 transition-all duration-300 text-center">
              <p className="text-5xl mb-4">{method.icon}</p>
              <h3 className="text-xl font-semibold text-white mb-2">{method.title}</h3>
              <p className="text-blue-400 font-semibold mb-2">{method.info}</p>
              <p className="text-slate-400 text-sm">{method.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700">
          <h2 className="text-3xl font-bold text-white mb-8">Send us a Message</h2>

          {submitted && (
            <div className="mb-6 p-4 rounded-lg bg-emerald-500/20 border border-emerald-500/30 text-emerald-300">
              ✓ Thank you! Your message has been sent successfully.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-semibold text-white mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-600 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-200"
                placeholder="John Doe"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold text-white mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-600 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-200"
                placeholder="john@example.com"
              />
            </div>

            {/* Subject Field */}
            <div>
              <label className="block text-sm font-semibold text-white mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-600 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-200"
                placeholder="How can we help?"
              />
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-sm font-semibold text-white mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-600 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-200 resize-none"
                placeholder="Tell us more about your inquiry..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How long do courses take to complete?',
              a: 'Most courses range from 4-6 weeks depending on the level. You can learn at your own pace.'
            },
            {
              q: 'Is there a money-back guarantee?',
              a: 'Yes! We offer a 30-day money-back guarantee if you are not satisfied with the course.'
            },
            {
              q: 'Do I get a certificate after completing a course?',
              a: 'Absolutely! You will receive a certificate of completion that you can share on your resume.'
            }
          ].map((faq, i) => (
            <div key={i} className="p-4 rounded-lg bg-slate-800/50 border border-slate-700">
              <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
              <p className="text-slate-400">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
