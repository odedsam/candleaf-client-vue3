import { defineStore } from 'pinia';
import { computed, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { billingAddressSchema, shippingValidationSchema, contactValidationSchema, paymentSchema } from '@/utils/formValidations';
import { CheckoutState, CheckoutStep, ContactInformation, ShippingInfo, ShippingOptions, PaymentInfo } from "@/types/checkout";
import { z } from 'zod';
import { formatShippingAddress } from "@/utils/formatters";

// Define Store
export const useCheckoutStore = defineStore('checkout', () => {
  const router = useRouter();
  const step = ref<CheckoutState['step']>(1);

  /*  Steps & Routing Logic */


  const stepRoutes: CheckoutStep[] = [
    CheckoutStep.Cart,
    CheckoutStep.Details,
    CheckoutStep.Shipping,
    CheckoutStep.Payment,
    CheckoutStep.Confirmation
  ];

  const nextStep = () => {
    if (step.value < stepRoutes.length - 1) {
      step.value++;
      router.push(stepRoutes[step.value]);
    }
  };

  const prevStep = () => {
    if (step.value === 0) {
      router.push('/products');
    } else {
      step.value--;
      router.push(stepRoutes[step.value]);
    }
  };

  /*  Step 2: Contact Information */
  const contactInformation = ref<ContactInformation>({
    email: '',
    subscribe: false
  });

  const contactErrors = ref<Partial<Record<keyof ContactInformation, string>>>({});

  /*  Step 3: Shipping Information */
  const shipping = ref<ShippingInfo>({
    name: '',
    secondName: '',
    address: '',
    shippingNote: '',
    postalCode: '',
    city: '',
    province: '',
    country: 'Italy'
  });

  const shippingErrors = ref<Partial<Record<keyof ShippingInfo, string>>>({});

  /* Step 4: Shipping Options */
  const shippingOptions = ref<ShippingOptions[]>([
    { id: 'standard', label: 'Standard Shipping', price: 0 },
    { id: 'express', label: 'Express Shipping', price: 10 }
  ]);

  /* Computed formatted shipping address */
  const formattedShippingAddress = computed(() => formatShippingAddress(shipping.value));

  /*  Step 5: Payment Information */
  const payment = ref<PaymentInfo>({
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

  const paymentErrors = ref<Partial<Record<keyof PaymentInfo, string>>>({});

  /*  Validation Functions */

  const validateContact = () => {
    const result = contactValidationSchema.safeParse(contactInformation.value);
    contactErrors.value = {};
    if (!result.success) {
      result.error.errors.forEach((err) => {
        contactErrors.value[err.path[0] as keyof ContactInformation] = err.message;
      });
      return false;
    }
    return true;
  };

  const validateShipping = () => {
    const result = shippingValidationSchema.safeParse(shipping.value);
    shippingErrors.value = {};
    if (!result.success) {
      result.error.errors.forEach((err) => {
        shippingErrors.value[err.path[0] as keyof ShippingInfo] = err.message;
      });
      return false;
    }
    return true;
  };

  const validatePayment = () => {
    const result = paymentSchema.safeParse(payment.value);
    paymentErrors.value = {};
    if (!result.success) {
      result.error.errors.forEach((err) => {
        paymentErrors.value[err.path[0] as keyof PaymentInfo] = err.message;
      });
      return false;
    }
    return true;
  };

  /* Auto Validate When Data Changes */
  watch(contactInformation, validateContact, { deep: true });
  watch(shipping, validateShipping, { deep: true });
  watch(payment, validatePayment, { deep: true });

  /* Combined Validation for Submission */
  const validateAll = () => {
    return validateContact() && validateShipping() && validatePayment();
  };

  /* Setter Functions */
  const setContactInfo = (data: Partial<ContactInformation>) => {
    contactInformation.value = { ...contactInformation.value, ...data };
  };

  const setShippingInfo = (data: Partial<ShippingInfo>) => {
    shipping.value = { ...shipping.value, ...data };
  };

  const setPaymentInfo = (data: Partial<PaymentInfo>) => {
    payment.value = { ...payment.value, ...data };
  };

  return {
    step,
    stepRoutes,
    nextStep,
    prevStep,

    contactInformation,
    contactErrors,
    validateContact,
    setContactInfo,

    shipping,
    shippingOptions,
    shippingErrors,
    validateShipping,
    setShippingInfo,

    payment,
    paymentErrors,
    validatePayment,
    setPaymentInfo,

    formattedShippingAddress,
    validateAll
  };
});