<script setup lang="ts">
import { ref, onMounted } from "vue";
import { loadStripe, Stripe, StripeElements, StripeCardElement } from "@stripe/stripe-js";

// define Stripe public key (Test Key)
const STRIPE_PUBLIC_KEY = "pk_test_XXXXXXXXXXXXXXXXXXXXXXXX"; // replace to my test key

// refs for Stripe instances
const stripe = ref<Stripe | null>(null);
const elements = ref<StripeElements | null>(null);
const cardElement = ref<StripeCardElement | null>(null);
const cardRef = ref<HTMLElement | null>(null);
const loading = ref<boolean>(false);
const message = ref<string | null>(null);
const success = ref<boolean>(false);

// load stripe on component mount
onMounted(async () => {
  stripe.value = await loadStripe(STRIPE_PUBLIC_KEY);
  if (stripe.value) {
    elements.value = stripe.value.elements();
    cardElement.value = elements.value.create("card");
    cardElement.value.mount(cardRef.value!);
  }
});

// handle payment submission
const handlePayment = async () => {
  if (!stripe.value || !cardElement.value) return;
  loading.value = true;
  message.value = null;
  success.value = false;

  const { paymentMethod, error } = await stripe.value.createPaymentMethod({
    type: "card",
    card: cardElement.value,
  });

  if (error) {
    message.value = error.message!;
    success.value = false;
  } else {
    message.value = "Test payment successful!";
    success.value = true;
  }

  loading.value = false;
};
</script>

<template>
  <div>
    <h2>Stripe Test Payment</h2>
    <form @submit.prevent="handlePayment">
      <div ref="cardRef" class="card-element"></div>
      <button type="submit" :disabled="loading">
        {{ loading ? "Processing..." : "Pay Test $10" }}
      </button>
    </form>
    <p v-if="message" :class="{ success, error: !success }">{{ message }}</p>
  </div>
</template>

<style scoped>
.card-element {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
}
button {
  background: #6772e5;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
}
.success {
  color: green;
}
.error {
  color: red;
}
</style>