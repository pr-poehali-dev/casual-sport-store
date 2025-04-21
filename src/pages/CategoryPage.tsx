import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import ProductGrid from '@/components/ProductGrid';
import { products } from '@/data/products';

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  
  // Фильтруем продукты по категории
  const filteredProducts = products.filter(
    product => product.category.toLowerCase() === category?.toLowerCase()
  );
  
  // Преобразуем название категории для отображения
  const categoryName = category === 'casual' ? 'Повседневная одежда' : 
                       category === 'sport' ? 'Спортивная одежда' : 
                       category;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="container py-8 md:py-12">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {categoryName}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {category === 'casual' 
                ? 'Стильная одежда для повседневной жизни'
                : 'Функциональная одежда для активного образа жизни'}
            </p>
          </div>
          
          {filteredProducts.length > 0 ? (
            <ProductGrid products={filteredProducts} />
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                В данной категории товары отсутствуют
              </p>
            </div>
          )}
        </section>
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

export default CategoryPage;
