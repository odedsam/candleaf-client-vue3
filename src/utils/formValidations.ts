import { z, ZodError } from 'zod'

export function validate<T>(schema: z.ZodSchema<T>, data: T): Record<string, string> | null {
  try {
    schema.parse(data)
    return null
  } catch (error) {
    if (error instanceof ZodError) {
      return error.errors.reduce((acc, err) => {
        const key = err.path[0] as keyof T
        acc[key as string] = err.message
        return acc
      }, {} as Record<string, string>)
    }
    return { general: 'Unexpected error occurred' }
  }
}


export const billingAddressSchema = z.object({
  address: z.string().min(1, 'Address is required'),
  postalCode: z.string().min(1, 'Postal Code is required'),
  city: z.string().min(1, 'City is required'),
  province: z.string().min(1, 'Province is required'),
  country: z.string().min(1, 'Country is required')
});



export const shippingValidationSchema = z.object({
  email: z.string().email('Invalid email address'),
  subscribe: z.boolean(),
  name: z.string().min(1, 'Name is required'),
  lastName: z.string().optional(),
  address: z.string().min(1, 'Address is required'),
  shippingNote: z.string().optional(),
  postalCode: z.string().min(1, 'Postal Code is required'),
  city: z.string().min(1, 'City is required'),
  province: z.string().min(1, 'Province is required'),
  country: z.string().min(1, 'Country is required'),
  saveInfo:z.boolean().optional()
});




export const paymentValidationSchema = z.object({
  cardNumber: z.string().min(16, 'Card number must be at least 16 characters'),
  holderName: z.string().min(1, 'Cardholder name is required'),
  expiration: z.string().regex(/^\d{2}\/\d{2}$/, 'Expiration must be in MM/YY format'),
  cvv: z.string().min(3, 'CVV must be at least 3 digits'),
  vatNumber: z.string().optional(),
  shippingMethod:z.string().optional(),
  pec: z.string().optional(),
  billingSameAsShipping: z.boolean(),
  billingAddress: billingAddressSchema
});

export type ShippingInfo = z.infer<typeof shippingValidationSchema>;
export type PaymentInfo = z.infer<typeof paymentValidationSchema>;
export type BillingAddress = z.infer<typeof billingAddressSchema>;

export interface ShippingOptions {
  id: string;
  label: string;
  price?: number;
  hasChecked?:boolean;
}
