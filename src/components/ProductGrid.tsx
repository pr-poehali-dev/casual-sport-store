import { useState } from 'react';
import { Product } from '@/types';
import ProductCard from './ProductCard';
import { Button } from './ui/button';

interface ProductGridProps {
  products: Product[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  const [filter, setFilter] = useState<'all' | 'casual' | 'sport'>('all');

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(product => product.category === filter);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        <Button 
          variant={filter === 'all' ? 'default' : 'outline'} 
          onClick={() => setFilter('all')}
        >
          Все товары
        </Button>
        <Button 
          variant={filter === 'casual' ? 'default' : 'outline'} 
          onClick={() => setFilter('casual')}
        >
          Повседневная одежда
        </Button>
        <Button 
          variant={filter === 'sport' ? 'default' : 'outline'} 
          onClick={() => setFilter('sport')}
        >
          Спортивная одежда
        </Button>
      </div>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
