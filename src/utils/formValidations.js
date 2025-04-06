import { z, ZodError } from 'zod';
export function validate(schema, data) {
    try {
        schema.parse(data); // Validate data, throws error if invalid
        return null; // No errors, return null
    }
    catch (error) {
        if (error instanceof ZodError) {
            return error.errors.reduce(function (acc, err) {
                var key = err.path[0];
                acc[key] = err.message;
                return acc;
            }, {});
        }
        return { general: 'Unexpected error occurred' }; // Fallback error
    }
}
export var billingAddressSchema = z.object({
    address: z.string().min(1, 'Address is required'),
    postalCode: z.string().min(1, 'Postal Code is required'),
    city: z.string().min(1, 'City is required'),
    province: z.string().min(1, 'Province is required'),
    country: z.string().min(1, 'Country is required')
});
export var shippingValidationSchema = z.object({
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
    saveInfo: z.boolean().optional()
});
export var paymentValidationSchema = z.object({
    cardNumber: z.string().min(16, 'Card number must be at least 16 characters'),
    holderName: z.string().min(1, 'Cardholder name is required'),
    expiration: z.string().regex(/^\d{2}\/\d{2}$/, 'Expiration must be in MM/YY format'),
    cvv: z.string().min(3, 'CVV must be at least 3 digits'),
    vatNumber: z.string().optional(),
    pec: z.string().optional(),
    billingSameAsShipping: z.boolean(),
    billingAddress: billingAddressSchema
});
