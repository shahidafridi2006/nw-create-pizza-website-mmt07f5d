import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

interface Review {
  id: string
  customer_name: string
  rating: number
  comment: string
  created_at: string
  pizza_name?: string
  avatar?: string
}

const mockReviews: Review[] = [
  {
    id: '1',
    customer_name: 'Sarah Johnson',
    rating: 5,
    comment: 'Absolutely the best pizza I\'ve ever had! The crust was perfectly crispy, and the toppings were so fresh. The delivery was super fast too. Will definitely order again!',
    created_at: '2024-01-15',
    pizza_name: 'Pepperoni Supreme',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60',
  },
  {
    id: '2',
    customer_name: 'Michael Chen',
    rating: 5,
    comment: 'The Truffle Mushroom pizza is a game changer! You can really taste the quality ingredients. My new favorite pizza place in town.',
    created_at: '2024-01-14',
    pizza_name: 'Truffle Mushroom',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60',
  },
  {
    id: '3',
    customer_name: 'Emily Rodriguez',
    rating: 4,
    comment: 'Great pizza and amazing service! The BBQ Chicken is my go-to. Only wish they had more dessert options. Otherwise, perfect!',
    created_at: '2024-01-13',
    pizza_name: 'BBQ Chicken',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=60',
  },
  {
    id: '4',
    customer_name: 'David Thompson',
    rating: 5,
    comment: 'Been ordering from Pizza Paradise for years. Consistently excellent quality. The Meat Lovers is absolutely loaded and delicious!',
    created_at: '2024-01-12',
    pizza_name: 'Meat Lovers',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=60',
  },
  {
    id: '5',
    customer_name: 'Jessica Williams',
    rating: 5,
    comment: 'The Veggie Delight is incredible! So many fresh vegetables and the cheese is perfectly melted. Love that they have so many vegetarian options.',
    created_at: '2024-01-11',
    pizza_name: 'Veggie Delight',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf02850df?w=100&auto=format&fit=crop&q=60',
  },
  {
    id: '6',
    customer_name: 'Robert Garcia',
    rating: 5,
    comment: 'The Spicy Diavola is perfect for anyone who loves heat! The Calabrian chili gives it an amazing kick. Fast delivery and still hot when it arrived.',
    created_at: '2024-01-10',
    pizza_name: 'Spicy Diavola',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=60',
  },
]

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const reviewsPerPage = 3
  const totalPages = Math.ceil(mockReviews.length / reviewsPerPage)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const visibleReviews = mockReviews.slice(
    currentIndex * reviewsPerPage,
    (currentIndex + 1) * reviewsPerPage
  )

  return (
    <section id="reviews" className="py-20 bg-pizza-cream">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-pizza-red-100 text-pizza-red-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="section-title text-gray-900">
            What Our <span className="text-pizza-red-600">Customers</span> Say
          </h2>
          <p className="section-subtitle">
            Don't just take our word for it - hear from our amazing customers
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-6">
            {visibleReviews.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
              >
                {/* Quote Icon */}
                <Quote className="absolute top-4 right-4 w-8 h-8 text-pizza-red-100" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < review.rating
                          ? 'text-pizza-yellow-400 fill-pizza-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-gray-600 mb-4 line-clamp-4">{review.comment}</p>

                {/* Pizza Name */}
                {review.pizza_name && (
                  <span className="inline-block bg-pizza-red-50 text-pizza-red-600 px-3 py-1 rounded-full text-sm mb-4">
                    {review.pizza_name}
                  </span>
                )}

                {/* Customer Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <img
                    src={review.avatar}
                    alt={review.customer_name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{review.customer_name}</p>
                    <p className="text-sm text-gray-500">
                      {new Date(review.created_at).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-pizza-red-50 transition-colors"
            aria-label="Previous reviews"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-pizza-red-50 transition-colors"
            aria-label="Next reviews"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentIndex === i ? 'bg-pizza-red-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>

        {/* Overall Rating */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
                Overall Rating
              </h3>
              <p className="text-gray-600">Based on 2,847 reviews</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-center">
                <p className="text-5xl font-bold text-pizza-red-600">4.9</p>
                <div className="flex gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-pizza-yellow-400 fill-pizza-yellow-400"
                    />
                  ))}
                </div>
              </div>
              <div className="hidden md:block">
                <div className="space-y-2">
                  {[
                    { stars: 5, percent: 89 },
                    { stars: 4, percent: 8 },
                    { stars: 3, percent: 2 },
                    { stars: 2, percent: 1 },
                    { stars: 1, percent: 0 },
                  ].map((rating) => (
                    <div key={rating.stars} className="flex items-center gap-2">
                      <span className="text-sm text-gray-500 w-6">{rating.stars}★</span>
                      <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-pizza-yellow-400 rounded-full"
                          style={{ width: `${rating.percent}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-500 w-8">{rating.percent}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Leave Review CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Had a great experience? We'd love to hear from you!</p>
          <button className="btn-outline">
            Leave a Review
          </button>
        </div>
      </div>
    </section>
  )
}