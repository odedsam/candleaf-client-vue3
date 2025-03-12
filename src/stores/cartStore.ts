import {defineStore} from 'pinia'
import {ref, computed} from 'vue'

type CartItem = {
  id: number
  title: string
  image: string
  price: number
  quantity: number
}

export const useCartStore = defineStore('cart', () => {
  const cartItems = ref<CartItem[]>([])
  const isCartOpen = ref<boolean>(false)

  //  total items count for cart icon
  const cartAmount = computed(() => {
    return cartItems.value.reduce((total, item) => total + item.quantity, 0)
  })

  //  computed subtotal price
  const subTotal = computed(() => {
    return cartItems.value.reduce((total, item) => total + item.price * item.quantity, 0)
  })

  //  function to add an item to the cart or increase quantity
  const addToCart = (product: CartItem) => {
    const existingProduct = cartItems.value.find((item) => item.id === product.id)
    if (existingProduct) {
      existingProduct.quantity += 1
    } else {
      cartItems.value.push({...product, quantity: 1})
    }
  }

  // increase quantity of products synchronized with cart icon quantity
  const increaseQuantity = (productId: CartItem['id']) => {
    const index = cartItems.value.findIndex((item) => item.id === productId)
    if (index !== -1) {
      //  replace the entire object so Vue detects the change
      cartItems.value[index] = {
        ...cartItems.value[index],
        quantity: cartItems.value[index].quantity + 1,
      }
    }
  }

  const decreaseQuantity = (productId: CartItem['id']) => {
    const index = cartItems.value.findIndex((item) => item.id === productId)
    if (index !== -1 && cartItems.value[index].quantity > 1) {
      //  replace the entire object
      cartItems.value[index] = {
        ...cartItems.value[index],
        quantity: cartItems.value[index].quantity - 1,
      }
    } else {
      //  remove the item when quantity reaches 0
      cartItems.value.splice(index, 1)
    }
  }
  const removeFromCart = (productId: CartItem['id']) => {
    cartItems.value = cartItems.value.filter((item) => item.id !== productId)
  }
  const toggleCart = () => {
    isCartOpen.value = !isCartOpen.value
  }
  return {
    cartItems,
    cartAmount, // total items for cart icon
    subTotal, // subtotal price
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    isCartOpen,
    toggleCart,
    removeFromCart,
  }
})
