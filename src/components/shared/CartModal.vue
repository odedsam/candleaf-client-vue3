<script setup lang="ts">
import { ref, computed } from 'vue';
import { useCartStore } from '@/stores/cartStore';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

const router = useRouter();
const cartStore = useCartStore();
const { cartItems, isCartOpen, subTotal } = storeToRefs(cartStore);

/* Store Actions */
const { toggleCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartStore;

const isFullscreen = ref(false);

const modalWidth = computed(() => (isFullscreen.value ? 'w-full' : 'w-[60%] md:w-[45%] lg:w-[50%]'));

const modalOpacity = computed(() => (isFullscreen.value ? 'bg-opacity-100' : 'bg-opacity-50'));

const toggleExpand = () => {
  isFullscreen.value = !isFullscreen.value;
};

const closeCart = (event: Event) => {
  if ((event.target as HTMLElement).id === 'cart-overlay') {
    toggleCart();
  }
};

const navigateTo = () => {
  toggleCart();
  router.push('/checkout/details');
};

const backToShopping = () => {
  toggleCart();
  router.push('/products');
};
</script>

<template>
  <!-- ✅ Full-screen overlay -->
  <Transition name="fade">
    <div
      v-if="isCartOpen"
      id="cart-overlay"
      class="fixed inset-0 bg-black z-40 flex justify-end transition-all"
      :class="modalOpacity"
      @click="closeCart"
    >
      <!-- ✅ Cart Modal (Expandable) -->
      <div
        :class="[modalWidth, 'bg-white shadow-lg h-full p-6 flex flex-col z-50 relative transition-all duration-300']"
      >
        <!-- ✅ Expand/Close Buttons -->
        <div class="flex justify-between items-center">
          <button
            class="text-gray-500 hover:text-gray-700"
            @click="toggleExpand"
          >
            {{ isFullscreen ? 'Minimize' : 'Full Screen' }}
          </button>
          <button
            class="text-gray-500 hover:text-gray-700"
            @click="toggleCart"
          >
            ✖
          </button>
        </div>

        <h2 class="text-2xl font-semibold text-center my-4">
          {{ cartItems.length > 0 ? 'Your cart items' : 'No items In Cart' }}
        </h2>
        <button class="text-green-600 text-center mb-4" @click="backToShopping">
          Back to shopping
        </button>

        <div v-if="cartItems.length > 0" class="flex-1 overflow-y-auto">
          <div v-for="item in cartItems" :key="item.id" class="border-b py-4 flex items-center">
            <img :src="item.image" alt="Product-Image" class="w-16 h-16 object-cover rounded-lg" />
            <div class="ml-4 flex-1">
              <p class="text-lg font-semibold">{{ item.title }}</p>
              <button class="text-red-500 text-sm mt-1" @click="removeFromCart(item.id)">
                Remove
              </button>
            </div>
            <div class="text-center">
              <p class="text-sm text-gray-500">${{ (item.price ?? 0).toFixed(2) }}</p>
              <div class="flex items-center justify-center border rounded w-24 mx-auto mt-2">
                <button @click="decreaseQuantity(item.id)" class="px-2 border-r">-</button>
                <span class="px-4">{{ item.quantity }}</span>
                <button @click="increaseQuantity(item.id)" class="px-2 border-l">+</button>
              </div>
            </div>
          </div>
        </div>

        <!-- ✅ Subtotal & Checkout -->
        <div v-if="cartItems.length > 0" class="mt-4 border-t pt-4">
          <p class="text-lg font-semibold text-right">
            Sub-total: <span class="ml-2">${{ subTotal.toFixed(2) }}</span>
          </p>
          <p class="text-gray-500 text-sm text-right">Tax and shipping cost will be calculated later</p>
          <button
            class="mt-4 w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-all"
            @click="navigateTo"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
/* ✅ Fade In/Out Animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>