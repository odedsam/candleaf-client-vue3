<script setup lang="ts">
import { onMounted } from 'vue';
import { useOrdersStore } from '@/stores/orderStore';

const ordersStore = useOrdersStore();

onMounted(() => {
  ordersStore.fetchOrders();
});
</script>

<template>
  <div class="orders-container">
    <h2>My Orders</h2>
    <ul v-if="ordersStore.orders.length">
      <li v-for="order in ordersStore.orders" :key="order.id">
        <span>Order #{{ order.id }} - ${{ order.total }}</span>
        <small>({{ order.date }})</small>
      </li>
    </ul>
    <p v-else>No orders found.</p>
  </div>
</template>

<style scoped>
.orders-container {
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
}
</style>
