<script lang="ts" setup>
import PeopleReview from '../sections/PeopleReview.vue'
</script>

<template>
    <div class="bg-[#c6f0d9] py-24">
      <h3 class="text-center text-3xl">Testimonials</h3>
      <p class="text-center">Some quotes from our happy customers</p>
      <div class="w-full overflow-x-auto py-4">
        <div class="grid grid-flow-col auto-cols-max gap-4">
          <PeopleReview v-for="n in 5" :key="n" />
        </div>
      </div>
    </div>
</template>

<style lang="css" scoped>

</style>
