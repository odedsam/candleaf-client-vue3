<script lang="ts" setup>
defineProps<{
  title?: string
  description?: string
  icon?: string
  actionText?: string
  onAction?: () => void
}>()
</script>

<template>
  <div class="flex flex-col items-center justify-center text-center p-6 text-gray-500">
    <component
      v-if="icon"
      :is="`i-tabler-${icon}`"
      class="w-12 h-12 mb-4 text-gray-400"
    />
    <h2 class="text-lg font-semibold">{{ title ?? 'No Data' }}</h2>
    <p class="text-sm mb-4">{{ description ?? 'Empty State' }}</p>
    <button
      v-if="onAction && actionText"
      @click="onAction"
      class="text-sm text-blue-600 hover:underline"
    >
      {{ actionText }}
    </button>
  </div>
</template>
