<script setup lang="ts">
import { API } from '@/utils';
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

interface Product {
  title: string;
  image: string;
  price: number;
  quantity: number;
  subTotal: number;
}

interface Order {
  _id: string;
  orderNumber: string;
  email: string;
  name: string;
  city: string;
  country: string;
  postal_code: string;
  shipping_note: string;
  shipping_method: string;
  products: Product[];
  sub_total: number;
  isGuest: boolean;
  status: string;
  createdAt: string;
  updatedAt: string;
}

const route = useRoute();
const router = useRouter();
const order = ref<Order | null>(null);
const isLoading = ref(true);
const error = ref<string | null>(null);

async function fetchOrder(id: string) {
  try {
    isLoading.value = true;
    const res = await fetch(`${API}/api/v1/orders/${id}`);
    if (!res.ok) throw new Error('Failed to fetch order');
    order.value = await res.json();
  } catch (e: any) {
    error.value = e.message;
  } finally {
    isLoading.value = false;
  }
}

onMounted(async () => {
  const id = route.params.orderId as string;
  console.log(id);
  if (!id) {
    error.value = 'Invalid order ID';
    isLoading.value = false;
    return;
  }
  await fetchOrder(id);
});

function goBack() {
  router.back();
}
</script>

<template>
  <div class="p-4 max-w-4xl mx-auto">
    <button
      @click="goBack"
      class="mb-4 px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition">
      ← Back
    </button>

    <div v-if="isLoading" class="text-gray-600 dark:text-gray-400">Loading order details...</div>
    <div v-else-if="error" class="text-red-600 dark:text-red-400">{{ error }}</div>

    <div v-else-if="order" class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <h1 class="text-2xl font-bold mb-2 dark:text-gray-100">Order Details</h1>
      <p class="text-gray-600 dark:text-gray-400 mb-4">
        Order Number:
        <span class="font-semibold">{{ order.orderNumber }}</span>
      </p>
      <p class="text-gray-600 dark:text-gray-400 mb-4">
        Status:
        <span
          class="px-2 py-1 rounded-full text-xs font-semibold"
          :class="{
            'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200': order.status === 'pending',
            'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200': order.status === 'paid' || order.status === 'shipped',
            'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200': order.status === 'delivered',
            'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200': order.status === 'cancelled',
          }">
          {{ order.status }}
        </span>
      </p>

      <section class="mb-6">
        <h2 class="text-xl font-semibold mb-2 dark:text-gray-100">Shipping Info</h2>
        <ul class="text-gray-700 dark:text-gray-300 space-y-1">
          <li>
            <strong>Name:</strong>
            {{ order.name }}
          </li>
          <li>
            <strong>Email:</strong>
            {{ order.email }}
          </li>
          <li>
            <strong>City:</strong>
            {{ order.city }}
          </li>
          <li>
            <strong>Country:</strong>
            {{ order.country }}
          </li>
          <li>
            <strong>Postal Code:</strong>
            {{ order.postal_code }}
          </li>
          <li>
            <strong>Shipping Method:</strong>
            {{ order.shipping_method }}
          </li>
          <li>
            <strong>Shipping Note:</strong>
            {{ order.shipping_note }}
          </li>
          <li>
            <strong>Guest Order:</strong>
            {{ order.isGuest ? 'Yes' : 'No' }}
          </li>
        </ul>
      </section>

      <section>
        <h2 class="text-xl font-semibold mb-2 dark:text-gray-100">Products</h2>
        <ul class="space-y-4 max-h-96 overflow-auto pr-2">
          <li v-for="product in order.products" :key="product.title" class="flex gap-4 items-center">
            <img
              :src="product.image"
              alt="product"
              class="w-16 h-16 rounded-md object-cover border border-gray-200 dark:border-gray-700 flex-shrink-0" />
            <div class="flex flex-col flex-1">
              <p class="font-semibold text-gray-800 dark:text-gray-100 truncate">{{ product.title }}</p>
              <p class="text-gray-600 dark:text-gray-400 text-sm">Quantity: {{ product.quantity }}</p>
              <p class="text-gray-600 dark:text-gray-400 text-sm">Price: {{ product.price.toFixed(2) }} ₪</p>
              <p class="font-semibold text-gray-700 dark:text-gray-300 text-sm">Subtotal: {{ product.subTotal.toFixed(2) }} ₪</p>
            </div>
          </li>
        </ul>
      </section>

      <div class="mt-6 flex justify-end">
        <p class="text-lg font-bold text-gray-800 dark:text-gray-100">Total: {{ order.sub_total.toFixed(2) }} ₪</p>
      </div>
    </div>
  </div>
</template>
