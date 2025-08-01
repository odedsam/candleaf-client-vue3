import { defineStore, storeToRefs } from 'pinia';
import { computed, ref, watch } from 'vue';
import { useRouter } from 'vue-router';

import { type PaymentInfo, type ShippingInfo, ShippingOptions } from '@/utils/formValidations';
import { shippingValidationSchema, paymentValidationSchema } from '@/utils/formValidations';
import { formatShippingAddress } from '@/utils/formatters';

import { CartItem, CheckoutStepRoutes } from '@/types/index';

import { useLocalStorage } from '@vueuse/core';
import { showToast } from '@/utils';
import { useCartStore } from './cartStore';
import axios from 'axios';
import { useAuthStore } from '@/stores/authStore';

export const useCheckoutStore = defineStore('checkout', () => {
  const router = useRouter();
  const cartStore = useCartStore();
  const authStore = useAuthStore();

  const { cartItems, subTotal } = storeToRefs(cartStore);
  const { isAuthenticated,user } = storeToRefs(authStore);

  const step = ref(useLocalStorage<number>('checkout_step', 0).value);
  const stepRoutes = Object.values(CheckoutStepRoutes);
  const orderConfirmation = ref<any>({});
  const items = ref({ cartItems, subTotal });

  const updateStep = (direction: 1 | -1) => {
    const newStep = step.value + direction;
    if (newStep >= 0 && newStep < stepRoutes.length) {
      step.value = newStep;
      router.push(stepRoutes[newStep]);
    } else if (direction === -1) {
      router.push('/products');
    }
  };
  const nextStep = () => updateStep(1);
  const prevStep = () => updateStep(-1);
  watch(step, (newStep) => localStorage.setItem('checkout_step', JSON.stringify(newStep)));

  const shipping = useLocalStorage<ShippingInfo>(
    'checkout_shipping',
    {
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
    },
    { mergeDefaults: true },
  );

  const shippingOptions = ref<ShippingOptions[]>([
    { id: 'standard', label: 'Standard Shipping', price: 0, hasChecked: true },
    { id: 'express', label: 'Express Shipping', price: 10, hasChecked: false },
  ]);
  const formattedShippingAddress = computed(() => formatShippingAddress(shipping.value));
  const shippingMethod = shippingOptions.value[0].id;
  const paymentData = ref<PaymentInfo>({
    cardNumber: '',
    holderName: '',
    expiration: '',
    cvv: '',
    shippingMethod,
  });

  const aggregateFormData = computed(() => {
    return {
      shipping: {
        ...shipping.value,
      },
      cartItems: items.value,
      user,
      isGuest:!isAuthenticated,
      payment: paymentData.value,
    };
  });






  const submitFormData = async () => {
    const formData = aggregateFormData.value;
    try {
      const response = await axios.post('http://localhost:5001/api/v1/checkout', formData);
      console.log('Success:', response.data);

      if (response.data) {
        orderConfirmation.value = response.data;
        setTimeout(() => {
          return router.push('/checkout/confirmation');
        }, 600);
      }
      useLocalStorage<CartItem[]>('cart-items', null)

      showToast({
        ToastMessage: 'Item Successfuly Purchased ! ',
        bgColor: '#56B280',
        textColor: '#fff',
        borderColor: '#56B280',
        position: 'bottom-right',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const shippingErrors = ref<Partial<Record<keyof ShippingInfo, string>>>({});
  const validateDetails = () => {
    const result = shippingValidationSchema.safeParse(shipping.value);
    shippingErrors.value = result.success
      ? {}
      : Object.fromEntries(
          Object.entries(result.error.format()).map(([key, value]) => [
            key,
            (value as { _errors?: string[] })?._errors?.[0] ?? 'Unknown validation error',
          ]),
        );
  };

  const stepValidations = ref<Record<string, boolean>>({
    '/checkout/details': false,
    '/checkout/payment': false,
  });

  const isCurrentStepValid = (path: string) => stepValidations.value[path] ?? true;

  return {
    step,
    stepRoutes,
    nextStep,
    prevStep,
    shipping,
    shippingOptions,
    formattedShippingAddress,
    paymentData,
    submitFormData,
    shippingErrors,
    orderConfirmation,
    validateDetails,
    isCurrentStepValid,
  };
});
