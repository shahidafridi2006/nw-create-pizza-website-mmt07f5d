import { useState } from 'react'
import { ShoppingCart, Leaf, Flame, Star, Plus, Minus } from 'lucide-react'
import { Pizza } from '../types'

interface PizzaCardProps {
  pizza: Pizza
  addToCart: (pizza: Pizza, size: 'small' | 'medium' | 'large' | 'extra-large', quantity: number) => void
}

const sizeOptions = [
  { name: 'Small', value: 'small', multiplier: 0.8, slices: 6 },
  { name: 'Medium', value: 'medium', multiplier: 1, slices: 8 },
  { name: 'Large', value: 'large', multiplier: 1.3, slices: 10 },
  { name: 'Extra Large', value: 'extra-large', multiplier: 1.6, slices: 12 },
] as const

export default function PizzaCard({ pizza, addToCart }: PizzaCardProps) {
  const [selectedSize, setSelectedSize] = useState<'small' | 'medium' | 'large' | 'extra-large'>('medium')
  const [quantity, setQuantity] = useState(1)
  const [isAdding, setIsAdding] = useState(false)

  const currentSizeOption = sizeOptions.find(s => s.value === selectedSize)!
  const price = (pizza.price * currentSizeOption.multiplier * quantity).toFixed(2)

  const handleAddToCart = () => {
    setIsAdding(true)
    addToCart(pizza, selectedSize, quantity)
    setTimeout(() => {
      setIsAdding(false)
      setQuantity(1)
    }, 500)
  }

  return (
    <div className="card group">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={pizza.image}
          alt={pizza.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {pizza.is_vegetarian && (
            <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
              <Leaf className="w-3 h-3" />
              Veggie
            </span>
          )}
          {pizza.is_spicy && (
            <span className="bg-pizza-red-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
              <Flame className="w-3 h-3" />
              Spicy
            </span>
          )}
        </div>

        {/* Rating */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
          <Star className="w-4 h-4 text-pizza-yellow-500 fill-pizza-yellow-500" />
          <span className="text-sm font-medium">{(pizza.popularity / 20).toFixed(1)}</span>
        </div>

        {/* Category Badge */}
        <div className="absolute bottom-3 left-3">
          <span className="bg-pizza-yellow-500 text-white px-3 py-1 rounded-full text-xs font-medium uppercase">
            {pizza.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display text-xl font-bold text-gray-900 mb-2">{pizza.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{pizza.description}</p>

        {/* Ingredients */}
        <div className="flex flex-wrap gap-1 mb-4">
          {pizza.ingredients.slice(0, 4).map((ingredient, i) => (
            <span
              key={i}
              className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-xs"
            >
              {ingredient}
            </span>
          ))}
          {pizza.ingredients.length > 4 && (
            <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-xs">
              +{pizza.ingredients.length - 4} more
            </span>
          )}
        </div>

        {/* Size Selection */}
        <div className="mb-4">
          <label className="text-sm font-medium text-gray-700 mb-2 block">Size:</label>
          <div className="grid grid-cols-4 gap-1">
            {sizeOptions.map(size => (
              <button
                key={size.value}
                onClick={() => setSelectedSize(size.value)}
                className={`py-2 px-1 text-xs rounded-lg transition-all ${
                  selectedSize === size.value
                    ? 'bg-pizza-red-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {size.name.split(' ')[0]}
              </button>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-1">
            {currentSizeOption.slices} slices
          </p>
        </div>

        {/* Quantity */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="font-medium text-lg w-8 text-center">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
          <div className="text-right">
            <span className="text-2xl font-bold text-pizza-red-600">${price}</span>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          disabled={isAdding}
          className={`w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
            isAdding
              ? 'bg-green-500 text-white'
              : 'bg-pizza-red-600 hover:bg-pizza-red-700 text-white'
          }`}
        >
          {isAdding ? (
            <>
              <span>Added!</span>
            </>
          ) : (
            <>
              <ShoppingCart className="w-5 h-5" />
              <span>Add to Cart</span>
            </>
          )}
        </button>
      </div>
    </div>
  )
}