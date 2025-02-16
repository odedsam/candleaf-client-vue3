<script setup lang="ts">
defineProps<{
  btnIcon: any
  btnText: string
}>()

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void;
}>();


</script>

<template>
  <div @click="emit('click',$event)" class="flex items-center justify-center">
    <img :src="btnIcon" alt="icon" />
    <button>
      {{ btnText }}
    </button>
  </div>
</template>

<style scoped></style>
