import {defineStore} from 'pinia'
import { ref, computed} from 'vue'
import { showToast } from '@/utils'
import { useCustomStorage } from '@/composables/useCustomStorage';
import { ITEM_ADDED_TO_CART, ITEM_REMOVED_FROM_CART } from '@/utils/feedBack';

type CartItem = {
  id: number
  title: string
  image: string
  price: number
  quantity: number
}


export const useCartStore = defineStore('cart', () => {
  const isCartOpen = ref<boolean>(false)
  const cartItems = useCustomStorage<CartItem[]>('cart-items', [],localStorage, { mergeDefaults:true})
  const cartAmount = computed(() => {return cartItems.value.reduce((total, item) => total + item.quantity, 0)})
  const subTotal = computed(() => {return cartItems.value.reduce((total, item) => total + item.price * item.quantity, 0)})



  const addToCart = (product: CartItem) => {
    const existingProduct = cartItems.value.find((item) => item.id === product.id)
    if (existingProduct) {
      existingProduct.quantity += 1
    } else {
      cartItems.value.push({...product, quantity: 1})
    }

    showToast(ITEM_ADDED_TO_CART)
  }

  const increaseQuantity = (productId: CartItem['id']) => {
    const index = cartItems.value.findIndex((item) => item.id === productId)
    if (index !== -1) {
      cartItems.value[index] = {
        ...cartItems.value[index],
        quantity: cartItems.value[index].quantity + 1,
      }
    }
  }

  const decreaseQuantity = (productId: CartItem['id']) => {
    const index = cartItems.value.findIndex((item) => item.id === productId)
    if (index !== -1 && cartItems.value[index].quantity > 1) {
      cartItems.value[index] = {
        ...cartItems.value[index],
        quantity: cartItems.value[index].quantity - 1,
      }
    } else {
      cartItems.value.splice(index, 1)
    }
  }
  const removeFromCart = (productId: CartItem['id']) => {
    cartItems.value = cartItems.value.filter((item) => item.id !== productId)
    showToast(ITEM_REMOVED_FROM_CART)
  }
  const cleanAllCart = ()=> { cartItems.value = [] }
  const toggleCart = () => { isCartOpen.value = !isCartOpen.value }


  return {
    cartItems,
    cartAmount,
    subTotal,
    isCartOpen,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    toggleCart,
    removeFromCart,
    cleanAllCart,
  }
})
