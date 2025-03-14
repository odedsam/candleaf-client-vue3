import { ref, watch, toRaw, type Ref } from 'vue';
import { ZodSchema } from 'zod';

export function useValidation<T extends Record<string, any>>(schema: ZodSchema<T>, formData: Ref<T>) {
  type FormErrorsType = Partial<Record<keyof T, string>>;
  const formErrors = ref<FormErrorsType>({});
  const touchedFields = ref<Partial<Record<keyof T, boolean>>>({});

  const validateForm = () => {
    // Ensure all fields exist in formErrors (prevents TypeScript errors)
    formErrors.value = Object.keys(formData.value).reduce((acc, key) => {
      acc[key as keyof T] = '';
      return acc;
    }, {} as FormErrorsType);

    const result = schema.safeParse(toRaw(formData.value));

    if (!result.success) {
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof T;
        //  Show error only if field has been touched
        if (touchedFields.value[field]) {
          formErrors.value[field] = err.message;
        }
      });
      return false;
    }

    return true;
  };

  const markFieldTouched = (field: keyof T) => {
    touchedFields.value[field] = true;
    validateForm(); // revalidate after field is touched
  };

  watch(formData, validateForm, { deep: true });

  return { formErrors, validateForm, markFieldTouched };
}