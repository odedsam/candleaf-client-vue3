import { ref, watch, toRaw } from 'vue';
export function useValidation(schema, formData) {
    var formErrors = ref({});
    var touchedFields = ref({});
    var validateForm = function () {
        // Ensure all fields exist in formErrors (prevents TypeScript errors)
        formErrors.value = Object.keys(formData.value).reduce(function (acc, key) {
            acc[key] = '';
            return acc;
        }, {});
        var result = schema.safeParse(toRaw(formData.value));
        if (!result.success) {
            result.error.errors.forEach(function (err) {
                var field = err.path[0];
                //  Show error only if field has been touched
                if (touchedFields.value[field]) {
                    formErrors.value[field] = err.message;
                }
            });
            return false;
        }
        return true;
    };
    var markFieldTouched = function (field) {
        touchedFields.value[field] = true;
        validateForm(); // revalidate after field is touched
    };
    watch(formData, validateForm, { deep: true });
    return { formErrors: formErrors, validateForm: validateForm, markFieldTouched: markFieldTouched };
}
