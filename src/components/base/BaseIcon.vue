<script lang="ts" setup>
defineProps<{
  name: string
  size?: string
  color?: string
  extraClass?: string
}>()
</script>

<template>
  <component
    :is="`i-${name}`"
    :class="[
      size ?? 'w-5 h-5',
      color ?? 'text-gray-600',
      extraClass
    ]"
  />
</template>