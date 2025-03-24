import { defineStore } from 'pinia';
import { computed, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { type PaymentInfo, type ShippingInfo, ShippingOptions } from '@/utils/formValidations';
import { shippingValidationSchema, paymentValidationSchema } from '@/utils/formValidations';
import { formatShippingAddress } from '@/utils/formatters';
import { useLocalStorage } from '@vueuse/core';
import { CheckoutStepRoutes } from '@/types/index';


export const useCheckoutStore = defineStore('checkout', () => {
  const router = useRouter();
  const step = ref(useLocalStorage<number>('checkout_step', 0).value);
  const stepRoutes = Object.values(CheckoutStepRoutes);

  const updateStep = (direction: 1 | -1) => {
    const newStep = step.value + direction;
    if (newStep >= 0 && newStep < stepRoutes.length) {
      step.value = newStep;
      router.push(stepRoutes[newStep]);
    } else if (direction === -1) {
      router.push("/products");
    }
  };

  const nextStep = () => updateStep(1);
  const prevStep = () => updateStep(-1);

  //  persisst step changes
  watch(step, (newStep) => localStorage.setItem("checkout_step", JSON.stringify(newStep)));

  //  local Storage State
  const shipping = useLocalStorage<ShippingInfo>('checkout_shipping', {
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

  const shippingOptions = ref<ShippingOptions[]>([
    { id: 'standard', label: 'Standard Shipping', price: 0 },
    { id: 'express', label: 'Express Shipping', price: 10 }
  ]);

  const formattedShippingAddress = computed(() => formatShippingAddress(shipping.value));

  const payment = useLocalStorage<PaymentInfo>('checkout_payment', {
    cardNumber: '',
    holderName: '',
    expiration: '',
    cvv: '',
    vatNumber: '',
    pec: '',
    billingSameAsShipping: true,
    billingAddress: {
      address: '',
      postalCode: '',
      city: '',
      province: '',
      country: ''
    }
  });

  //  validation Handling
  const shippingErrors = ref<Partial<Record<keyof ShippingInfo, string>>>({});
  const paymentErrors = ref<Partial<Record<keyof PaymentInfo, string>>>({});

  const validateDetails = () => {
    const result = shippingValidationSchema.safeParse(shipping.value);
    shippingErrors.value = result.success ? {} : Object.fromEntries(
      Object.entries(result.error.format()).map(([key, value]) => [
        key, (value as { _errors?: string[] })?._errors?.[0] ?? "Unknown validation error"
      ])
    );
  };

  const validatePayment = () => {
    const result = paymentValidationSchema.safeParse(payment.value);
    if (!result.success) {
      paymentErrors.value = Object.fromEntries(
        Object.entries(result.error.format()).map(([key, value]) => [
          key, (value as { _errors?: string[] })?._errors?.[0] ?? "Unknown validation error"
        ])
      );
      return false;
    }
    paymentErrors.value = {};
    return true;
  };

  //  step validation state
  const stepValidations = ref<Record<string, boolean>>({
    "/checkout/details": false,
    "/checkout/payment": false
  });

  //  dynamic step validation
  const getStepValidation = (path: string) => ({
    "/checkout/details": validateDetails,
    "/checkout/payment": validatePayment
  })[path];

  //  check if current step is valid
  const isCurrentStepValid = (path: string) => stepValidations.value[path] ?? true;

  return {
    step,
    stepRoutes,
    nextStep,
    prevStep,
    shipping,
    shippingOptions,
    shippingErrors,
    validateDetails,
    payment,
    paymentErrors,
    validatePayment,
    formattedShippingAddress,
    getStepValidation,
    isCurrentStepValid 
  };
});
