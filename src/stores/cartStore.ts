import { defineStore } from "pinia"
import { ref, computed } from "vue"

/*
hybrid approach 
cross device syncing
*/

export const useCartStore = defineStore("cart", () => {
  const items = ref<{ productId: string; quantity: number }[]>([])

  // compute total items in cart
  const totalItems = computed(() => items.value.reduce((sum, item) => sum + item.quantity, 0))

  // load cart from backend (if user is logged in)
  const loadCart = async () => {
    const token = localStorage.getItem("accessToken")
    if (!token) return

    const response = await fetch("http://localhost:5001/api/cart", {
      headers: { Authorization: `Bearer ${token}` }
    })
    if (response.ok) {
      items.value = await response.json()
    }
  }

  // add to cart (local & backend sync)
  const addToCart = async (productId: string, quantity = 1) => {
    const existingItem = items.value.find(item => item.productId === productId)
    if (existingItem) {
      existingItem.quantity += quantity
    } else {
      items.value.push({ productId, quantity })
    }

    // sync with backend if user is logged in
    const token = localStorage.getItem("accessToken")
    if (token) {
      await fetch("http://localhost:5001/api/cart/add", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ productId, quantity })
      })
    } else {
      localStorage.setItem("cart", JSON.stringify(items.value)) // save to LocalStorage
    }
  }

  // remove from Cart (Local & Backend Sync)
  const removeFromCart = async (productId: string) => {
    items.value = items.value.filter(item => item.productId !== productId)

    // sync with Backend if user is logged in
    const token = localStorage.getItem("accessToken")
    if (token) {
      await fetch("http://localhost:5001/api/cart/remove", {
        method: "DELETE",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ productId })
      })
    } else {
      localStorage.setItem("cart", JSON.stringify(items.value)) // save to localstorage
    }
  }

  // move localstorage cart to backend after login
  const syncLocalCartToBackend = async () => {
    const token = localStorage.getItem("accessToken")
    if (!token) return

    const localCart = JSON.parse(localStorage.getItem("cart") || "[]")
    if (localCart.length) {
      await fetch("http://localhost:5001/api/cart/sync", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ items: localCart })
      })
      localStorage.removeItem("cart") // clear local cart after syncing
      loadCart()
    }
  }

  return { items, totalItems, loadCart, addToCart, removeFromCart, syncLocalCartToBackend }
})