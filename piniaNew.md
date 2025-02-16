```ts
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

//setup stores compistion api
// the ref version and working latest approach best practice

export const useCartStore = defineStore('cartStore', () => {
  const count = ref(0)
  const totalQuantity = computed(() => count.value)
  const incrementQuantity = () => count.value++
  const decrementQuantity = () => count.value !== 0 && count.value--

  return { totalQuantity, incrementQuantity, decrementQuantity }
})
```
