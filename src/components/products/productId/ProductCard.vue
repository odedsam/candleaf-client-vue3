<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps<{
  id: number
  title: string
  image: string
  price: number
  imgSize?: null | string
}>()

const emit = defineEmits<{
  (e: 'update', id: number): void
}>()

const imgSizeClass = computed(() => (props.imgSize === 'large' ? 'w-64 h-64' : 'w-32 h-32'))
const normalizeTitle = (title: string, wordLimit: number = 4): string => {
  return title.split(' ').slice(0, wordLimit).join(' ') + (title.split(' ').length > wordLimit ? '' : '')
}

</script>

<template>
  <div
    @click="emit('update', props.id)"
    :data-product="props.id"
    class="flex flex-col justify-center items-center gap-3 p-4 bg-white shadow-lg rounded-xl"
  >
    <h3 class="text-cente text-lg font-semiboldr">{{ normalizeTitle(props.title) }}</h3>
    <div class="w-full h-full object-fit rounded-lg mb-4">
      <img :src="props.image" :alt="props.image" class="w-full h-30 object-fit" />
    </div>
    <h2 class="self-start text-[#56b280] text-3xl font-semibold">${{ props.price }}</h2>
  </div>
</template>
