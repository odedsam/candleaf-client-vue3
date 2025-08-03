<script setup lang="ts">
import { useAuthStore } from '@/stores/authStore';
import { onMounted } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

const route = useRoute();
const authStore = useAuthStore();

onMounted(() => {
  const id = route.params.id as string;
  authStore.fetchUserProfile(id);
});
</script>
<template>
  <div v-if="authStore.isLoading" class="p-4 text-gray-500 dark:text-gray-300">Loading...</div>

  <div v-else-if="authStore.error" class="p-4 text-red-500 dark:text-red-400">
    {{ authStore.error }}
  </div>

  <div v-else-if="authStore.user" class="p-4 md:p-8 max-w-7xl mx-auto">
    <div
      class="flex flex-col md:flex-row md:items-center md:justify-between bg-white dark:bg-gray-800 rounded-lg shadow p-4 mb-6 gap-4 transition-colors">
      <div>
        <h1 class="text-2xl font-bold text-gray-800 dark:text-gray-100 break-words">
          {{ authStore.user.name }}
        </h1>
        <p class="text-gray-600 dark:text-gray-400 break-words">
          {{ authStore.user.email }}
        </p>
      </div>
      <img
        :src="authStore.user.avatar"
        alt="avatar"
        class="w-20 h-20 rounded-full shadow border border-gray-200 dark:border-gray-700 object-cover" />
    </div>

    <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">History Orders</h2>

    <div v-if="authStore.orders?.length" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="order in authStore.orders"
        :key="order._id"
        class="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-xl transition-all flex flex-col p-5">
        <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
          <h3 class="font-semibold text-gray-800 dark:text-gray-100 text-base truncate">
            {{ order.orderNumber }}
          </h3>
          <span
            class="px-3 py-1 text-xs font-medium rounded-full whitespace-nowrap"
            :class="{
              'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200': order.status === 'pending',
              'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200': order.status === 'paid' || order.status === 'shipped',
              'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200': order.status === 'delivered',
              'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200': order.status === 'cancelled',
            }">
            {{ order.status }}
          </span>
        </div>

        <p class="text-gray-500 dark:text-gray-400 text-sm mb-2">
          {{ new Date(order.createdAt).toLocaleDateString() }}
        </p>
        <p class="text-gray-700 dark:text-gray-300 font-semibold mb-4">Total: {{ order.sub_total.toFixed(2) }} ₪</p>

        <ul class="space-y-2 mb-4 flex-1 overflow-y-auto max-h-40 pr-2">
          <li v-for="product in order.products" :key="product.title" class="flex items-center gap-3">
            <img
              :src="product.image"
              alt="product"
              class="w-12 h-12 rounded-md object-cover border border-gray-200 dark:border-gray-700 flex-shrink-0" />
            <div class="truncate">
              <p class="text-gray-800 dark:text-gray-100 text-sm font-medium truncate">
                {{ product.title }}
              </p>
              <p class="text-gray-500 dark:text-gray-400 text-xs">{{ product.quantity }} × {{ product.price }}₪</p>
            </div>
          </li>
        </ul>

        <RouterLink
          class="mt-auto px-4 py-2 rounded-md text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors w-full"
          :to="{ name: 'order-details', params: { id: route.params.id, orderId: order._id } }">
          View Details
        </RouterLink>
      </div>
    </div>

    <p v-else class="text-gray-500 dark:text-gray-400">No orders yet</p>
  </div>
</template>
