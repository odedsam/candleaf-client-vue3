import { ref } from "vue"

export function useWishlist() {
  const wishlist = ref([])

  //  fetch wishlist
  const fetchWishlist = async () => {
    const response = await fetch("http://localhost:5001/api/wishlist", {
      headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` }
    })
    if (response.ok) wishlist.value = await response.json()
  }

  //  add to wishlist
  const addToWishlist = async (productId: string) => {
    await fetch("http://localhost:5001/api/wishlist/add", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
      body: JSON.stringify({ productId })
    })
    fetchWishlist()
  }

  //  remove from wishlist
  const removeFromWishlist = async (productId: string) => {
    await fetch("http://localhost:5001/api/wishlist/remove", {
      method: "DELETE",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
      body: JSON.stringify({ productId })
    })
    fetchWishlist()
  }

  return { wishlist, fetchWishlist, addToWishlist, removeFromWishlist }
}