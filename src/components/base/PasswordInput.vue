<script setup lang="ts">
import { computed, ref } from 'vue'
import TablerEye from '~icons/tabler/eye';
import TablerEyeClosed from '~icons/tabler/eye-closed';

const props = defineProps<{
  id?:string;
  modelValue: string
  placeholder?: string
  isError?:string | null | string[];
  autocomplete?:string;
}>()

const uniqueId = computed(() => props.id || `password-input-${crypto.randomUUID()}`);
const isVisible = ref(false)

const emit = defineEmits<{(e: 'update:modelValue', value: string): void}>()
const toggleVisibility = () => {isVisible.value = !isVisible.value}

</script>




<template>
  <div class="w-full">
    <div class="relative">
      <label :for="uniqueId" class="hidden" />
      <input
        v-bind="$attrs"
        :id="uniqueId"
        :type="isVisible ? 'text' : 'password'"
        :value="modelValue"
        @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        class="form-input dark:text-gray-300"
        :class="[isError && 'border border-red-500']"
        :placeholder="placeholder"
        :autocomplete="props.autocomplete"
      />


      <button
        type="button"
        @click="toggleVisibility"
        class="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-100"
        aria-label="Toggle password visibility"
      >
        <TablerEye v-if="isVisible" :size="20" stroke-width="2" />
        <TablerEyeClosed v-else :size="20" stroke-width="2" />

      </button>
    </div>

  </div>
</template>
