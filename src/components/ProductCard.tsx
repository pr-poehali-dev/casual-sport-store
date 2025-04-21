import { Link } from 'react-router-dom';
import { Product } from '@/types';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <div className="group relative overflow-hidden rounded-lg border bg-white shadow-md transition-all hover:shadow-lg">
      <Link to={`/product/${product.id}`} className="block">
        <div className="aspect-square overflow-hidden">
          <img 
            src={product.images[0]} 
            alt={product.name} 
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" 
          />
        </div>
        <div className="p-4">
          <span className="inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
            {product.category === 'casual' ? 'Повседневная' : 'Спортивная'}
          </span>
          <h3 className="mt-2 text-lg font-medium text-gray-900">{product.name}</h3>
          <p className="mt-1 text-xl font-bold text-gray-900">{product.price} ₽</p>
          <p className="mt-1 text-sm text-gray-500 line-clamp-2">{product.description}</p>
        </div>
      </Link>
      <div className="absolute bottom-4 right-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <Button 
          size="sm" 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            addToCart(product, 1);
          }}
        >
          <ShoppingCart className="mr-1" size={16} />
          В корзину
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
