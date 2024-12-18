import { Order, Product } from '../types';

export interface PlaceOrderData {
  product: Product;
  quantity: number;
  shippingAddress: string;
  paymentMethod: string;
  totalPrice: number;
}

export async function placeOrder(orderData: PlaceOrderData): Promise<Order> {
  // In a real application, this would be an API call
  // For now, we'll simulate the API response
  const newOrder: Order = {
    id: Math.random().toString(36).substr(2, 9),
    productId: orderData.product.id,
    buyerId: 'buyer1', // This would come from auth context
    sellerId: orderData.product.sellerId,
    quantity: orderData.quantity,
    totalPrice: orderData.totalPrice,
    status: 'pending',
    createdAt: new Date(),
    deliveryAddress: {
      lat: 0,
      lng: 0,
      address: orderData.shippingAddress
    }
  };

  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  return newOrder;
}