import { defineStore } from 'pinia'
import { Item, type Cart } from '@/types'
import { ref } from 'vue'
import { useProductStore } from './productStore'
import { storeToRefs } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const productStore = useProductStore()
  const { products } = storeToRefs(productStore)

  const cart = ref<Cart[]>([])
  const quantity = ref<Cart['quantity']>(1)
  const price = ref<Item['price']>(0)
  const cartTotals = ref<number>(0)


  const addToCart = (productId: Item['id']) => {
    const matchedProduct = products.value.find((item) => item.id === productId)
    if (!matchedProduct) {
      return  console.log('Product Not Found Bro!')

    }

    price.value += matchedProduct.price
    cart.value.push({ ...matchedProduct, quantity: (quantity.value += 1) })

    const itemInCart = cart.value.find((p: any) => p.id === productId)
    if (itemInCart) {
      itemInCart.quantity += 1
    }
  }

  const removeFromCart = (productId: Item) => {
    const productToRemove = cart.value.filter((item: Item) => item.id === productId.id)
    const preserveOriginalPrice = productId.price

    console.log('productToRemove : ', productToRemove)

    price.value = Math.max(preserveOriginalPrice, price.value - productId.price)

    cart.value = cart.value.filter((item) => item.id !== productId.id)
    if (quantity.value > 1) {
      if (quantity.value === 1) return
      quantity.value -= 1
    }
  }

  return { cart, price, quantity, addToCart, removeFromCart }
})
