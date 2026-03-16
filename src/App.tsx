import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Menu from './components/Menu'
import About from './components/About'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Cart from './components/Cart'
import OrderModal from './components/OrderModal'
import { CartItem, Pizza } from './types'

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false)
  const [pizzas, setPizzas] = useState<Pizza[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Load pizzas from mock data for demo
    // In production, this would fetch from Supabase
    const mockPizzas: Pizza[] = [
      {
        id: '1',
        name: 'Margherita',
        description: 'Fresh tomatoes, mozzarella cheese, basil, and olive oil on our signature crust',
        price: 14.99,
        image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80f002?w=800&auto=format&fit=crop&q=60',
        category: 'classic',
        ingredients: ['Tomato Sauce', 'Mozzarella', 'Fresh Basil', 'Olive Oil'],
        is_vegetarian: true,
        is_spicy: false,
        popularity: 95
      },
      {
        id: '2',
        name: 'Pepperoni Supreme',
        description: 'Loaded with premium pepperoni, mozzarella, and our secret blend of Italian herbs',
        price: 17.99,
        image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&auto=format&fit=crop&q=60',
        category: 'classic',
        ingredients: ['Tomato Sauce', 'Mozzarella', 'Pepperoni', 'Italian Herbs'],
        is_vegetarian: false,
        is_spicy: false,
        popularity: 98
      },
      {
        id: '3',
        name: 'BBQ Chicken',
        description: 'Grilled chicken, smoky BBQ sauce, red onions, and cilantro on a golden crust',
        price: 18.99,
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop&q=60',
        category: 'specialty',
        ingredients: ['BBQ Sauce', 'Grilled Chicken', 'Red Onions', 'Cilantro', 'Mozzarella'],
        is_vegetarian: false,
        is_spicy: false,
        popularity: 88
      },
      {
        id: '4',
        name: 'Veggie Delight',
        description: 'A garden of fresh vegetables including bell peppers, mushrooms, olives, and artichokes',
        price: 16.99,
        image: 'https://images.unsplash.com/photo-1511689660979-10d2b1aada49?w=800&auto=format&fit=crop&q=60',
        category: 'specialty',
        ingredients: ['Tomato Sauce', 'Mozzarella', 'Bell Peppers', 'Mushrooms', 'Olives', 'Artichokes'],
        is_vegetarian: true,
        is_spicy: false,
        popularity: 82
      },
      {
        id: '5',
        name: 'Meat Lovers',
        description: 'For the carnivore in you - pepperoni, sausage, bacon, ham, and ground beef',
        price: 21.99,
        image: 'https://images.unsplash.com/photo-1594007654729-1207fad2ba21?w=800&auto=format&fit=crop&q=60',
        category: 'specialty',
        ingredients: ['Tomato Sauce', 'Mozzarella', 'Pepperoni', 'Italian Sausage', 'Bacon', 'Ham', 'Ground Beef'],
        is_vegetarian: false,
        is_spicy: false,
        popularity: 91
      },
      {
        id: '6',
        name: 'Hawaiian Paradise',
        description: 'Sweet pineapple, smoky ham, and melted mozzarella - a tropical twist',
        price: 17.99,
        image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb4816c?w=800&auto=format&fit=crop&q=60',
        category: 'specialty',
        ingredients: ['Tomato Sauce', 'Mozzarella', 'Ham', 'Pineapple'],
        is_vegetarian: false,
        is_spicy: false,
        popularity: 75
      },
      {
        id: '7',
        name: 'Buffalo Chicken',
        description: 'Spicy buffalo sauce, crispy chicken, ranch drizzle, and blue cheese crumbles',
        price: 19.99,
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop&q=60',
        category: 'gourmet',
        ingredients: ['Buffalo Sauce', 'Crispy Chicken', 'Ranch Drizzle', 'Blue Cheese', 'Mozzarella'],
        is_vegetarian: false,
        is_spicy: true,
        popularity: 85
      },
      {
        id: '8',
        name: 'Truffle Mushroom',
        description: 'Wild mushroom medley with truffle oil, fontina cheese, and fresh thyme',
        price: 24.99,
        image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80f002?w=800&auto=format&fit=crop&q=60',
        category: 'gourmet',
        ingredients: ['Truffle Oil', 'Wild Mushrooms', 'Fontina Cheese', 'Fresh Thyme', 'Garlic'],
        is_vegetarian: true,
        is_spicy: false,
        popularity: 78
      },
      {
        id: '9',
        name: 'Four Cheese',
        description: 'Mozzarella, gorgonzola, parmesan, and fontina - a cheese lover\'s dream',
        price: 18.99,
        image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=800&auto=format&fit=crop&q=60',
        category: 'classic',
        ingredients: ['Mozzarella', 'Gorgonzola', 'Parmesan', 'Fontina', 'Garlic Oil'],
        is_vegetarian: true,
        is_spicy: false,
        popularity: 87
      },
      {
        id: '10',
        name: 'Spicy Diavola',
        description: 'Calabrian chili, spicy salami, roasted peppers, and mozzarella - for heat seekers',
        price: 19.99,
        image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=800&auto=format&fit=crop&q=60',
        category: 'gourmet',
        ingredients: ['Tomato Sauce', 'Mozzarella', 'Spicy Salami', 'Calabrian Chili', 'Roasted Peppers'],
        is_vegetarian: false,
        is_spicy: true,
        popularity: 80
      }
    ]
    
    setPizzas(mockPizzas)
    setIsLoading(false)
  }, [])

  const addToCart = (pizza: Pizza, size: CartItem['size'] = 'medium', quantity: number = 1) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(
        item => item.pizza.id === pizza.id && item.size === size
      )
      
      if (existingItem) {
        return prevItems.map(item =>
          item.pizza.id === pizza.id && item.size === size
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      
      return [...prevItems, { pizza, size, quantity, extra_toppings: [] }]
    })
  }

  const removeFromCart = (pizzaId: string, size: CartItem['size']) => {
    setCartItems(prevItems =>
      prevItems.filter(item => !(item.pizza.id === pizzaId && item.size === size))
    )
  }

  const updateQuantity = (pizzaId: string, size: CartItem['size'], quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(pizzaId, size)
      return
    }
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.pizza.id === pizzaId && item.size === size
          ? { ...item, quantity }
          : item
      )
    )
  }

  const clearCart = () => {
    setCartItems([])
  }

  const cartItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="min-h-screen bg-pizza-cream">
      <Header 
        cartItemsCount={cartItemsCount} 
        onCartClick={() => setIsCartOpen(true)} 
      />
      
      <main>
        <Hero />
        <Menu 
          pizzas={pizzas} 
          isLoading={isLoading} 
          addToCart={addToCart}
        />
        <About />
        <Reviews />
        <Contact />
      </main>
      
      <Footer />

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
        clearCart={clearCart}
        onCheckout={() => {
          setIsCartOpen(false)
          setIsOrderModalOpen(true)
        }}
      />

      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        cartItems={cartItems}
        clearCart={clearCart}
      />
    </div>
  )
}

export default App