<script setup lang="ts">
import { ref, onMounted } from 'vue'
import HomeHero from '@/components/ui/HomeHero.vue'
import FeaturesProduct from '@/components/ui/FeaturesProduct.vue'
import TestimonialsComp from '@/components/ui/TestimonialsComp.vue'
import PopularPr from '@/components/ui/PopularPr.vue'
import FetchStatus from '@/components/ui/FetchStatus.vue'
import { productCatalog } from '@/constants'

const isLoading = ref(true)
const error = ref<string | null>(null)
const data = ref<any | null>(null)

onMounted(() => {
  try {
    setTimeout(() => {
      data.value = productCatalog
      isLoading.value = false
    }, 600) 
  } catch (err) {
    error.value = 'Failed to load products'
    isLoading.value = false
  }
})
</script>

<template>
  <main>
    <HomeHero />
    <FetchStatus :isLoading="isLoading" :error="error" :data="productCatalog">
      <FeaturesProduct />
      <TestimonialsComp />
      <PopularPr />
    </FetchStatus>
  </main>
</template>
