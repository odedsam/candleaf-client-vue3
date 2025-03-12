<script setup lang="ts">
import {ref, onMounted} from 'vue'
import HomeHero from '@/components/ui/HomeHero.vue'
import FeaturesInfo from '@/components/ui/FeaturesInfo.vue'
import TestimonialsComp from '@/components/ui/TestimonialsComp.vue'
import PopularPr from '@/components/ui/PopularPr.vue'
import FetchStatus from '@/components/ui/FetchStatus.vue'
import {productCatalog} from '@/constants'
import {useAuthStore} from '@/stores/authStore'
import {storeToRefs} from 'pinia'
import {useProductStore} from '@/stores/productStore'

/* Error Fetching Products Handling  */
const isLoading = ref(true)
const error = ref<string | null>(null)
const data = ref<any | null>(null)

/*  AuthStore */
const authStore = useAuthStore()
const {user, isAuthenticated} = storeToRefs(authStore)

/*  Product Store */
const productStore = useProductStore()
const {catalogProducts, popularProducts} = storeToRefs(productStore)

console.log('authStore.user : ', user.value)
console.log('authStore.isAuthenticated : ', isAuthenticated.value)

onMounted(async () => {
  try {
    await productStore.fetchProducts()
    setTimeout(() => {
      data.value = catalogProducts
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
      <FeaturesInfo />
      <TestimonialsComp />
      <PopularPr :popularProducts="popularProducts" />
    </FetchStatus>
  </main>
</template>
