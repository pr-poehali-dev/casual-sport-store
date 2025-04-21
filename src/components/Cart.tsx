import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Trash2, Plus, Minus } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Separator } from "./ui/separator";

const Cart = () => {
  const { items, removeFromCart, updateQuantity, totalItems, totalPrice } = useCart();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {totalItems > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
              {totalItems}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Корзина</SheetTitle>
          <SheetDescription>
            {totalItems === 0 
              ? "Ваша корзина пуста" 
              : `${totalItems} ${totalItems === 1 ? 'товар' : totalItems < 5 ? 'товара' : 'товаров'} в корзине`}
          </SheetDescription>
        </SheetHeader>
        
        <div className="mt-6 flex h-[calc(100vh-10rem)] flex-col gap-4 overflow-y-auto pb-6">
          {items.length > 0 ? (
            items.map((item) => (
              <div key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`} className="flex gap-4 rounded-lg border p-3">
                <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
                  <img 
                    src={item.product.images[0]} 
                    alt={item.product.name} 
                    className="h-full w-full object-cover" 
                  />
                </div>
                <div className="flex flex-1 flex-col">
                  <p className="font-medium">{item.product.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {item.selectedSize && `Размер: ${item.selectedSize}`} 
                    {item.selectedSize && item.selectedColor && ", "} 
                    {item.selectedColor && `Цвет: ${item.selectedColor}`}
                  </p>
                  <p className="mt-auto font-semibold">{item.product.price} ₽</p>
                </div>
                <div className="flex flex-col items-end justify-between">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => removeFromCart(item.product.id)}
                  >
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                  <div className="flex items-center gap-2">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="h-7 w-7" 
                      onClick={() => updateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                      disabled={item.quantity <= 1}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-5 text-center">{item.quantity}</span>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="h-7 w-7" 
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex h-40 flex-col items-center justify-center gap-2 rounded-lg border border-dashed p-4 text-center">
              <ShoppingCart className="h-10 w-10 text-muted-foreground" />
              <p className="font-medium">Корзина пуста</p>
              <p className="text-sm text-muted-foreground">Добавьте товары, чтобы начать покупки</p>
            </div>
          )}
        </div>
        
        {items.length > 0 && (
          <div className="sticky bottom-0 mt-auto bg-background pt-4">
            <Separator className="mb-4" />
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="font-medium">Итого:</span>
                <span className="text-xl font-bold">{totalPrice} ₽</span>
              </div>
              <Button className="w-full">Оформить заказ</Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
