<script lang="ts" setup>
import { ref, onMounted } from "vue"
import { useRoute } from "vue-router"

const route = useRoute()
const order = ref(null)
const errorMessage = ref<string | null>(null)

const fetchOrderDetails = async () => {
  try {
    const response = await fetch(`http://localhost:5001/api/v1/orders/${route.params.id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
      }
    })

    const data = await response.json()

    if (!response.ok) throw new Error(data.message || "Failed to fetch order details")

    order.value = data
  } catch (error) {
    errorMessage.value = (error as Error).message
  }
}

onMounted(fetchOrderDetails)
</script>

<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold">Order Details</h1>
    <p v-if="errorMessage" class="text-red-500">{{ errorMessage }}</p>
    <div v-if="order" class="p-4 border rounded-lg shadow">
      <p><strong>Order ID:</strong> {{ order.id }}</p>
      <p><strong>Total Price:</strong> ${{ order.total }}</p>
      <p><strong>Status:</strong> {{ order.status }}</p>
    </div>
  </div>
</template>
