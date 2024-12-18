export type PaymentMethodType = 'stripe' | 'paystack' | 'payoneer' | 'ussd';

export interface PaymentMethod {
  type: PaymentMethodType;
  title: string;
  description: string;
  icon: string;
  enabled: boolean;
}

export interface PaymentDetails {
  amount: number;
  currency: string;
  method: PaymentMethod;
  orderId: string;
  customerEmail: string;
}