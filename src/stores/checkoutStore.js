import { defineStore } from 'pinia';
import { computed, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { shippingValidationSchema } from '@/utils/formValidations';
import { formatShippingAddress } from '@/utils/formatters';
import { useLocalStorage } from '@vueuse/core';
import { CheckoutStepRoutes } from '@/types/index';
export var useCheckoutStore = defineStore('checkout', function () {
    var router = useRouter();
    var step = ref(useLocalStorage('checkout_step', 0).value);
    var stepRoutes = Object.values(CheckoutStepRoutes);
    var updateStep = function (direction) {
        var newStep = step.value + direction;
        if (newStep >= 0 && newStep < stepRoutes.length) {
            step.value = newStep;
            router.push(stepRoutes[newStep]);
        }
        else if (direction === -1) {
            router.push("/products");
        }
    };
    var nextStep = function () { return updateStep(1); };
    var prevStep = function () { return updateStep(-1); };
    //  persisst step changes
    watch(step, function (newStep) { return localStorage.setItem("checkout_step", JSON.stringify(newStep)); });
    //  local Storage State
    var shipping = useLocalStorage('checkout_shipping', {
        email: '',
        subscribe: false,
        name: '',
        lastName: '',
        address: '',
        shippingNote: '',
        postalCode: '',
        city: '',
        province: '',
        country: 'Italy',
        saveInfo: false,
    }, { mergeDefaults: true });
    var shippingOptions = ref([
        { id: 'standard', label: 'Standard Shipping', price: 0 },
        { id: 'express', label: 'Express Shipping', price: 10 }
    ]);
    var formattedShippingAddress = computed(function () { return formatShippingAddress(shipping.value); });
    //  validation Handling
    var shippingErrors = ref({});
    var validateDetails = function () {
        var result = shippingValidationSchema.safeParse(shipping.value);
        shippingErrors.value = result.success ? {} : Object.fromEntries(Object.entries(result.error.format()).map(function (_a) {
            var _b, _c;
            var key = _a[0], value = _a[1];
            return [
                key,
                (_c = (_b = value === null || value === void 0 ? void 0 : value._errors) === null || _b === void 0 ? void 0 : _b[0]) !== null && _c !== void 0 ? _c : "Unknown validation error"
            ];
        }));
    };
    //  step validation state
    var stepValidations = ref({
        "/checkout/details": false,
        "/checkout/payment": false
    });
    //  check if current step is valid
    var isCurrentStepValid = function (path) { var _a; return (_a = stepValidations.value[path]) !== null && _a !== void 0 ? _a : true; };
    return {
        step: step,
        stepRoutes: stepRoutes,
        nextStep: nextStep,
        prevStep: prevStep,
        shipping: shipping,
        shippingOptions: shippingOptions,
        shippingErrors: shippingErrors,
        validateDetails: validateDetails,
        formattedShippingAddress: formattedShippingAddress,
        isCurrentStepValid: isCurrentStepValid
    };
});
