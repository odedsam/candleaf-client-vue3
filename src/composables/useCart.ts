import { ref } from "vue"

export function useCart() {
  const cart = ref([])

  //  fetch user cart
  const fetchCart = async () => {
    const response = await fetch("http://localhost:5001/api/cart", {
      headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` }
    })
    if (response.ok) cart.value = await response.json()
  }

  //  add to cart
  const addToCart = async (productId: string, quantity: number = 1) => {
    await fetch("http://localhost:5001/api/cart/add", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
      body: JSON.stringify({ productId, quantity })
    })
    fetchCart() // refresh cart after adding
  }

  //  remove from Cart
  const removeFromCart = async (productId: string) => {
    await fetch("http://localhost:5001/api/cart/remove", {
      method: "DELETE",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
      body: JSON.stringify({ productId })
    })
    fetchCart() // refresh cart after removing
  }

  return { cart, fetchCart, addToCart, removeFromCart }
}