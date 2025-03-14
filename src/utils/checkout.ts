import { z } from "zod"


export const shippingSchema = z.object({
    email: z.string().email({ message: "Invalid email format" }),
    name: z.string().min(2, { message: "Name must be at least 2 characters" }),
    secondName: z.string().min(2, { message: "Second Name must be at least 2 characters" }),
    address: z.string().min(5, { message: "Address must be at least 5 characters" }),
    shippingNote: z.string().optional(),
    postalCode: z.string().regex(/^\d{5}$/, { message: "Postal Code must be 5 digits" }),
    city: z.string().min(2, { message: "City must be at least 2 characters" }),
    province: z.string().min(2, { message: "Province must be selected" }),
    country: z.string().min(2, { message: "Country must be selected" }),
  })