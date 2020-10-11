import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private paymentMethods = [
    {
      name: 'VISA',
      discount: 0.1, // 10%
    },
    {
      name: 'JCB',
      discount: 0.05, // 5%
    },
    {
      name: 'MasterCard',
      discount: 0.2, // 20%
    },
    {
      name: 'PayPal',
      discount: 0.15, // 15%
    },
  ];

  // payment method lists
  getPaymentMethods() {
    return this.paymentMethods;
  }

  // purchase history
  getPurchaseHistory() {
    return [];
  }
}
