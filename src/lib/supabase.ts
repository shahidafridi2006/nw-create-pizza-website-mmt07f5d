import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-project.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Helper functions for database operations

export async function getPizzas() {
  const { data, error } = await supabase
    .from('pizzas')
    .select('*')
    .order('popularity', { ascending: false })
  
  if (error) throw error
  return data
}

export async function getPizzaById(id: string) {
  const { data, error } = await supabase
    .from('pizzas')
    .select('*')
    .eq('id', id)
    .single()
  
  if (error) throw error
  return data
}

export async function getReviews(pizzaId?: string) {
  let query = supabase
    .from('reviews')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(10)
  
  if (pizzaId) {
    query = query.eq('pizza_id', pizzaId)
  }
  
  const { data, error } = await query
  
  if (error) throw error
  return data
}

export async function createOrder(order: Omit<Order, 'id' | 'created_at' | 'status'>) {
  const { data, error } = await supabase
    .from('orders')
    .insert([order])
    .select()
    .single()
  
  if (error) throw error
  return data
}

export async function submitReview(review: Omit<Review, 'id' | 'created_at'>) {
  const { data, error } = await supabase
    .from('reviews')
    .insert([review])
    .select()
    .single()
  
  if (error) throw error
  return data
}

export async function submitContactForm(form: ContactForm) {
  const { data, error } = await supabase
    .from('contact_submissions')
    .insert([form])
    .select()
    .single()
  
  if (error) throw error
  return data
}

// Type imports for the helper functions
import type { Order, Review, ContactForm } from '../types'