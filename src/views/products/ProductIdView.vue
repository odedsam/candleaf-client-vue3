<script lang="ts" setup>
import { computed, nextTick, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { ingredients, descriptionSection } from '@/utils/constants';
import { useProductStore } from '@/stores/productStore';
import { storeToRefs } from 'pinia';
import DetailsSection from '@/components/features/products/DetailsSection.vue';

const route = useRoute();
const router = useRouter();
const productStore = useProductStore();
const { products, selectedProduct, isLoading } = storeToRefs(productStore);

const productId = computed(() => Number(route.params.id));

const setProduct = () => {
  const product = products.value.find((p) => p.id === productId.value);
  if (product) {
    selectedProduct.value = product;
  } else {
    console.error(' Product Not Found:', productId.value);
  }
};

onMounted(async () => {
  if (window.innerWidth >= 768) return;
  await nextTick();
  document.querySelector('#product-content')?.scrollIntoView({ behavior: 'auto', block: 'start' });
});

onMounted(async () => {
  isLoading.value = true;
  if (products.value.length === 0) {
    await productStore.fetchProducts();
  }
  setProduct();
  isLoading.value = false;
});

watch(
  () => route.params.id,
  () => {
    setProduct();
  },
);
</script>
<template>
  <main
    v-if="selectedProduct"
    id="product-content"
    class="grid grid-flow-row h-full w-full items-center transition-all duration-500 ease-in-out opacity-0 translate-y-4 animate-fade-id-view">
    <DetailsSection :selectedProduct="selectedProduct" :ingredients="ingredients" :description="descriptionSection" />
  </main>
</template>
