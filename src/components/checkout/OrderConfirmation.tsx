import React from 'react';
import { CheckCircle, Package } from 'lucide-react';
import { Order } from '../../types';

interface OrderConfirmationProps {
  order: Order;
  onClose: () => void;
}

export default function OrderConfirmation({ order, onClose }: OrderConfirmationProps) {
  return (
    <div className="text-center">
      <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 mb-4">
        <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
      </div>
      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
        Order Placed Successfully!
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Your order #{order.id} has been confirmed
      </p>
      
      <div className="mt-6 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-left">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600 dark:text-gray-300">Order Total:</span>
          <span className="text-sm font-medium text-gray-900 dark:text-white">
            ${order.totalPrice.toFixed(2)}
          </span>
        </div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600 dark:text-gray-300">Quantity:</span>
          <span className="text-sm font-medium text-gray-900 dark:text-white">
            {order.quantity} units
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600 dark:text-gray-300">Status:</span>
          <span className="text-sm font-medium text-green-600 dark:text-green-400">
            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
          </span>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
        <Package className="h-5 w-5 mr-2" />
        <span>Estimated delivery: 3-5 business days</span>
      </div>

      <div className="mt-6">
        <button
          onClick={onClose}
          className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}