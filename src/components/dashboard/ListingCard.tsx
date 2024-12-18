import React from 'react';
import { Edit2, Trash2 } from 'lucide-react';
import { Product } from '../../types';

interface ListingCardProps {
  listing: Product;
}

export default function ListingCard({ listing }: ListingCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <img 
        src={listing.images[0]} 
        alt={listing.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{listing.name}</h3>
          <span className={`px-2 py-1 text-xs rounded-full ${
            listing.status === 'active' ? 'bg-green-100 text-green-800' :
            listing.status === 'sold' ? 'bg-gray-100 text-gray-800' :
            'bg-yellow-100 text-yellow-800'
          }`}>
            {listing.status.charAt(0).toUpperCase() + listing.status.slice(1)}
          </span>
        </div>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{listing.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-lg font-bold text-gray-900 dark:text-white">
            ${listing.price.toFixed(2)} / {listing.unit}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {listing.quantity} {listing.unit} available
          </span>
        </div>
        <div className="mt-4 flex justify-end space-x-2">
          <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-full">
            <Edit2 className="h-5 w-5" />
          </button>
          <button className="p-2 text-red-600 hover:bg-red-50 rounded-full">
            <Trash2 className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}