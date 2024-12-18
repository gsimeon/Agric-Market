import React, { useState } from 'react';
import { ThumbsUp, Star } from 'lucide-react';
import { Review } from '../../types/review';

interface ReviewCardProps {
  review: Review;
  onHelpfulClick: (reviewId: string) => void;
}

export default function ReviewCard({ review, onHelpfulClick }: ReviewCardProps) {
  const [isHelpfulClicked, setIsHelpfulClicked] = useState(false);

  const handleHelpfulClick = () => {
    if (!isHelpfulClicked) {
      setIsHelpfulClicked(true);
      onHelpfulClick(review.id);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 border border-gray-200 dark:border-gray-700">
      <div className="flex items-start justify-between">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
              <span className="text-green-600 dark:text-green-400 font-semibold">
                {review.userName.charAt(0).toUpperCase()}
              </span>
            </div>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              {review.userName}
            </p>
            <div className="flex items-center mt-1">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className={`h-4 w-4 ${
                    index < review.rating
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300 dark:text-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {new Date(review.createdAt).toLocaleDateString()}
        </span>
      </div>

      <p className="mt-4 text-gray-600 dark:text-gray-300">{review.comment}</p>

      {review.images && review.images.length > 0 && (
        <div className="mt-4 flex gap-2 overflow-x-auto">
          {review.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Review image ${index + 1}`}
              className="h-20 w-20 object-cover rounded-lg"
            />
          ))}
        </div>
      )}

      <div className="mt-4 flex items-center justify-between">
        <button
          onClick={handleHelpfulClick}
          disabled={isHelpfulClicked}
          className={`flex items-center space-x-1 text-sm ${
            isHelpfulClicked
              ? 'text-green-600 dark:text-green-400'
              : 'text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400'
          }`}
        >
          <ThumbsUp className="h-4 w-4" />
          <span>Helpful ({review.helpful})</span>
        </button>
      </div>
    </div>
  );
}