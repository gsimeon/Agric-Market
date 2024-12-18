import { ShipmentDetails, TrackingEvent } from '../types/logistics';

export async function getShipmentDetails(trackingNumber: string): Promise<ShipmentDetails> {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Mock shipment data
  const mockEvents: TrackingEvent[] = [
    {
      id: '1',
      status: 'order_placed',
      timestamp: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
      location: {
        address: 'Farmer\'s Market, California',
        coordinates: { lat: 34.0522, lng: -118.2437 }
      },
      description: 'Order has been placed and confirmed'
    },
    {
      id: '2',
      status: 'processing',
      timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
      location: {
        address: 'AgroMarket Warehouse, Los Angeles',
        coordinates: { lat: 34.0522, lng: -118.2437 }
      },
      description: 'Order is being processed at warehouse'
    },
    {
      id: '3',
      status: 'picked_up',
      timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      location: {
        address: 'Distribution Center, Los Angeles',
        coordinates: { lat: 34.0522, lng: -118.2437 }
      },
      description: 'Package picked up by carrier'
    },
    {
      id: '4',
      status: 'in_transit',
      timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
      location: {
        address: 'Transit Hub, San Francisco',
        coordinates: { lat: 37.7749, lng: -122.4194 }
      },
      description: 'Package is in transit to destination'
    }
  ];

  return {
    id: `ship_${Math.random().toString(36).substr(2, 9)}`,
    orderId: 'order_123',
    trackingNumber,
    carrier: 'AgroExpress Logistics',
    estimatedDelivery: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
    origin: {
      address: 'Farmer\'s Market, California',
      coordinates: { lat: 34.0522, lng: -118.2437 }
    },
    destination: {
      address: '789 Customer Street, San Francisco, CA',
      coordinates: { lat: 37.7749, lng: -122.4194 }
    },
    currentStatus: 'in_transit',
    events: mockEvents,
    lastUpdated: new Date()
  };
}

export async function subscribeToUpdates(
  trackingNumber: string,
  callback: (update: ShipmentDetails) => void
): Promise<() => void> {
  // In a real application, this would set up a WebSocket connection
  // or polling mechanism to receive real-time updates
  
  const interval = setInterval(async () => {
    const details = await getShipmentDetails(trackingNumber);
    callback(details);
  }, 30000); // Poll every 30 seconds

  return () => clearInterval(interval);
}