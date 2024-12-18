export interface User {
  id: string;
  name: string;
  email: string;
  role: 'buyer' | 'seller';
  location: {
    lat: number;
    lng: number;
    address: string;
  };
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  unit: string;
  category: string;
  sellerId: string;
  seller: User;
  images: string[];
  createdAt: Date;
  status: 'active' | 'sold' | 'pending';
}

export interface Order {
  id: string;
  productId: string;
  buyerId: string;
  sellerId: string;
  quantity: number;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered';
  createdAt: Date;
  deliveryAddress: {
    lat: number;
    lng: number;
    address: string;
  };
}