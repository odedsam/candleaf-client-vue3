<script lang="ts" setup>
import {ref,computed} from 'vue'
import {useCartStore} from '@/stores/cartStore'
import {storeToRefs} from 'pinia'
import {useRouter} from 'vue-router'
import RightArrow from '@/assets/icons/right-arrow.svg'
import LeftArrow from '@/assets/icons/left-arrow.svg'
import CartItem from '@/components/shared/CartItem.vue'

const router = useRouter()
const cartStore = useCartStore()
const {cartItems, isCartOpen, subTotal} = storeToRefs(cartStore)
const {toggleCart} = cartStore
import { watch } from 'vue'

watch(isCartOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : 'auto'
})
// My-Design const modalWidth = ref('w-[60%]')
const modalWidth = ref('w-full sm:w-[80%] md:w-[60%] xl:w-[40%]')
const arrowIconIndicator = computed(() => (modalWidth.value === 'w-full' ? RightArrow : LeftArrow))
const toggleWidth = () =>modalWidth.value === 'w-[60%]' ? (modalWidth.value = 'w-full') : (modalWidth.value = 'w-[60%]')


const navigateTo = () => {
  toggleCart()
  router.push('/checkout/details')
}
const backToShopping = () => {
  toggleCart()
  router.push('/products')
}

</script>

<template>
  <Transition name="slide-cart">
    <!-- My Design : <div v-if="isCartOpen" :class="[modalWidth, 'p-10 fixed bottom-0 top-[80px] right-0 bg-white shadow-lg z-50']"> -->
      <div v-if="isCartOpen" :class="[modalWidth, 'fixed bottom-0 right-0 h-[87.9dvh] bg-white shadow-lg z-50 p-10 overflow-y-auto']">
      <div class="flex justify-between items-center">
        <img :src="arrowIconIndicator" alt="left-icon" class="w-4 h-4 cursor-pointer" @click="toggleWidth()" />
        <img src="/close-icon.svg" alt="close-icon" class="w-4 h-4 cursor-pointer" @click="toggleCart()" />
      </div>
      <h2 class="text-2xl text-center font-semibold">
        {{ cartItems.length > 0 ? 'Your cart items' : 'No items In Cart' }}
      </h2>
      <button class="w-full text-green-600 text-center mt-2" @click="backToShopping">Back to shopping</button>
      <div v-if="cartItems.length > 0">
        <div class="mt-6 border-t border-gray-300">
          <div class="grid grid-cols-5 py-4 font-semibold text-gray-600 text-center">
            <span class="text-left col-span-2">Product</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Total</span>
          </div>
          <CartItem v-for="item in cartStore.cartItems" :key="item.id" :item="item" />
          <div class="border-t border-gray-300 py-6 text-right">
            <p class="text-lg font-semibold">
              Sub-total:
              <span class="ml-4">$ {{ subTotal.toFixed(2) }}</span>
            </p>
            <p class="text-gray-500 mt-1">Tax and shipping cost will be calculated later</p>
            <button class="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg" @click="navigateTo">Check-out</button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>






<style scoped>
.slide-cart-enter-active,
.slide-cart-leave-active {
  transition: transform 0.3s ease-in-out;
}

.slide-cart-enter-from {
  transform: translateX(100%);
}

.slide-cart-leave-to {
  transform: translateX(100%);
}
</style>
