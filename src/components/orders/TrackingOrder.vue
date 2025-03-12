<script setup lang="ts">
import { ref } from 'vue';
import { useOrderTrackingStore } from '@/stores/orderTrackingStore';
import TrackingStatus from './TrackingStatus.vue';

const orderId = ref('');
const orderTrackingStore = useOrderTrackingStore();

const trackOrder = () => {
  if (!orderId.value) return;
  orderTrackingStore.fetchOrderStatus(orderId.value);
};

const { trackingData, loading, error } = orderTrackingStore;
</script>

<template>
    <div class="max-w-lg mx-auto bg-white p-6 rounded-lg shadow">
      <h1 class="text-2xl font-bold mb-4 text-center">Track Your Order</h1>
      
      <input
        v-model="orderId"
        type="text"
        placeholder="Enter Order ID"
        class="w-full p-3 border rounded-lg"
      />
      
      <button
        @click="trackOrder"
        :disabled="loading || !orderId"
        class="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
      >
        {{ loading ? 'Tracking...' : 'Track Order' }}
      </button>
  
      <div v-if="error" class="text-red-500 text-center mt-2">{{ error }}</div>
  
      <TrackingStatus v-if="trackingData" :order="trackingData" class="mt-4" />
    </div>
  </template>
  
