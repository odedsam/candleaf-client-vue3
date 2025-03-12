<script lang="ts" setup>
defineProps<{ modelValue: string; type?: string; placeholder?: string }>();
defineEmits(["update:modelValue"]);
</script>

<template>
  <input
    class="block w-full p-2.5 border border-[#ccc] rounded-xl focus:ring focus:ring-[#4a9e70] outline-none"
    :type="type || 'text'"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
</template>