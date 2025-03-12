

export interface ContactInfo {
    email: string;
    newsletter: boolean;
  }
  
  export interface ShippingAddress {
    name: string;
    secondName: string;
    address: string;
    shippingNote?: string;
    city: string;
    postalCode: string;
    province: string;
    country: string;
    saveInfo: boolean;
  }
  
  export type CheckoutDetails = {
    contact: string;
    name: string;
    secondName: string;
    address: string;
    shippingNote?: string;
    city: string;
    postalCode: string;
    province: string;
    country: string;
    saveInfo: boolean;
  };
  
  export interface ShippingMethod  {
    selectedShipping:string;
    shippingCost:number
  };
  
  
  export interface TaxInfo {
    vatNumber: string;
    pec: string;
  }
  export interface PaymentInfo {
    cardNumber: string;
    holderName: string;
    expiration: string;
    cvv: string;
  }
  
  export interface TaxInfo {
    vatNumber: string;
    pec: string;
  }
  
  export interface BillingAddress {
    sameAsShipping: boolean;
    name: string;
    secondName: string;
    address: string;
    city: string;
    postalCode: string;
    province: string;
    country: string;
  }
  
  export interface Coupon  {
    code: string;
    discount: number; 
  };