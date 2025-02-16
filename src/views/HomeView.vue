<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useProductStore } from '@/stores/productStore'
import LoadingSpinner from '@/components/shared/LoadingSpinner.vue'
import ProductCard from '@/components/products/productId/ProductCard.vue'
import ErrorResponse from '@/components/shared/ErrorResponse.vue'
import HomeHero from '@/components/ui/HomeHero.vue'
import { storeToRefs } from 'pinia'
import FeaturesProduct from '@/components/ui/FeaturesProduct.vue'
import CatalogGrid from '@/components/ui/CatalogGrid.vue'
import TestimonialsComp from '@/components/ui/TestimonialsComp.vue'
import ProductPr from '@/components/ui/PopularPr.vue'
import { onMounted } from 'vue'
import PopularPr from '@/components/ui/PopularPr.vue'

const router = useRouter()
const store = useProductStore()
const { fetchProducts } = store
const { products, isLoading, error } = storeToRefs(store)
onMounted(() => {
  fetchProducts()
})

const navigateToProductId = (product: any) => {
  const matchId = products.value.find((pr: any) => pr.id === product.id)
  if (matchId) {
    store.setSelectedProduct(matchId)
    sessionStorage.setItem('productId', JSON.stringify(matchId))
    router.push({
      name: `product-id-view`,
      params: { id: matchId.id.toString() },
    })
  }
}
</script>

<template>
  <div>
    <header>
      <div class="p-4 mx-auto my-8" v-if="isLoading">
        <LoadingSpinner />
      </div>
      <div v-if="error">
        <ErrorResponse :errorMessage="error" />
      </div>
    </header>

    <main>
      <div>
        <div><HomeHero /></div>
        <div><CatalogGrid /></div>
        <div><FeaturesProduct /></div>
        <div><TestimonialsComp /></div>
        <div><PopularPr /></div>
      </div>
      <div class="w-[80%] grid grid-cols-2 gap-4 grid-rows-2 mx-auto lg:grid-cols-3 xl:grid-cols-4">
        <ProductCard
          v-for="prd in products"
          :id="prd.id"
          :key="prd.id"
          :title="prd.title"
          :price="prd.price"
          :image="prd.image"
          @update="navigateToProductId(prd)"
        />
      </div>
    </main>
  </div>
</template>

<style lang="css" scoped>
.testimonials {
  background-color: rgba(86, 178, 128, 0.2);
  text-align: center;
  padding: 4rem 0;
  margin: 0 auto;
  overflow-x: auto;
}
.testimonials-head {
  text-align: center;
  font-family: var(--font-header);
  font-weight: var(--wght-medium);
  padding: 0.5rem 0;
}
.testimonails-para {
  text-align: center;
  padding: 0.5rem 0 2rem;
  font-family: var(--font-header);
  font-weight: var(--wght-regular);
}

.reviews-of {
  display: flex;
  gap: 40px;
  width: 100%;
  overflow-x: auto;
  margin: 0;
}
.reviews-of > * {
  flex-shrink: 0;
}
</style>
