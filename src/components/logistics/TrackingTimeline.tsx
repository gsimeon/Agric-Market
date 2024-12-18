import React from 'react';
import { CheckCircle, Clock, Package, Truck, MapPin } from 'lucide-react';
import { TrackingEvent } from '../../types/logistics';

interface TrackingTimelineProps {
  events: TrackingEvent[];
}

export default function TrackingTimeline({ events }: TrackingTimelineProps) {
  const getStatusIcon = (status: TrackingEvent['status']) => {
    switch (status) {
      case 'order_placed':
        return Clock;
      case 'processing':
        return Package;
      case 'picked_up':
        return Package;
      case 'in_transit':
        return Truck;
      case 'out_for_delivery':
        return MapPin;
      case 'delivered':
        return CheckCircle;
      default:
        return Package;
    }
  };

  const sortedEvents = [...events].sort((a, b) => 
    b.timestamp.getTime() - a.timestamp.getTime()
  );

  return (
    <div className="flow-root">
      <ul className="-mb-8">
        {sortedEvents.map((event, idx) => {
          const Icon = getStatusIcon(event.status);
          const isLast = idx === sortedEvents.length - 1;

          return (
            <li key={event.id}>
              <div className="relative pb-8">
                {!isLast && (
                  <span
                    className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200 dark:bg-gray-700"
                    aria-hidden="true"
                  />
                )}
                <div className="relative flex space-x-3">
                  <div>
                    <span className="h-8 w-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center ring-8 ring-white dark:ring-gray-800">
                      <Icon className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </span>
                  </div>
                  <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                    <div>
                      <p className="text-sm text-gray-900 dark:text-white">
                        {event.description}
                      </p>
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        {event.location.address}
                      </p>
                      {event.additionalInfo && (
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                          {event.additionalInfo}
                        </p>
                      )}
                    </div>
                    <div className="whitespace-nowrap text-right text-sm text-gray-500 dark:text-gray-400">
                      <time dateTime={event.timestamp.toISOString()}>
                        {event.timestamp.toLocaleString()}
                      </time>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}