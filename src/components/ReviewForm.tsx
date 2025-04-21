import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Star } from 'lucide-react';

interface ReviewFormProps {
  productId: number;
  onSubmit: (review: { name: string; rating: number; text: string }) => void;
}

const ReviewForm = ({ productId, onSubmit }: ReviewFormProps) => {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && rating > 0 && text) {
      onSubmit({ name, rating, text });
      setName('');
      setRating(0);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Ваше имя
        </label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Введите ваше имя"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1">Ваша оценка</label>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              className="p-1"
            >
              <Star
                className={`h-6 w-6 cursor-pointer transition-colors ${
                  (hoverRating || rating) >= star
                    ? 'fill-primary text-primary'
                    : 'text-muted-foreground'
                }`}
              />
            </button>
          ))}
        </div>
      </div>
      
      <div>
        <label htmlFor="review" className="block text-sm font-medium mb-1">
          Ваш отзыв
        </label>
        <Textarea
          id="review"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
          placeholder="Поделитесь вашим опытом использования товара"
          rows={4}
        />
      </div>
      
      <Button type="submit" className="w-full">
        Отправить отзыв
      </Button>
    </form>
  );
};

export default ReviewForm;
