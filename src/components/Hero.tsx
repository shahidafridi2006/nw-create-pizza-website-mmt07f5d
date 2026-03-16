import { ChevronDown, Star, Clock, Truck } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1920&auto=format&fit=crop&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Floating Pizza Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 opacity-20 animate-float">
          <svg viewBox="0 0 100 100" className="w-full h-full text-pizza-yellow-400">
            <circle cx="50" cy="50" r="45" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute top-40 right-20 w-16 h-16 opacity-20 animate-float" style={{ animationDelay: '1s' }}>
          <svg viewBox="0 0 100 100" className="w-full h-full text-pizza-red-400">
            <circle cx="50" cy="50" r="45" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute bottom-40 left-1/4 w-12 h-12 opacity-20 animate-float" style={{ animationDelay: '2s' }}>
          <svg viewBox="0 0 100 100" className="w-full h-full text-pizza-yellow-300">
            <circle cx="50" cy="50" r="45" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
          <Star className="w-5 h-5 text-pizza-yellow-400 fill-pizza-yellow-400" />
          <span className="text-white font-medium">Rated #1 Pizza in Town</span>
        </div>

        {/* Main Heading */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
          Handcrafted
          <span className="block text-pizza-yellow-400">Italian Pizza</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          Made with love, fresh ingredients, and our secret family recipe passed down through generations
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="#menu"
            className="btn-primary text-lg"
          >
            Order Now
          </a>
          <a
            href="#about"
            className="btn-outline bg-transparent border-white text-white hover:bg-white hover:text-pizza-red-600"
          >
            Our Story
          </a>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl">
            <Clock className="w-6 h-6 text-pizza-yellow-400" />
            <span className="text-white font-medium">30 Min Delivery</span>
          </div>
          <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl">
            <Truck className="w-6 h-6 text-pizza-yellow-400" />
            <span className="text-white font-medium">Free Delivery $25+</span>
          </div>
          <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl">
            <Star className="w-6 h-6 text-pizza-yellow-400 fill-pizza-yellow-400" />
            <span className="text-white font-medium">4.9 Rating</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#menu"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition-colors animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  )
}