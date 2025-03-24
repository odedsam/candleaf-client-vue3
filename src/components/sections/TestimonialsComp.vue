<script lang="ts" setup>
import PeopleReview from '../sections/PeopleReview.vue'
</script>

<template>
    <div class="bg-lgt-gr py-24">
      <h3 class="font-poppins font-medium text-4xl text-center">Testimonials</h3>
      <p class="font-poppins font-medium text-lg text-center pt-2 pb-4 text-mgr">Some quotes from our happy customers</p>
      <div class="w-full overflow-x-auto py-4">
        <div class="grid grid-flow-col auto-cols-max gap-4">
          <PeopleReview v-for="n in 5" :key="n" />
        </div>
      </div>
    </div>
</template>

<style lang="css" scoped>

</style>
