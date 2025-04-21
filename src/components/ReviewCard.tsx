import { Review } from '@/types';
import { Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { format, parseISO } from 'date-fns';
import { ru } from 'date-fns/locale';

interface ReviewCardProps {
  review: Review;
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  const { name, rating, date, text, avatar } = review;
  
  const formatDate = (dateString: string) => {
    try {
      return format(parseISO(dateString), 'd MMMM yyyy', { locale: ru });
    } catch (e) {
      return dateString;
    }
  };
  
  return (
    <div className="space-y-3 border rounded-lg p-4 animate-fade-in">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-medium">{name}</h4>
            <p className="text-sm text-muted-foreground">{formatDate(date)}</p>
          </div>
        </div>
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < rating ? 'fill-primary text-primary' : 'text-muted-foreground'
              }`}
            />
          ))}
        </div>
      </div>
      <p className="text-sm text-gray-700">{text}</p>
    </div>
  );
};

export default ReviewCard;
