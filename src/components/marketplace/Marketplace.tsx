import React, { useState } from 'react';
import { Filter, MapPin } from 'lucide-react';
import { Product } from '../../types';
import SearchBar from '../dashboard/SearchBar';
import CategoryFilter from '../dashboard/CategoryFilter';

interface MarketplaceProps {
  onProductSelect: (product: Product) => void;
}

// Mock data - In production, this would come from an API
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Organic Tomatoes',
    description: 'Fresh organic tomatoes from local farm',
    price: 2.99,
    quantity: 100,
    unit: 'kg',
    category: 'Vegetables',
    sellerId: 'seller1',
    seller: {
      id: 'seller1',
      name: 'John Farm',
      email: 'john@farm.com',
      role: 'seller',
      location: { lat: 0, lng: 0, address: 'California, USA' }
    },
    images: ['https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80'],
    createdAt: new Date(),
    status: 'active'
  },
  {
    id: '2',
    name: 'Fresh Apples',
    description: 'Sweet and crispy apples from our orchard',
    price: 1.99,
    quantity: 500,
    unit: 'kg',
    category: 'Fruits',
    sellerId: 'seller2',
    seller: {
      id: 'seller2',
      name: 'Apple Grove Farm',
      email: 'info@applegrove.com',
      role: 'seller',
      location: { lat: 0, lng: 0, address: 'Washington, USA' }
    },
    images: ['https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&q=80'],
    createdAt: new Date(),
    status: 'active'
  },
  {
    id: '3',
    name: 'Organic Rice',
    description: 'Premium quality organic rice',
    price: 4.99,
    quantity: 1000,
    unit: 'kg',
    category: 'Grains',
    sellerId: 'seller3',
    seller: {
      id: 'seller3',
      name: 'Golden Fields Co.',
      email: 'contact@goldenfields.com',
      role: 'seller',
      location: { lat: 0, lng: 0, address: 'Arkansas, USA' }
    },
    images: ['https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80'],
    createdAt: new Date(),
    status: 'active'
  }
];

export default function Marketplace({ onProductSelect }: MarketplaceProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const categories = ['All', 'Vegetables', 'Fruits', 'Grains', 'Dairy'];

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category.toLowerCase());
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Agricultural Marketplace
        </h1>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
        <SearchBar onSearch={handleSearch} />
        <CategoryFilter 
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockProducts.map((product) => (
          <div 
            key={product.id} 
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
            onClick={() => onProductSelect(product)}
          >
            <img 
              src={product.images[0]} 
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {product.name}
                </h3>
                <span className="text-lg font-bold text-green-600 dark:text-green-400">
                  ${product.price.toFixed(2)}
                </span>
              </div>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {product.description}
              </p>
              <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400">
                <MapPin className="h-4 w-4 mr-1" />
                {product.seller.location.address}
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {product.quantity} {product.unit} available
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}