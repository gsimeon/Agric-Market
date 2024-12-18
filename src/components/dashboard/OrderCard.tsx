import React, { useState } from 'react';
import { Package, MessageCircle, Eye } from 'lucide-react';
import { Order } from '../../types';
import ShipmentTracker from '../logistics/ShipmentTracker';

interface OrderCardProps {
  order: Order;
}

export default function OrderCard({ order }: OrderCardProps) {
  const [showTracking, setShowTracking] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Order #{order.id}</h3>
        <span className={`px-2 py-1 text-xs rounded-full ${
          order.status === 'delivered' ? 'bg-green-100 text-green-800' :
          order.status === 'shipped' ? 'bg-blue-100 text-blue-800' :
          order.status === 'confirmed' ? 'bg-yellow-100 text-yellow-800' :
          'bg-gray-100 text-gray-800'
        }`}>
          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
        </span>
      </div>
      
      <div className="mt-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-500 dark:text-gray-400">Quantity:</span>
          <span className="text-sm font-medium text-gray-900 dark:text-white">
            {order.quantity} units
          </span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-500 dark:text-gray-400">Total Price:</span>
          <span className="text-sm font-medium text-gray-900 dark:text-white">
            ${order.totalPrice.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500 dark:text-gray-400">Order Date:</span>
          <span className="text-sm font-medium text-gray-900 dark:text-white">
            {order.createdAt.toLocaleDateString()}
          </span>
        </div>
      </div>

      {showTracking && (
        <div className="mt-4 border-t border-gray-200 dark:border-gray-700 pt-4">
          <ShipmentTracker orderId={order.id} />
        </div>
      )}

      <div className="mt-4 flex justify-end space-x-2">
        <button
          onClick={() => setShowTracking(!showTracking)}
          className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          {showTracking ? (
            <>
              <Eye className="h-4 w-4 mr-2" />
              Hide Tracking
            </>
          ) : (
            <>
              <Package className="h-4 w-4 mr-2" />
              Track Order
            </>
          )}
        </button>
        <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
          <MessageCircle className="h-4 w-4 mr-2" />
          Contact Seller
        </button>
      </div>
    </div>
  );
}