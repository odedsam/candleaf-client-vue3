<script lang="ts" setup>
import {ref, onMounted} from 'vue'

const orders = ref([])
const errorMessage = ref<string | null>(null)

const fetchOrders = async () => {
  try {
    const response = await fetch('http://localhost:5001/api/v1/orders', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })

    const data = await response.json()

    if (!response.ok) throw new Error(data.message || 'Failed to fetch orders')

    orders.value = data
  } catch (error) {
    errorMessage.value = (error as Error).message
  }
}

onMounted(fetchOrders)
</script>

<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold">Your Orders</h1>
    <p v-if="errorMessage" class="text-red-500">{{ errorMessage }}</p>
    <ul v-if="orders.length" class="space-y-4">
      <li
        v-for="order in orders"
        :key="order.id"
        class="p-4 border rounded-lg shadow"
      >
        <p>
          <strong>Order ID:</strong>
          {{ order.id }}
        </p>
        <p>
          <strong>Total Price:</strong>
          ${{ order.total }}
        </p>
        <p>
          <strong>Status:</strong>
          {{ order.status }}
        </p>
      </li>
    </ul>
    <p v-else>No orders found.</p>
  </div>
</template>
