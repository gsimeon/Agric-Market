import React, { useState } from 'react';
import { Plus, Search, Filter } from 'lucide-react';
import ListingGrid from './ListingGrid';
import CategoryFilter from './CategoryFilter';
import SearchBar from './SearchBar';
import { Product, Order } from '../../types';

// Mock data - In production, this would come from an API
const mockListings: Product[] = [
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
      location: { lat: 0, lng: 0, address: 'Farm Address' }
    },
    images: ['https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80'],
    createdAt: new Date(),
    status: 'active'
  },
  // Add more mock listings as needed
];

const mockOrders: Order[] = [
  {
    id: '1',
    productId: '1',
    buyerId: 'buyer1',
    sellerId: 'seller1',
    quantity: 50,
    totalPrice: 149.50,
    status: 'pending',
    createdAt: new Date(),
    deliveryAddress: {
      lat: 0,
      lng: 0,
      address: 'Delivery Address'
    }
  },
  // Add more mock orders as needed
];

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const userRole = 'seller'; // This would come from auth context in production

  const categories = ['All', 'Vegetables', 'Fruits', 'Grains', 'Dairy'];

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category.toLowerCase());
  };

  const filteredItems = userRole === 'seller' ? mockListings : mockOrders;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          {userRole === 'seller' ? 'My Listings' : 'My Orders'}
        </h1>
        <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
          <Plus className="h-5 w-5 mr-2" />
          {userRole === 'seller' ? 'Create New Listing' : 'Browse Marketplace'}
        </button>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
        <SearchBar onSearch={handleSearch} />
        <CategoryFilter 
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
      </div>

      <ListingGrid items={filteredItems} userRole={userRole} />
    </div>
  );
}