<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { API } from "@/utils"

type Order = {
  id: string
  date: string
  total: number
}

const orders = ref<Order[]>([])
const router = useRouter()
// const END_POINT = `${API}/api/v1/user/${id.value}`
// console.log(END_POINT);
// `${API}/api/v1/user/${id.value}`

const fetchOrders = async () => {
  // Simulated API call (replace with real API logic)
  const response = await new Promise<Order[]>(resolve =>
    setTimeout(() => {
      resolve([
        { id: 'A123', date: '2025-04-10', total: 150 },
        { id: 'B456', date: '2025-04-15', total: 320 }
      ])
    }, 500)
  )
  orders.value = response
}

const goToShop = () => {
  router.push('/shop')
}

onMounted(fetchOrders)
</script>


<template>
  <div class="max-w-4xl h-screen mx-auto p-6">
    <h1 class="text-3xl font-semibold mb-6">My Account</h1>

    <div v-if="orders.length > 0">
      <h2 class="text-xl font-medium mb-4">Order History</h2>
      <ul class="space-y-4">
        <li
          v-for="order in orders"
          :key="order.id"
          class="border rounded-lg p-4 shadow-sm bg-white"
        >
          <div class="text-gray-700">Order ID: <span class="font-semibold">{{ order.id }}</span></div>
          <div class="text-gray-600">Date: {{ order.date }}</div>
          <div class="text-gray-800">Total: ₪{{ order.total }}</div>
        </li>
      </ul>
    </div>

    <div v-else class="text-center mt-12">
      <h2 class="text-xl font-medium mb-2">No Orders Yet</h2>
      <p class="text-gray-500 mb-4">You haven't placed any orders. Start shopping now!</p>
      <button
        @click="goToShop"
        class="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Go to Shop
      </button>
    </div>
  </div>
</template>

