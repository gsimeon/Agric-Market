import React, { useState } from 'react';
import { Review } from '../../types/review';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';

interface ReviewSectionProps {
  productId: string;
  initialReviews: Review[];
}

export default function ReviewSection({ productId, initialReviews }: ReviewSectionProps) {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [showReviewForm, setShowReviewForm] = useState(false);

  const handleReviewSubmit = ({ rating, comment }: { rating: number; comment: string }) => {
    const newReview: Review = {
      id: Date.now().toString(),
      productId,
      userId: 'user-1', // This would come from auth context in production
      userName: 'John Doe', // This would come from auth context in production
      rating,
      comment,
      createdAt: new Date(),
      helpful: 0
    };

    setReviews([newReview, ...reviews]);
    setShowReviewForm(false);
  };

  const handleHelpfulClick = (reviewId: string) => {
    setReviews(reviews.map(review =>
      review.id === reviewId
        ? { ...review, helpful: review.helpful + 1 }
        : review
    ));
  };

  return (
    <div className="mt-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Reviews</h2>
        <button
          onClick={() => setShowReviewForm(!showReviewForm)}
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Write a Review
        </button>
      </div>

      {showReviewForm && (
        <div className="mb-8">
          <ReviewForm productId={productId} onSubmit={handleReviewSubmit} />
        </div>
      )}

      <ReviewList reviews={reviews} onHelpfulClick={handleHelpfulClick} />
    </div>
  );
}