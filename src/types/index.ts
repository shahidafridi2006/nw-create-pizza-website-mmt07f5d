export interface Pizza {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'classic' | 'specialty' | 'gourmet';
  ingredients: string[];
  is_vegetarian: boolean;
  is_spicy: boolean;
  popularity: number;
}

export interface CartItem {
  pizza: Pizza;
  quantity: number;
  size: 'small' | 'medium' | 'large' | 'extra-large';
  extra_toppings: string[];
}

export interface Order {
  id: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  delivery_address: string;
  items: CartItem[];
  subtotal: number;
  tax: number;
  delivery_fee: number;
  total: number;
  status: 'pending' | 'confirmed' | 'preparing' | 'out-for-delivery' | 'delivered';
  created_at: string;
  special_instructions: string;
}

export interface Review {
  id: string;
  customer_name: string;
  rating: number;
  comment: string;
  created_at: string;
  pizza_id: string | null;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface SizeOption {
  name: string;
  multiplier: number;
  slices: number;
  description: string;
}

export interface Topping {
  id: string;
  name: string;
  price: number;
  category: 'meat' | 'vegetable' | 'cheese' | 'special';
}