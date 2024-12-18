import React, { useState } from 'react';
import { ArrowLeft, MapPin, Package, MessageCircle, ShoppingCart } from 'lucide-react';
import { Product } from '../../types';
import CheckoutModal from '../checkout/CheckoutModal';
import ContactModal from '../contact/ContactModal';
import ReviewSection from '../reviews/ReviewSection';

interface ProductDetailsProps {
  product: Product;
  onBack: () => void;
}

export default function ProductDetails({ product, onBack }: ProductDetailsProps) {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Mock initial reviews - In production, these would come from an API
  const mockReviews = [
    {
      id: '1',
      productId: product.id,
      userId: 'user1',
      userName: 'Sarah Johnson',
      rating: 5,
      comment: 'Excellent quality produce! The tomatoes were fresh and perfectly ripe. Will definitely order again.',
      createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      helpful: 12
    },
    {
      id: '2',
      productId: product.id,
      userId: 'user2',
      userName: 'Michael Chen',
      rating: 4,
      comment: 'Good quality and fast delivery. The packaging could be more eco-friendly though.',
      createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
      helpful: 8,
      images: ['https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80']
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button
        onClick={onBack}
        className="flex items-center text-green-600 hover:text-green-700 mb-6"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to Marketplace
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{product.name}</h1>
            <p className="mt-2 text-xl font-semibold text-green-600 dark:text-green-400">
              ${product.price.toFixed(2)} / {product.unit}
            </p>
          </div>

          <div className="border-t border-b border-gray-200 dark:border-gray-700 py-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Description</h2>
            <p className="text-gray-600 dark:text-gray-300">{product.description}</p>
          </div>

          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <MapPin className="h-5 w-5 mr-2" />
            <span>{product.seller.location.address}</span>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Seller Information</h3>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <p className="font-medium text-gray-900 dark:text-white">{product.seller.name}</p>
              <p className="text-gray-600 dark:text-gray-300">{product.seller.email}</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-gray-600 dark:text-gray-300">
              Available: {product.quantity} {product.unit}
            </span>
            <span className="text-gray-600 dark:text-gray-300">•</span>
            <span className={`${
              product.status === 'active' ? 'text-green-600 dark:text-green-400' :
              'text-gray-600 dark:text-gray-300'
            }`}>
              {product.status.charAt(0).toUpperCase() + product.status.slice(1)}
            </span>
          </div>

          <div className="flex space-x-4">
            <button 
              onClick={() => setIsCheckoutOpen(true)}
              className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 flex items-center justify-center"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Add to Cart
            </button>
            <button 
              onClick={() => setIsContactOpen(true)}
              className="flex-1 border border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-50 dark:hover:bg-gray-800 flex items-center justify-center"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Contact Seller
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Shipping Information</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <div className="flex items-start space-x-4">
            <Package className="h-6 w-6 text-green-600 dark:text-green-400 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Delivery Options</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Standard shipping available. Delivery time varies by location.
                Contact seller for specific delivery estimates and options.
              </p>
            </div>
          </div>
        </div>
      </div>

      <ReviewSection productId={product.id} initialReviews={mockReviews} />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        product={product}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        seller={product.seller}
      />
    </div>
  );
}