import { defineStore } from 'pinia';
import { ref } from 'vue';

export const usePaymentStore = defineStore('payment', () => {
  const clientSecret = ref<string | null>(null);

  const createPaymentIntent = async (amount: number) => {
    try {
      const response = await fetch('http://localhost:5000/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount, currency: 'usd' }),
      });

      const data = await response.json();
      clientSecret.value = data.clientSecret;
    } catch (error) {
      console.error('Payment intent error:', error);
    }
  };

  return { clientSecret, createPaymentIntent };
});
