import { z } from 'zod';

export const billingAddressSchema = z.object({
  address: z.string().min(1, 'Address is required'),
  postalCode: z.string().min(1, 'Postal Code is required'),
  city: z.string().min(1, 'City is required'),
  province: z.string().min(1, 'Province is required'),
  country: z.string().min(1, 'Country is required')
});


export const shippingValidationSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  secondName: z.string().optional(),
  address: z.string().min(1, 'Address is required'),
  shippingNote: z.string().optional(),
  postalCode: z.string().min(1, 'Postal Code is required'),
  city: z.string().min(1, 'City is required'),
  province: z.string().min(1, 'Province is required'),  
  country: z.string().min(1, 'Country is required'),  
});


export const contactValidationSchema = z.object({
  email: z.string().email('Invalid email address'),
  subscribe: z.boolean()
});


export const paymentSchema = z.object({
  cardNumber: z.string().min(16, 'Card number must be at least 16 characters'),
  holderName: z.string().min(1, 'Cardholder name is required'),
  expiration: z.string().regex(/^\d{2}\/\d{2}$/, 'Expiration must be in MM/YY format'),
  cvv: z.string().min(3, 'CVV must be at least 3 digits'),
  vatNumber: z.string().optional(), 
  pec: z.string().optional(), 
  billingSameAsShipping: z.boolean(),
  billingAddress: billingAddressSchema
});