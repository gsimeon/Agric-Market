import React, { useState, useEffect } from 'react';
import { Package, MapPin, Calendar, RefreshCw } from 'lucide-react';
import { ShipmentDetails } from '../../types/logistics';
import { getShipmentDetails, subscribeToUpdates } from '../../services/logisticsService';
import TrackingTimeline from './TrackingTimeline';

interface ShipmentTrackerProps {
  trackingNumber: string;
}

export default function ShipmentTracker({ trackingNumber }: ShipmentTrackerProps) {
  const [shipment, setShipment] = useState<ShipmentDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let unsubscribe: (() => void) | undefined;

    const fetchShipmentDetails = async () => {
      try {
        setLoading(true);
        const details = await getShipmentDetails(trackingNumber);
        setShipment(details);
        setError(null);

        // Subscribe to real-time updates
        unsubscribe = await subscribeToUpdates(trackingNumber, (update) => {
          setShipment(update);
        });
      } catch (err) {
        setError('Failed to load shipment details');
      } finally {
        setLoading(false);
      }
    };

    fetchShipmentDetails();

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [trackingNumber]);

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <RefreshCw className="h-8 w-8 animate-spin text-green-600 dark:text-green-400" />
      </div>
    );
  }

  if (error || !shipment) {
    return (
      <div className="text-red-600 dark:text-red-400 p-4 text-center">
        {error || 'Shipment not found'}
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Shipment Tracking
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-300">
          <div className="flex items-center">
            <Package className="h-5 w-5 mr-2 text-green-600 dark:text-green-400" />
            <span>
              <span className="font-semibold">Tracking Number:</span> {shipment.trackingNumber}
            </span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-5 w-5 mr-2 text-green-600 dark:text-green-400" />
            <span>
              <span className="font-semibold">Estimated Delivery:</span>{' '}
              {shipment.estimatedDelivery.toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <MapPin className="h-5 w-5 mr-2 text-green-600 dark:text-green-400" />
            <span className="font-semibold text-gray-900 dark:text-white">From</span>
          </div>
          <p className="text-gray-600 dark:text-gray-300">{shipment.origin.address}</p>
        </div>
        <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <MapPin className="h-5 w-5 mr-2 text-green-600 dark:text-green-400" />
            <span className="font-semibold text-gray-900 dark:text-white">To</span>
          </div>
          <p className="text-gray-600 dark:text-gray-300">{shipment.destination.address}</p>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Tracking History
        </h3>
        <TrackingTimeline events={shipment.events} />
      </div>

      <div className="mt-6 text-sm text-gray-500 dark:text-gray-400 text-center">
        Last updated: {shipment.lastUpdated.toLocaleString()}
      </div>
    </div>
  );
}