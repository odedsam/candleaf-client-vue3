<script lang="ts" setup>
import fragrantSoy from "@/assets/catalog/fragrantSoy.svg"
type Features= {
    id: number;
    title: string;
    description: string;
}


const features:Features[] = [
  { id: 1, title: "Eco-sustainable", description: "All recyclable materials, 0% CO2 emissions" },
  { id: 2, title: "Hypoallergenic", description: "100% natural, human-friendly ingredients" },
  { id: 3, title: "Handmade", description: "All candles are craftly made with love." },
  { id: 4, title: "Long burning", description: "No more waste. Created for last long." }
];

</script>

<template>
  <section class="flex flex-col lg:flex-row items-center justify-between bg-gray-100 p-12 rounded-lg">
    <!-- text content -->
    <div class="lg:w-1/2 space-y-4">
      <h2 class="text-4xl font-bold text-gray-900">Clean and <br> fragrant soy wax</h2>
      <p class="text-green-600 text-lg">Made for your home and for your wellness</p>

      <ul class="space-y-3">
        <li v-for="feature in features" :key="feature.id" class="flex items-start space-x-2">
          <span class="text-gray-700">✔</span>
          <p><strong>{{ feature.title }}:</strong> {{ feature.description }}</p>
        </li>
      </ul>

      <button class="mt-6 px-6 py-3 bg-[#56B280] text-white font-semibold rounded-lg shadow-md hover:bg-[#88edb6] transition">
        Learn more
      </button>
    </div>

    <!-- image content -->
    <div class="lg:w-1/2 mt-6 lg:mt-0 flex justify-center">
      <img :src="fragrantSoy" alt="Candles" class="max-w-md w-full">
    </div>
  </section>
</template>

<style scoped></style>
