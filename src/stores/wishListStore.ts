import { defineStore } from 'pinia'
import { ref } from 'vue'
import { type WishlistItem } from '@/types'

export const useWishlistStore = defineStore('wishlist', () => {
  const wishlist = ref<WishlistItem[]>([])

  const addToWishlist = (product: WishlistItem) => {
    if (!wishlist.value.some((item) => item.id === product.id)) {
      wishlist.value.push(product)
    }
  }
  const removeFromWishlist = (productId: string | number) => {
    return (wishlist.value = wishlist.value.filter((item) => item.id !== productId))
  }

  return { wishlist, addToWishlist, removeFromWishlist }
})
