
/* General Types */

export interface CheckoutState {
  step: number;
  contact: ContactInformation;
  shipping: ShippingInfo;
  payment: PaymentInfo;
}


export enum CheckoutStep {
  Cart = '/checkout/cart',
  Details = '/checkout/details',
  Shipping = '/checkout/shipping',
  Payment = '/checkout/payment',
  Confirmation = '/checkout/confirmation'
}







/* Step 1 Types  */

export interface ContactInformation {
  email: string;
  subscribe: boolean;
}

export interface ShippingInfo {
  name: string;
  secondName: string;
  address: string;
  shippingNote: string;
  postalCode: string;
  city: string;
  province: string;
  country: string;
}



/* Step 2 Types  */

export interface ShippingOptions {
  id: string
  label: string
  price: number 
}


/* Step 3 Types  */

export interface BillingAddress {
  address: string;
  postalCode: string;
  city: string;
  province: string;
  country: string;
}

export interface PaymentInfo {
  cardNumber: string;
  holderName: string;
  expiration: string;
  cvv: string;
  vatNumber?: string;
  pec?: string;
  billingSameAsShipping: boolean;
  billingAddress: BillingAddress;
}

