import { useState } from 'react';
import { Review } from '@/types';
import { reviews as initialReviews } from '@/data/reviews';
import ReviewCard from './ReviewCard';
import ReviewForm from './ReviewForm';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';

interface ProductReviewsProps {
  productId: number;
}

const ProductReviews = ({ productId }: ProductReviewsProps) => {
  const [reviews, setReviews] = useState<Review[]>(
    initialReviews.filter(review => review.productId === productId)
  );
  const [showForm, setShowForm] = useState(false);

  const handleSubmitReview = (reviewData: { name: string; rating: number; text: string }) => {
    const newReview: Review = {
      id: Math.max(0, ...reviews.map(r => r.id)) + 1,
      productId,
      name: reviewData.name,
      rating: reviewData.rating,
      date: new Date().toISOString().split('T')[0],
      text: reviewData.text
    };
    
    setReviews([newReview, ...reviews]);
    setShowForm(false);
  };

  const averageRating = reviews.length 
    ? (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1)
    : '0.0';

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Отзывы</h2>
          <p className="text-muted-foreground">
            {reviews.length > 0 
              ? `${reviews.length} ${reviews.length === 1 ? 'отзыв' : 
                 reviews.length < 5 ? 'отзыва' : 'отзывов'} · Средняя оценка: ${averageRating}`
              : 'Нет отзывов'}
          </p>
        </div>
        <Button 
          onClick={() => setShowForm(!showForm)} 
          variant={showForm ? "secondary" : "default"}
        >
          <MessageSquare className="mr-2 h-4 w-4" />
          {showForm ? 'Скрыть форму' : 'Написать отзыв'}
        </Button>
      </div>

      {showForm && (
        <div className="border rounded-lg p-4 bg-muted/50">
          <h3 className="text-lg font-medium mb-4">Оставить отзыв</h3>
          <ReviewForm productId={productId} onSubmit={handleSubmitReview} />
        </div>
      )}

      <div className="space-y-4">
        {reviews.length > 0 ? (
          reviews.map(review => (
            <ReviewCard key={review.id} review={review} />
          ))
        ) : (
          <div className="text-center py-6 border rounded-lg bg-muted/20">
            <MessageSquare className="mx-auto h-8 w-8 text-muted-foreground" />
            <p className="mt-2 text-muted-foreground">Пока нет отзывов</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => setShowForm(true)}
            >
              Будьте первым, кто оставит отзыв
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductReviews;
