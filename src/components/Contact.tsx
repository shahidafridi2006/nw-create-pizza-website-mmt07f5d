import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'

interface ContactForm {
  name: string
  email: string
  phone: string
  message: string
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', phone: '', message: '' })
    
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Pizza Street', 'Little Italy, NY 10013'],
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['(555) 123-4567', '(555) 765-4321'],
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@pizzaparadise.com', 'orders@pizzaparadise.com'],
    },
    {
      icon: Clock,
      title: 'Opening Hours',
      details: ['Mon-Thu: 11am - 10pm', 'Fri-Sun: 11am - 11pm'],
    },
  ]

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-pizza-red-100 text-pizza-red-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Get in Touch
          </span>
          <h2 className="section-title text-gray-900">
            Contact <span className="text-pizza-red-600">Us</span>
          </h2>
          <p className="section-subtitle">
            Have questions or feedback? We'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-pizza-cream rounded-2xl p-8">
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-6">
              Send us a Message
            </h3>
            
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h4>
                <p className="text-gray-600">We'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pizza-red-500 focus:ring-2 focus:ring-pizza-red-200 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pizza-red-500 focus:ring-2 focus:ring-pizza-red-200 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pizza-red-500 focus:ring-2 focus:ring-pizza-red-200 outline-none transition-all"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pizza-red-500 focus:ring-2 focus:ring-pizza-red-200 outline-none transition-all resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info & Map */}
          <div>
            {/* Contact Info Cards */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {contactInfo.map((info, i) => (
                <div key={i} className="bg-pizza-cream rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-pizza-red-100 rounded-lg flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-pizza-red-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900">{info.title}</h4>
                  </div>
                  {info.details.map((detail, j) => (
                    <p key={j} className="text-gray-600 text-sm ml-13">{detail}</p>
                  ))}
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="bg-gray-200 rounded-2xl overflow-hidden h-[300px] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076794379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d4d!2sGoogle!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pizza Paradise Location"
              />
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {['facebook', 'instagram', 'twitter', 'tiktok'].map((social) => (
                  <a
                    key={social}
                    href={`#${social}`}
                    className="w-12 h-12 bg-pizza-red-100 rounded-full flex items-center justify-center hover:bg-pizza-red-600 transition-colors group"
                  >
                    <span className="text-pizza-red-600 group-hover:text-white font-medium uppercase text-sm">
                      {social.charAt(0)}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 bg-gradient-pizza rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
            Get Exclusive Deals & Updates
          </h3>
          <p className="text-white/90 mb-6 max-w-xl mx-auto">
            Subscribe to our newsletter and get 10% off your first order, plus exclusive access to new pizzas and special offers!
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="bg-white text-pizza-red-600 font-semibold px-8 py-3 rounded-full hover:bg-pizza-cream transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}