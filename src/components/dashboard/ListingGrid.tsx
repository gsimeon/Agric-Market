import React from 'react';
import { Product, Order } from '../../types';
import ListingCard from './ListingCard';
import OrderCard from './OrderCard';

interface ListingGridProps {
  items: (Product | Order)[];
  userRole: 'buyer' | 'seller';
}

export default function ListingGrid({ items, userRole }: ListingGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <div key={item.id}>
          {userRole === 'seller' ? (
            <ListingCard listing={item as Product} />
          ) : (
            <OrderCard order={item as Order} />
          )}
        </div>
      ))}
    </div>
  );
}