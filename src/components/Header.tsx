import { Link } from 'react-router-dom';
import Cart from './Cart';
import { Home, Search } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center">
        <Link to="/" className="flex items-center gap-2 font-bold">
          <span className="text-xl">Casual & Sport</span>
        </Link>
        
        <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
            Главная
          </Link>
          <Link to="/category/casual" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Повседневная
          </Link>
          <Link to="/category/sport" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Спортивная
          </Link>
        </nav>
        
        <div className="ml-auto flex items-center gap-4">
          <div className="relative hidden w-full max-w-sm md:flex">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Поиск..."
              className="w-full rounded-md bg-background pl-8 md:w-[300px] lg:w-[300px]"
            />
          </div>
          <Button variant="ghost" size="icon" asChild>
            <Link to="/">
              <Home className="h-5 w-5" />
            </Link>
          </Button>
          <Cart />
        </div>
      </div>
    </header>
  );
};

export default Header;
