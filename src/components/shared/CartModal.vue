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
const modalWidth = computed(() => (isExpanded.value ? 'w-full' : 'sm:w-full w-[60%]'))


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
  <Transition
    enter-active-class="transition-transform duration-300 ease-in-out"
    enter-from-class="translate-x-full"
    leave-active-class="transition-transform duration-300 ease-in-out"
    leave-to-class="translate-x-full">

    <div
      v-if="isCartOpen"
      :class="[modalWidth, 'fixed inset-0 max-md:w-full bg-white/50 dark:bg-black/50 backdrop-blur-sm z-40 ml-auto overflow-y-auto']"
      @click.self="cartStore.toggleCart">

      <div class="flex flex-start cursor-pointer items-center p-4">
        <i-tabler-x class="w-4 h-4 md:w-6 md:h-6 text-black dark:text-white cursor-pointer" @click="cartStore.toggleCart" />
        </div>

      <h2 class="text-xl md:text-2xl text-center font-poppins font-semibold dark:text-white">
        {{ cartItems.length > 0 ? 'Your Cart items' : 'No Items In Cart' }}
      </h2>

      <button class="w-full cursor-pointer text-green-600 text-center font-poppins mt-2 hover:underline" @click="backToShopping">Back to Shopping</button>

      <div v-if="cartItems.length > 0" class="px-2 md:px-8">
        <div class="mt-6">
          <CartItem v-for="item in cartItems" :key="item.id" :item="item" />
          <footer class=" py-6 text-right">
            <p class="text-lg font-poppins font-semibold dark:text-white">
              Sub-total:<span class="ml-4 font-poppins">$ {{ subTotal.toFixed(2) }}</span>
            </p>
            <p class="text-gray-500 mt-1 font-poppins text-sm md:text-base dark:text-gray-400">Tax and shipping cost will be calculated later</p>
            <button class="mt-4 px-6 cursor-pointer font-poppins py-2 bg-green-600/70 hover:bg-green-700/70 text-white rounded-lg" @click="navigateTo">Check-out</button>
          </footer>
        </div>
      </div>


    </div>
  </Transition>
</template>

