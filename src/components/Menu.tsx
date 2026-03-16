import { useState } from 'react'
import { Search, Flame, Leaf, Star } from 'lucide-react'
import PizzaCard from './PizzaCard'
import { Pizza } from '../types'

interface MenuProps {
  pizzas: Pizza[]
  isLoading: boolean
  addToCart: (pizza: Pizza, size: 'small' | 'medium' | 'large' | 'extra-large', quantity: number) => void
}

type Category = 'all' | 'classic' | 'specialty' | 'gourmet'

export default function Menu({ pizzas, isLoading, addToCart }: MenuProps) {
  const [activeCategory, setActiveCategory] = useState<Category>('all')
  const [searchQuery, setSearchQuery] = useState('')

  const categories: { id: Category; name: string; icon?: React.ReactNode }[] = [
    { id: 'all', name: 'All Pizzas' },
    { id: 'classic', name: 'Classic' },
    { id: 'specialty', name: 'Specialty' },
    { id: 'gourmet', name: 'Gourmet' },
  ]

  const filteredPizzas = pizzas.filter(pizza => {
    const matchesCategory = activeCategory === 'all' || pizza.category === activeCategory
    const matchesSearch = pizza.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          pizza.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          pizza.ingredients.some(ing => ing.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredPizzas = pizzas.filter(pizza => pizza.popularity >= 90)

  return (
    <section id="menu" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-pizza-red-100 text-pizza-red-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Our Menu
          </span>
          <h2 className="section-title text-gray-900">
            Delicious <span className="text-pizza-red-600">Pizzas</span>
          </h2>
          <p className="section-subtitle">
            Choose from our wide selection of handcrafted pizzas, made with the freshest ingredients and baked to perfection
          </p>
        </div>

        {/* Featured Pizzas */}
        {activeCategory === 'all' && !searchQuery && (
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-6">
              <Flame className="w-6 h-6 text-pizza-red-600" />
              <h3 className="text-2xl font-display font-bold text-gray-900">Popular Picks</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredPizzas.slice(0, 3).map(pizza => (
                <div key={pizza.id} className="relative">
                  <div className="absolute -top-2 -right-2 z-10 bg-pizza-red-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Flame className="w-4 h-4" />
                    Hot
                  </div>
                  <PizzaCard pizza={pizza} addToCart={addToCart} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search pizzas, ingredients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:border-pizza-red-500 focus:ring-2 focus:ring-pizza-red-200 outline-none transition-all"
            />
          </div>

          {/* Category Filters */}
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium whitespace-nowrap transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-pizza-red-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-pizza-red-50 border border-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Dietary Filters */}
        <div className="flex gap-4 mb-8">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="w-5 h-5 rounded border-gray-300 text-pizza-red-600 focus:ring-pizza-red-500"
            />
            <Leaf className="w-4 h-4 text-green-600" />
            <span className="text-gray-700">Vegetarian</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="w-5 h-5 rounded border-gray-300 text-pizza-red-600 focus:ring-pizza-red-500"
            />
            <Flame className="w-4 h-4 text-pizza-red-600" />
            <span className="text-gray-700">Spicy</span>
          </label>
        </div>

        {/* Pizza Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="card animate-pulse">
                <div className="h-48 bg-gray-200" />
                <div className="p-6">
                  <div className="h-6 bg-gray-200 rounded mb-2" />
                  <div className="h-4 bg-gray-200 rounded mb-4" />
                  <div className="h-10 bg-gray-200 rounded" />
                </div>
              </div>
            ))}
          </div>
        ) : filteredPizzas.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPizzas.map(pizza => (
              <PizzaCard key={pizza.id} pizza={pizza} addToCart={addToCart} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🍕</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No pizzas found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '50+', label: 'Pizza Varieties' },
            { value: '10K+', label: 'Happy Customers' },
            { value: '4.9', label: 'Average Rating', icon: Star },
            { value: '15+', label: 'Years Experience' },
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="flex items-center justify-center gap-1 mb-2">
                <span className="text-3xl md:text-4xl font-bold text-pizza-red-600">{stat.value}</span>
                {stat.icon && <stat.icon className="w-6 h-6 text-pizza-yellow-500 fill-pizza-yellow-500" />}
              </div>
              <span className="text-gray-600">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}