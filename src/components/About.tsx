import { ChefHat, Award, Heart, Leaf, Clock, Users } from 'lucide-react'

export default function About() {
  const features = [
    {
      icon: Leaf,
      title: 'Fresh Ingredients',
      description: 'We source only the finest, freshest ingredients from local farms and imported Italian specialties.',
    },
    {
      icon: ChefHat,
      title: 'Expert Chefs',
      description: 'Our pizzaiolos are trained in traditional Italian techniques with over 50 years of combined experience.',
    },
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: 'Hot pizza at your door in 30 minutes or less, guaranteed. Track your order in real-time.',
    },
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Every pizza is handcrafted with care, from kneading the dough to adding the final toppings.',
    },
  ]

  const stats = [
    { value: '15+', label: 'Years of Excellence', icon: Award },
    { value: '50K+', label: 'Pizzas Made', icon: ChefHat },
    { value: '10K+', label: 'Happy Customers', icon: Users },
    { value: '100%', label: 'Fresh Ingredients', icon: Leaf },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-pizza-red-100 text-pizza-red-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Our Story
          </span>
          <h2 className="section-title text-gray-900">
            About <span className="text-pizza-red-600">Pizza Paradise</span>
          </h2>
          <p className="section-subtitle">
            A family tradition of authentic Italian pizza-making, passed down through generations
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image Side */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1579751626657-72bc17010498?w=800&auto=format&fit=crop&q=60"
                alt="Chef making pizza"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-pizza-yellow-400 rounded-full opacity-50" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-pizza-red-400 rounded-full opacity-50" />
            <div className="absolute top-1/2 -right-8 bg-white shadow-xl rounded-xl p-4 z-20">
              <div className="flex items-center gap-3">
                <div className="bg-pizza-red-100 p-2 rounded-full">
                  <Award className="w-6 h-6 text-pizza-red-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Best Pizza</p>
                  <p className="text-sm text-gray-500">Award 2024</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div>
            <h3 className="text-3xl font-display font-bold text-gray-900 mb-6">
              A Passion for Perfect Pizza
            </h3>
            <p className="text-gray-600 mb-4">
              Founded in 2009 by the Rossi family, Pizza Paradise began as a small pizzeria with a big dream: 
              to bring authentic Italian pizza to our community. What started as a family kitchen experiment 
              has grown into a beloved local institution.
            </p>
            <p className="text-gray-600 mb-6">
              Our secret? It's not really a secret at all. We use time-honored recipes passed down from 
              our grandmother in Naples, combined with the freshest ingredients we can find. Every pizza 
              is made with love, hand-tossed to perfection, and baked in our traditional stone oven.
            </p>

            {/* Values */}
            <div className="space-y-4">
              {[
                'Hand-tossed dough made fresh daily',
                'San Marzano tomatoes imported from Italy',
                '100% mozzarella cheese, never frozen',
                'Family recipes passed down 3 generations',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-pizza-red-100 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-pizza-red-600" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <button className="btn-primary mt-8">
              Read Our Full Story
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-pizza-cream rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="w-14 h-14 bg-pizza-red-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-pizza-red-600 transition-colors">
                <feature.icon className="w-7 h-7 text-pizza-red-600 group-hover:text-white transition-colors" />
              </div>
              <h4 className="font-display text-xl font-bold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-gradient-pizza rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-display font-bold text-gray-900 text-center mb-8">
            Meet Our Master Pizzaiolos
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Marco Rossi', role: 'Head Chef', image: 'https://images.unsplash.com/photo-1583394293214-28ez3f4d8d1b?w=400&auto=format&fit=crop&q=60' },
              { name: 'Sofia Bianchi', role: 'Sous Chef', image: 'https://images.unsplash.com/photo-1577219491135-ce391630fb3c?w=400&auto=format&fit=crop&q=60' },
              { name: 'Luca Conti', role: 'Pastry Chef', image: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf52?w=400&auto=format&fit=crop&q=60' },
            ].map((chef, i) => (
              <div key={i} className="text-center group">
                <div className="relative mb-4 inline-block">
                  <img
                    src={chef.image}
                    alt={chef.name}
                    className="w-40 h-40 rounded-full object-cover mx-auto group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 rounded-full border-4 border-pizza-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h4 className="font-display text-xl font-bold text-gray-900">{chef.name}</h4>
                <p className="text-pizza-red-600 font-medium">{chef.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}