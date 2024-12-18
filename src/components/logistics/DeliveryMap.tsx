import React from 'react';
import { MapPin } from 'lucide-react';
import { Location } from '../../types/logistics';

interface DeliveryMapProps {
  origin: Location;
  destination: Location;
  currentLocation?: Location;
}

export default function DeliveryMap({ origin, destination, currentLocation }: DeliveryMapProps) {
  return (
    <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
      <div className="text-center text-gray-600 dark:text-gray-300">
        <MapPin className="h-6 w-6 mx-auto mb-2 text-green-600 dark:text-green-400" />
        Map visualization would be implemented here using a mapping service like Google Maps or Mapbox
      </div>
      <div className="mt-4 space-y-2 text-sm">
        <div className="flex items-center justify-between">
          <span className="text-gray-600 dark:text-gray-300">Origin:</span>
          <span className="font-medium text-gray-900 dark:text-white">{origin.address}</span>
        </div>
        {currentLocation && (
          <div className="flex items-center justify-between">
            <span className="text-gray-600 dark:text-gray-300">Current Location:</span>
            <span className="font-medium text-green-600 dark:text-green-400">
              {currentLocation.address}
            </span>
          </div>
        )}
        <div className="flex items-center justify-between">
          <span className="text-gray-600 dark:text-gray-300">Destination:</span>
          <span className="font-medium text-gray-900 dark:text-white">{destination.address}</span>
        </div>
      </div>
    </div>
  );
}