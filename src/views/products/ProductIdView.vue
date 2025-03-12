<script lang="ts" setup>
import { computed, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import DetailsSection from '@/components/products/productId/DetailsSection.vue';
import LoadingSpinner from '@/components/shared/LoadingSpinner.vue';
import { ingredients, descriptionSection } from '@/constants';
import { useProductStore } from '@/stores/productStore';
import { storeToRefs } from 'pinia';

const route = useRoute();
const router = useRouter();
const productStore = useProductStore();
const { products, selectedProduct, isLoading } = storeToRefs(productStore);

const productId = computed(() => Number(route.params.id));

//  Function to find and set selected product
const setProduct = () => {
  const product = products.value.find((p) => p.id === productId.value);
  if (product) {
    selectedProduct.value = product;
  } else {
    console.error("⚠️ Product Not Found:", productId.value);
  }
};

onMounted(async () => {
  isLoading.value = true;
  if (products.value.length === 0) {
    await productStore.fetchProducts();
  }
  setProduct();
  isLoading.value = false;
});

//  Watch for route changes (e.g., navigating to a different product)
watch(() => route.params.id, () => {
  setProduct();
});
</script>
<template>
  <main
    v-if="selectedProduct"
    class="grid grid-flow-row h-full w-full max-sm:py-12 items-center"
  >
    <DetailsSection
      :selectedProduct="selectedProduct"
      :ingredients="ingredients"
      :description="descriptionSection"
    />
  </main>
  <div v-else>
    <LoadingSpinner />
  </div>
</template>
