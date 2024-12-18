import React from 'react';
import { Review } from '../../types/review';
import ReviewCard from './ReviewCard';

interface ReviewListProps {
  reviews: Review[];
  onHelpfulClick: (reviewId: string) => void;
}

export default function ReviewList({ reviews, onHelpfulClick }: ReviewListProps) {
  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Customer Reviews
          </h3>
          <div className="mt-1">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              {averageRating.toFixed(1)}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
              out of 5 ({reviews.length} reviews)
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {reviews.map((review) => (
          <ReviewCard
            key={review.id}
            review={review}
            onHelpfulClick={onHelpfulClick}
          />
        ))}
      </div>
    </div>
  );
}