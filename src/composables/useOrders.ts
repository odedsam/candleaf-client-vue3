import { ref } from "vue"

export function useOrders() {
  const orders = ref([])
  const orderDetails = ref(null)

  // fetch user orders
  const fetchOrders = async () => {
    const response = await fetch("http://localhost:5001/api/orders", {
      headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` }
    })
    if (response.ok) orders.value = await response.json()
  }

  // fetch single order details
  const fetchOrderDetails = async (orderId: string) => {
    const response = await fetch(`http://localhost:5001/api/orders/${orderId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` }
    })
    if (response.ok) orderDetails.value = await response.json()
  }

  return { orders, orderDetails, fetchOrders, fetchOrderDetails }
}