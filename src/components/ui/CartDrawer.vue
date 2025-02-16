<!-- <script setup lang="ts">
import { computed } from 'vue'
import { useCartStore } from '@/stores/cartStore'
import { useUIStore } from '@/stores/uiStore'

const cartStore = useCartStore()
const uiStore = useUIStore()

const isOpen = computed(() => uiStore.isSidebarOpen)

function toggleCart() {
  uiStore.toggleSidebar()
}

function removeItem(id: string | number) {
  cartStore.removeFromCart(id)
}
</script>

<template>
  <div class="cart-overlay" :class="{ open: isOpen }" @click.self="toggleCart">
    <aside class="cart-drawer" :class="{ open: isOpen }">
      <header>
        <h2>Shopping Cart</h2>
        <button class="close-btn" @click="toggleCart">✕</button>
      </header>

      <ul v-if="cartStore.cartItems.length">
        <li v-for="item in cartStore.cartItems" :key="item.id">
          <span>{{ item.name }} - ${{ item.price }} ({{ item.quantity }})</span>
          <button @click="removeItem(item.id)">Remove</button>
        </li>
      </ul>
      <p v-else>Your cart is empty.</p>

      <footer>
        <strong>Total: ${{ cartStore.totalPrice }}</strong>
        <button class="checkout-btn">Checkout</button>
      </footer>
    </aside>
  </div>
</template>

<style scoped>
/* Overlay */
.cart-overlay {
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transition:
    opacity 0.3s ease-in-out,
    visibility 0.3s ease-in-out;
  z-index: 1000;
}

.cart-overlay.open {
  opacity: 1;
  visibility: visible;
}

/* Drawer */
.cart-drawer {
  position: fixed;
  top: 0;
  right: -350px;
  width: 300px;
  height: 100vh;
  background: white;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  display: flex;
  flex-direction: column;
  transition: right 0.3s ease-in-out;
}

.cart-drawer.open {
  right: 0;
}

/* Header */
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.close-btn {
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

/* List */
ul {
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}

button {
  background: red;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

/* Footer */
footer {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
}

.checkout-btn {
  background: green;
  padding: 10px 15px;
  font-size: 1rem;
}
</style> -->

<script lang="ts" setup>
import CartModal from '../shared/CartModal.vue';
</script>
<template>
 <CartModal />
</template>

<style lang="css" scoped>
</style>