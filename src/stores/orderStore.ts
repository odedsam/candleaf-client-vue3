import { defineStore } from 'pinia'
import { ref } from 'vue'
import { type Order } from '@/types'

export const useOrdersStore = defineStore('orders', () => {
  const orders = ref<Order[]>([])
  const loading = ref<null | boolean>(null)
  const error = ref<null | boolean>(null)

  const fetchOrders = async () => {
    loading.value = true
    try {
      const res = await fetch('/api/orders')
      if (!res.ok) throw new Error('fail to fetch orders')
      orders.value = await res.json()
      loading.value = false
    } catch (err: any) {
      error.value = err
      console.log(`err resolving orders err.message : ${err.message}`)
    } finally {
      loading.value = false
    }
  }

  return { loading, error, orders, fetchOrders }
})

