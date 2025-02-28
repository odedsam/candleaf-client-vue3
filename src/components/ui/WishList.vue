<script setup lang="ts">
import { useWishlistStore } from '@/stores/wishListStore';


const wishlistStore = useWishlistStore();

function removeItem(id: string | number) {
  wishlistStore.removeFromWishlist(id);
}
</script>

<template>
  <div class="wishlist-container">
    <h2>Wishlist</h2>
    <ul v-if="wishlistStore.wishlist.length">
      <li v-for="item in wishlistStore.wishlist" :key="item.id">
        <span>{{ item.name }} - ${{ item.price }}</span>
        <button @click="removeItem(item.id)">Remove</button>
      </li>
    </ul>
    <p v-else>Your wishlist is empty.</p>
  </div>
</template>

<style scoped>
.wishlist-container {
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
}
button {
  margin-left: 10px;
  background: red;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}
</style>
