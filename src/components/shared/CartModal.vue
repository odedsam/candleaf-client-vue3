<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useCartStore } from '@/stores/cartStore'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import CartItem from '@/components/shared/CartItem.vue'
import TablerArrowLeft from '~icons/tabler/arrow-left'
import TablerArrowRight from '~icons/tabler/arrow-right'

const router = useRouter()
const cartStore = useCartStore()
const { cartItems, isCartOpen, subTotal } = storeToRefs(cartStore)

const isExpanded = ref(false)
const modalWidth = computed(() => (isExpanded.value ? 'w-full' : 'w-[60%]'))
const toggleExpand = () => (isExpanded.value = !isExpanded.value)
const iconComponent = computed(() => (isExpanded.value ? TablerArrowRight : TablerArrowLeft))

const navigateTo = () => {
  cartStore.toggleCart()
  router.push('/checkout/cart')
}

const backToShopping = () => {
  cartStore.toggleCart()
  router.push('/products')
}
</script>

<template>
  <Transition name="slide-cart">
    <div
      v-if="isCartOpen"
      :class="[modalWidth, 'fixed inset-0 bg-white/50 dark:bg-black/50 backdrop-blur-sm z-40 ml-auto overflow-y-auto']"
      @click.self="cartStore.toggleCart"
    >
      <div class="flex justify-between cursor-pointer items-center p-4">
        <component
          :is="iconComponent"
          @click.stop="toggleExpand"
          class="w-6 h-6 text-black dark:text-white cursor-pointer transition-transform duration-300"
        />
        <i-tabler-x class="w-6 h-6 text-black dark:text-white cursor-pointer" @click="cartStore.toggleCart" />
      </div>

      <h2 class="text-2xl text-center font-poppins font-semibold dark:text-white">
        {{ cartItems.length > 0 ? 'Your cart items' : 'No items In Cart' }}
      </h2>

      <button class="w-full text-green-600 text-center font-poppins cursor-pointer mt-2 underline" @click="backToShopping">Back to shopping</button>

      <div v-if="cartItems.length > 0" class="px-8">
        <div class="mt-6 border-t border-gray-300 dark:border-gray-600">
          <div class="grid grid-cols-5 py-4 gap-x-3 font-semibold text-gray-600 dark:text-gray-300 text-center">
            <span class="text-left col-span-2">Product</span>
            <span class="font-poppins font-medium">Price</span>
            <span class="font-poppins font-medium">Quantity</span>
            <span class="font-poppins font-medium">Total</span>
          </div>
          <CartItem v-for="item in cartItems" :key="item.id" :item="item" />
          <div class="border-t border-gray-300 dark:border-gray-600 py-6 text-right">
            <p class="text-lg font-poppins font-semibold dark:text-white">
              Sub-total:
              <span class="ml-4 font-poppins">$ {{ subTotal.toFixed(2) }}</span>
            </p>
            <p class="text-gray-500 mt-1 font-poppins dark:text-gray-400">Tax and shipping cost will be calculated later</p>
            <button class="mt-4 px-6 cursor-pointer font-poppins py-2 bg-green-600/70 hover:bg-green-700/70 text-white rounded-lg" @click="navigateTo">Check-out</button>
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
