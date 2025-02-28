<script lang="ts" setup>
import { ref, nextTick,onMounted } from "vue";
import { useProductStore } from "@/stores/productStore";
import { useCartStore } from "@/stores/cartStore";
import { storeToRefs } from "pinia";
import MainButton from "@/components/shared/MainButton.vue";
import  { useRouter } from "vue-router";

const router = useRouter()
const cartStore = useCartStore()
const store = useProductStore();
const { mergedProducts } = storeToRefs(store);

onMounted(() => {
  if (store.products.length === 0) {
    store.fetchProducts()
  }
})

const navToId = (product:any) =>{
  router.push({
    name:'product-id-view',
    params:{id:product.id.toString()}
  })
}


const normalizeTitle = (title: string) => {
  return title.split(" ").slice(0, 4).join(" ");
};

const cartItems = ref<any[]>([]);

const addToCart = async (event: MouseEvent, product: any) => {
  console.log("product has added product.title : ", product.title);

  cartStore.addToCart(product)


  // find the product image 
  const productImg = (event.currentTarget as HTMLElement).closest("div")?.querySelector("img");

  if (!productImg) return;

  // creation of copy of the image 
  const clonedImg = productImg.cloneNode(true) as HTMLElement;
  clonedImg.style.position = "fixed";
  clonedImg.style.zIndex = "1000";
  clonedImg.style.width = "80px";
  clonedImg.style.height = "80px";
  clonedImg.style.borderRadius = "50%";
  clonedImg.style.transition = "transform 1.5s cubic-bezier(0.42, 0, 0.58, 1), opacity 1.2s ease-in-out";
  clonedImg.style.opacity = "1";
  clonedImg.style.pointerEvents = "none"; 

  document.body.appendChild(clonedImg);

   // start location 
  const rect = productImg.getBoundingClientRect();
  clonedImg.style.left = `${rect.left}px`;
  clonedImg.style.top = `${rect.top}px`;

  await nextTick();

  // destination place to --> (cart-icon-header)
  const cartX = window.innerWidth - 80;
  const cartY = 50;

  clonedImg.style.transform = `translate(${cartX - rect.left}px, ${cartY - rect.top}px) scale(0.5)`;
  clonedImg.style.opacity = "0.7";

  setTimeout(() => {
    clonedImg.style.transform = `translate(${cartX - rect.left}px, ${cartY - rect.top}px) scale(0)`;
    clonedImg.style.opacity = "0";
  }, 1000);

  setTimeout(() => {
    document.body.removeChild(clonedImg);
    cartItems.value.push(product); // adding to cart after
  }, 1500);
};
</script>

<template>
  <div class="p-6">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="product in mergedProducts"
        :key="product.id"
        class="p-4 bg-white shadow-lg rounded-xl relative"
        @click="navToId(product)"
      >
        <img
          :src="product.image"
          alt="Product"
          class="w-full h-80 object-contain rounded-lg mb-4"
        />
        <h2 class="text-lg font-semibold">{{ normalizeTitle(product.title) }}</h2>
        <p class="text-gray-600 py-3">${{ product.price }}</p>

        <MainButton
          label="Add To Cart"
          :grow="false"
          :disabled="false"
          @click="(event) => addToCart(event, product)"
        />
      </div>
    </div>
  </div>
</template>
