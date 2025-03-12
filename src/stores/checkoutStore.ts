import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { ContactInfo,
  ShippingAddress,
  ShippingMethod,
  PaymentInfo,
  TaxInfo,
  BillingAddress
 } from '@/types/checkout'
import axios from 'axios';
import { BASE_URL } from '@/services/productService';

export const useCheckoutStore = defineStore('checkout', () => {
  const contactInfo = ref<ContactInfo>({
    email: '',
    newsletter: false
  });
  const currentStep = ref<number>(0); 

  const steps = computed(() => [
    { name: 'checkout-details', label: 'Contact Information' },
    { name: 'checkout-shipping', label: 'Shipping Details' },
    { name: 'checkout-payment', label: 'Payment' },
    { name: 'checkout-confirmation', label: 'Confirmation' }
  ]);

  const isCheckoutComplete = computed(() => currentStep.value >= steps.value.length - 1);

  function nextStep() {
    if (currentStep.value < steps.value.length - 1) {
      currentStep.value++;
    }
  }

  function prevStep() {
    if (currentStep.value > 0) {
      currentStep.value--;
    }
  }

  const shippingAddress = ref<ShippingAddress>({
    name: '',
    secondName: '',
    address: '',
    shippingNote: '',
    city: '',
    postalCode: '',
    province: '',
    country: 'Italy',
    saveInfo: false
  });

  const shippingData = ref<ShippingMethod>({
    selectedShipping: 'Standard Shipping',
    shippingCost: 0
  });

  const paymentInfo = ref<PaymentInfo>({
    cardNumber: '',
    holderName: '',
    expiration: '',
    cvv: ''
  });

  const taxInfo = ref<TaxInfo>({
    vatNumber: '',
    pec: ''
  });

  const billingAddress = ref<BillingAddress>({
    sameAsShipping: true,
    name: '',
    secondName: '',
    address: '',
    city: '',
    postalCode: '',
    province: '',
    country: 'Italy'
  });

  const formattedShippingAddress = computed(() => {
    return `${shippingAddress.value.address}, ${shippingAddress.value.postalCode}, ${shippingAddress.value.city}, ${shippingAddress.value.province}, ${shippingAddress.value.country}`;
  });

  //  Computed property to format full billing address
  const formattedBillingAddress = computed(() => {
    if (billingAddress.value.sameAsShipping) {
      return formattedShippingAddress.value;
    }
    return `${billingAddress.value.address}, ${billingAddress.value.postalCode}, ${billingAddress.value.city}, ${billingAddress.value.province}, ${billingAddress.value.country}`;
  });

  //  Set Contact Info

  function setContactInfo(newInfo: { email?: string; newsletter?: boolean }) {
    contactInfo.value = { ...contactInfo.value, ...newInfo }
  }


  //  Set Shipping Address
  function setShippingAddress(details: Partial<ShippingAddress>) {
    shippingAddress.value = { ...shippingAddress.value, ...details };
  }

  //  Set Shipping Method
  function setShippingMethod(method: string, cost: number) {
    shippingData.value.selectedShipping = method;
    shippingData.value.shippingCost = cost;
  }

  //  Set Payment Info
  function setPaymentInfo(details: Partial<PaymentInfo>) {
    paymentInfo.value = { ...paymentInfo.value, ...details };
  }

  //  Set Tax Info
  function setTaxInfo(details: Partial<TaxInfo>) {
    taxInfo.value = { ...taxInfo.value, ...details };
  }

  //  Set Billing Address
  function setBillingAddress(details: Partial<BillingAddress>) {
    billingAddress.value = { ...billingAddress.value, ...details };
  }
  function updateBillingAddress(sameAsShipping: boolean) {
    billingAddress.value.sameAsShipping = sameAsShipping;

    if (sameAsShipping) {
      // Copy shipping address to billing address
      billingAddress.value = {
        ...billingAddress.value,
        ...shippingAddress.value
      };
    } else {
      // Reset billing address for manual input
      billingAddress.value = {
        sameAsShipping: false,
        name: '',
        secondName: '',
        address: '',
        city: '',
        postalCode: '',
        province: '',
        country: 'Italy'
      };
    }
  }

  async function submitOrder() {
    try {
      const response = await axios.post(`${BASE_URL}/api/checkout`, {
        contactInfo: contactInfo.value,
        shippingAddress: shippingAddress.value,
        billingAddress: billingAddress.value,
        shippingData: shippingData.value,
        paymentInfo: paymentInfo.value,
        taxInfo: taxInfo.value
      }, {
        withCredentials: true // Send session cookies
      });
  
      console.log('Order submitted successfully:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error submitting order:', error.response ? error.response.data : error.message);
      throw error;
    }
  }
  
  

  return {
    contactInfo,
    shippingAddress,
    shippingData,
    currentStep,
    steps,
    nextStep,
    prevStep,
    paymentInfo,
    taxInfo,
    billingAddress,
    formattedShippingAddress,
    formattedBillingAddress,
    setContactInfo,
    setShippingAddress,
    setShippingMethod,
    setPaymentInfo,
    setTaxInfo,
    setBillingAddress,
    updateBillingAddress,
    submitOrder
  }
});