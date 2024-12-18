import React, { useState } from 'react';
import { AlertCircle, Loader } from 'lucide-react';
import { PaymentMethodType } from '../../types/payment';
import PaymentMethodSelector from './PaymentMethodSelector';
import { processPayment } from '../../services/paymentService';

interface PaymentFormProps {
  amount: number;
  onSuccess: (transactionId: string) => void;
  onError: (error: string) => void;
}

export default function PaymentForm({ amount, onSuccess, onError }: PaymentFormProps) {
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethodType>('stripe');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const result = await processPayment(amount, { 
        type: selectedMethod,
        title: '',
        description: '',
        icon: '',
        enabled: true
      });

      if (result.success && result.transactionId) {
        onSuccess(result.transactionId);
      } else {
        throw new Error(result.error || 'Payment failed');
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Payment processing failed';
      setError(errorMessage);
      onError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <PaymentMethodSelector
        selectedMethod={selectedMethod}
        onMethodSelect={setSelectedMethod}
      />

      {error && (
        <div className="flex items-center text-red-600 dark:text-red-400">
          <AlertCircle className="h-5 w-5 mr-2" />
          <span>{error}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
      >
        {loading ? (
          <>
            <Loader className="h-5 w-5 mr-2 animate-spin" />
            Processing Payment...
          </>
        ) : (
          `Pay ${amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`
        )}
      </button>
    </form>
  );
}