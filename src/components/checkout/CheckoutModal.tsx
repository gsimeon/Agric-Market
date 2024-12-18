import React, { useState } from 'react';
import { X, CreditCard, Truck, AlertCircle, Loader } from 'lucide-react';
import { Product, Order } from '../../types';
import { placeOrder, PlaceOrderData } from '../../services/orderService';
import OrderConfirmation from './OrderConfirmation';
import PaymentForm from '../payment/PaymentForm';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
}

export default function CheckoutModal({ isOpen, onClose, product }: CheckoutModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [shippingAddress, setShippingAddress] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [completedOrder, setCompletedOrder] = useState<Order | null>(null);
  const [showPayment, setShowPayment] = useState(false);

  if (!isOpen) return null;

  const totalPrice = product.price * quantity;

  const handlePaymentSuccess = async (transactionId: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const orderData: PlaceOrderData = {
        product,
        quantity,
        shippingAddress,
        paymentMethod: 'card',
        totalPrice,
        transactionId
      };

      const order = await placeOrder(orderData);
      setCompletedOrder(order);
      setShowPayment(false);
    } catch (err) {
      setError('Failed to place order. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handlePaymentError = (errorMessage: string) => {
    setError(errorMessage);
  };

  const handleClose = () => {
    setCompletedOrder(null);
    setError(null);
    setQuantity(1);
    setShippingAddress('');
    setShowPayment(false);
    onClose();
  };

  const handleProceedToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (quantity > product.quantity) {
      setError('Quantity exceeds available stock');
      return;
    }
    if (!shippingAddress) {
      setError('Please enter a shipping address');
      return;
    }
    setShowPayment(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="fixed inset-0 bg-black bg-opacity-25" onClick={handleClose}></div>
        <div className="relative w-full max-w-2xl transform rounded-lg bg-white dark:bg-gray-800 p-6 text-left shadow-xl">
          {completedOrder ? (
            <OrderConfirmation order={completedOrder} onClose={handleClose} />
          ) : (
            <>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {showPayment ? 'Payment' : 'Checkout'}
                </h2>
                <button onClick={handleClose} className="text-gray-400 hover:text-gray-500">
                  <X className="h-6 w-6" />
                </button>
              </div>

              {showPayment ? (
                <PaymentForm
                  amount={totalPrice}
                  onSuccess={handlePaymentSuccess}
                  onError={handlePaymentError}
                />
              ) : (
                <form onSubmit={handleProceedToPayment} className="space-y-6">
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Order Summary
                    </h3>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-300">{product.name}</span>
                      <span className="text-gray-900 dark:text-white">
                        ${product.price.toFixed(2)} / {product.unit}
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Quantity ({product.unit})
                    </label>
                    <input
                      type="number"
                      min="1"
                      max={product.quantity}
                      value={quantity}
                      onChange={(e) => setQuantity(Number(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Shipping Address
                    </label>
                    <textarea
                      value={shippingAddress}
                      onChange={(e) => setShippingAddress(e.target.value)}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-white"
                      required
                    />
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <div className="flex justify-between items-center text-lg font-semibold">
                      <span className="text-gray-700 dark:text-gray-300">Total:</span>
                      <span className="text-green-600 dark:text-green-400">
                        ${totalPrice.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {error && (
                    <div className="flex items-center text-red-600 dark:text-red-400">
                      <AlertCircle className="h-5 w-5 mr-2" />
                      <span>{error}</span>
                    </div>
                  )}

                  {quantity > product.quantity && (
                    <div className="flex items-center text-red-600 dark:text-red-400">
                      <AlertCircle className="h-5 w-5 mr-2" />
                      <span>Quantity exceeds available stock</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={quantity > product.quantity || isLoading}
                    className="w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isLoading ? (
                      <>
                        <Loader className="h-5 w-5 mr-2 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      'Proceed to Payment'
                    )}
                  </button>
                </form>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}