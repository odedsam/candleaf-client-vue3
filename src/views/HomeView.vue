<script setup lang="ts">
import {ref, onMounted} from 'vue'
import {productCatalog} from '@/utils/constants'
import {useAuthStore} from '@/stores/authStore'
import {storeToRefs} from 'pinia'
import {useProductStore} from '@/stores/productStore'
import HomeHero from '@/components/sections/HomeHero.vue'
import FeaturesInfo from '@/components/sections/FeaturesInfo.vue'
import TestimonialsComp from '@/components/sections/TestimonialsComp.vue'
import PopularPr from '@/components/sections/PopularPr.vue'
import FetchStatus from '@/components/feedback/FetchStatus.vue'


const authStore = useAuthStore()
const productStore = useProductStore()
const {catalogProducts, popularProducts} = storeToRefs(productStore)


const isLoading = ref(true)
const error = ref<string | null>(null)
const data = ref<any | null>(null)


onMounted(async () => {
  // await authStore.fetchCurrentUser()
  try {

    await productStore.fetchProducts()
    setTimeout(() => {
      data.value = catalogProducts
      isLoading.value = false
    }, 600)
  } catch (err) {
    console.error(err)
    error.value = 'Failed to load products'
    isLoading.value = false
  }
})

</script>

<template>
  <main class="max-w-full animate-fade-id-view">
    <HomeHero />
    <FetchStatus :isLoading="isLoading" :error="error" :data="productCatalog">
      <FeaturesInfo />
      <TestimonialsComp />
      <PopularPr :popularProducts="popularProducts" />
    </FetchStatus>
  </main>
</template>
