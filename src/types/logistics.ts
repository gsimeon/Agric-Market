export interface Location {
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface TrackingEvent {
  id: string;
  status: 'order_placed' | 'processing' | 'picked_up' | 'in_transit' | 'out_for_delivery' | 'delivered' | 'failed';
  timestamp: Date;
  location: Location;
  description: string;
  additionalInfo?: string;
}

export interface ShipmentDetails {
  id: string;
  orderId: string;
  trackingNumber: string;
  carrier: string;
  estimatedDelivery: Date;
  origin: Location;
  destination: Location;
  currentStatus: TrackingEvent['status'];
  events: TrackingEvent[];
  lastUpdated: Date;
}