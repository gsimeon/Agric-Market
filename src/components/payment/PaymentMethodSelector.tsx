import React from 'react';
import { CreditCard, Wallet, Building2, Phone } from 'lucide-react';
import { PaymentMethod, PaymentMethodType } from '../../types/payment';

interface PaymentMethodSelectorProps {
  selectedMethod: PaymentMethodType;
  onMethodSelect: (method: PaymentMethodType) => void;
}

const paymentMethods: PaymentMethod[] = [
  {
    type: 'stripe',
    title: 'Credit Card',
    description: 'Pay securely with your credit card',
    icon: 'credit-card',
    enabled: true
  },
  {
    type: 'paystack',
    title: 'Paystack',
    description: 'Fast and secure local payments',
    icon: 'wallet',
    enabled: true
  },
  {
    type: 'payoneer',
    title: 'Payoneer',
    description: 'International bank transfer',
    icon: 'building',
    enabled: true
  },
  {
    type: 'ussd',
    title: 'USSD',
    description: 'Pay using your mobile phone',
    icon: 'phone',
    enabled: true
  }
];

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'credit-card':
      return CreditCard;
    case 'wallet':
      return Wallet;
    case 'building':
      return Building2;
    case 'phone':
      return Phone;
    default:
      return CreditCard;
  }
};

export default function PaymentMethodSelector({
  selectedMethod,
  onMethodSelect
}: PaymentMethodSelectorProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-900 dark:text-white">
        Select Payment Method
      </h3>
      <div className="grid grid-cols-1 gap-4">
        {paymentMethods.map((method) => {
          const Icon = getIcon(method.icon);
          return (
            <label
              key={method.type}
              className={`relative flex cursor-pointer rounded-lg border p-4 ${
                selectedMethod === method.type
                  ? 'border-green-600 bg-green-50 dark:border-green-400 dark:bg-green-900/20'
                  : 'border-gray-300 dark:border-gray-600'
              }`}
            >
              <input
                type="radio"
                name="payment-method"
                className="sr-only"
                checked={selectedMethod === method.type}
                onChange={() => onMethodSelect(method.type)}
                disabled={!method.enabled}
              />
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Icon className={`h-6 w-6 ${
                      selectedMethod === method.type
                        ? 'text-green-600 dark:text-green-400'
                        : 'text-gray-400'
                    }`} />
                  </div>
                  <div className="ml-4">
                    <p className={`text-sm font-medium ${
                      selectedMethod === method.type
                        ? 'text-green-900 dark:text-green-100'
                        : 'text-gray-900 dark:text-white'
                    }`}>
                      {method.title}
                    </p>
                    <p className={`text-sm ${
                      selectedMethod === method.type
                        ? 'text-green-700 dark:text-green-200'
                        : 'text-gray-500 dark:text-gray-400'
                    }`}>
                      {method.description}
                    </p>
                  </div>
                </div>
                <div className={`h-5 w-5 rounded-full border ${
                  selectedMethod === method.type
                    ? 'border-green-600 bg-green-600 dark:border-green-400 dark:bg-green-400'
                    : 'border-gray-300 dark:border-gray-600'
                }`}>
                  <div className={`h-full w-full rounded-full ${
                    selectedMethod === method.type ? 'bg-white dark:bg-gray-900' : ''
                  }`} />
                </div>
              </div>
            </label>
          );
        })}
      </div>
    </div>
  );
}