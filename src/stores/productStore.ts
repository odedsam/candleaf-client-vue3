import {defineStore} from 'pinia'
import {ref, computed} from 'vue'
import {productCatalog} from '@/constants'

type Item = {
  id: number
  title: string
  image: string
  price: number
  quantity: number
  basePrice: number
}

export const useProductStore = defineStore('ProductStore', () => {
  const localProducts = ref(productCatalog)
  const products = ref<Item[]>([])
  const isLoading = ref<boolean | null>(false)
  const error = ref<boolean | null>(null)
  const selectedProduct = ref<Item | null>(null)

  async function fetchProducts() {
    isLoading.value = true
    try {
      const res = await fetch('https://fakestoreapi.com/products')
      if (!res.ok) throw new Error('Failed fetching products')
      products.value = await res.json()

      error.value = false
    } catch (err: any) {
      error.value = err.message
      console.error('Fetching error:', err.message)
    } finally {
      isLoading.value = false
    }
  }
  const mergedProducts = computed(() => [
    ...localProducts.value,
    ...products.value,
  ])

  const getItemById = (id: number) => {
    return products.value.find((item) => item.id === id) || null
  }

  const setSelectedProduct = (product: Item) => {
    selectedProduct.value = {
      ...product,
      quantity: product.quantity || 1,
      basePrice: product.basePrice ?? product.price,
      price: product.price,
    }
  }

  const addQuantity = () => {
    if (selectedProduct.value) {
      selectedProduct.value.quantity += 1
      selectedProduct.value.price =
        selectedProduct.value.basePrice * selectedProduct.value.quantity
    }
  }

  const removeQuantity = () => {
    if (selectedProduct.value && selectedProduct.value.quantity > 1) {
      selectedProduct.value.quantity -= 1
      selectedProduct.value.price =
        selectedProduct.value.basePrice * selectedProduct.value.quantity
    }
  }

  return {
    fetchProducts,
    localProducts,
    products,
    mergedProducts,
    isLoading,
    error,
    selectedProduct,
    getItemById,
    setSelectedProduct,
    addQuantity,
    removeQuantity,
  }
})

// const removeFromCart = (productItem: Item) => {
//     if (!cart.value) return
//     const index = cart.value.findIndex((item) => item.id === productItem.id)
//     if (index === -1) return
//     cart.value.splice(index, 1)
//     price.value = Math.max(0, (price.value || 0) - productItem.price)
//     price.value -= productItem.price
//     quantity.value -= 1
//   }

//   const addToCart = (productItem: Item) => {
//     if (!cart.value) cart.value = []
//     const findProduct = products.value.find((product) => product.id === productItem.id)
//     if (!findProduct) return
//     cart.value.push({ ...findProduct, quantity: 1 })
//     price.value += findProduct.price
//     quantity.value += 1
//   }
