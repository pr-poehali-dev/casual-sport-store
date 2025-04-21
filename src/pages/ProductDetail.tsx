import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '@/data/products';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { ChevronLeft, ShoppingCart, Check } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === Number(id));
  const { addToCart } = useCart();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | undefined>();
  const [selectedColor, setSelectedColor] = useState<string | undefined>();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Товар не найден</h1>
        <Button className="mt-4" onClick={() => navigate('/')}>
          Вернуться на главную
        </Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize, selectedColor);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-8">
        <div className="container">
          <Button 
            variant="ghost" 
            className="mb-4 flex items-center gap-1"
            onClick={() => navigate(-1)}
          >
            <ChevronLeft className="h-4 w-4" />
            Назад
          </Button>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg border bg-white">
                <img 
                  src={product.images[selectedImage]} 
                  alt={product.name} 
                  className="h-[400px] w-full object-cover" 
                />
              </div>
              <div className="flex gap-2 overflow-auto pb-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    className={`relative overflow-hidden rounded-md border ${
                      selectedImage === index ? 'ring-2 ring-primary' : ''
                    }`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} ${index + 1}`} 
                      className="h-16 w-16 object-cover" 
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <span className="inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                  {product.category === 'casual' ? 'Повседневная' : 'Спортивная'}
                </span>
                <h1 className="mt-2 text-3xl font-bold">{product.name}</h1>
                <p className="mt-2 text-2xl font-bold">{product.price} ₽</p>
              </div>

              <Tabs defaultValue="description" className="w-full">
                <TabsList className="w-full">
                  <TabsTrigger value="description" className="flex-1">Описание</TabsTrigger>
                  <TabsTrigger value="details" className="flex-1">Детали</TabsTrigger>
                </TabsList>
                <TabsContent value="description" className="mt-4">
                  <p className="text-gray-700">{product.description}</p>
                </TabsContent>
                <TabsContent value="details" className="mt-4">
                  <ul className="space-y-2 text-gray-700">
                    <li>Категория: {product.category === 'casual' ? 'Повседневная' : 'Спортивная'}</li>
                    <li>Доступные размеры: {product.sizes.join(', ')}</li>
                    <li>Доступные цвета: {product.colors.join(', ')}</li>
                    <li>Наличие: {product.inStock ? 'В наличии' : 'Нет в наличии'}</li>
                  </ul>
                </TabsContent>
              </Tabs>

              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 font-medium">Размер</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map(size => (
                      <Button
                        key={size}
                        type="button"
                        variant={selectedSize === size ? 'default' : 'outline'}
                        className="h-9 w-12"
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-2 font-medium">Цвет</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map(color => (
                      <Button
                        key={color}
                        type="button"
                        variant={selectedColor === color ? 'default' : 'outline'}
                        className="min-w-20"
                        onClick={() => setSelectedColor(color)}
                      >
                        {selectedColor === color && <Check className="mr-1 h-4 w-4" />}
                        {color}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-2 font-medium">Количество</h3>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      disabled={quantity <= 1}
                    >
                      -
                    </Button>
                    <span className="w-8 text-center">{quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </Button>
                  </div>
                </div>

                <Button 
                  className="mt-6 w-full" 
                  size="lg" 
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Добавить в корзину
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2023 Casual & Sport. Все права защищены.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="#" className="transition hover:text-foreground">
              О нас
            </a>
            <a href="#" className="transition hover:text-foreground">
              Доставка
            </a>
            <a href="#" className="transition hover:text-foreground">
              Контакты
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductDetail;
