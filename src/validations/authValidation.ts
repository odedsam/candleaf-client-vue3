import { z } from "zod";

export const signUpSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const validateAuthForm = (form: { name?: string; email: string; password: string }) => {
  const result = signUpSchema.safeParse(form);
  if (!result.success) {
    return {
      name: result.error.formErrors.fieldErrors.name?.[0] || "",
      email: result.error.formErrors.fieldErrors.email?.[0] || "",
      password: result.error.formErrors.fieldErrors.password?.[0] || "",
    };
  }
  return null; 
};