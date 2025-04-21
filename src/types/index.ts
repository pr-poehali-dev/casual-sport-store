export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: 'casual' | 'sport';
  sizes: string[];
  colors: string[];
  images: string[];
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
}

export interface Review {
  id: number;
  productId: number;
  name: string;
  rating: number;
  date: string;
  text: string;
  avatar?: string;
}
