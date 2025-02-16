<script lang="ts" setup>

const props = defineProps<{
  value: string
  modelValue: string | null
  radioLabel?: string
  labelStyle?: string
}>()

const emits = defineEmits(['update:modelValue'])

const selectOption = () => {
  emits('update:modelValue', props.value)
}
</script>

<template>
  <div class="radio-input" :class="{ selected: modelValue === value }" @click="selectOption">
    <div class="radio-circle">
      <div v-if="modelValue === value" class="radio-dot"></div>
    </div>
    <span :class="labelStyle">{{ radioLabel }}</span>
  </div>
</template>

<style scoped>
.radio-input {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
}

.radio-circle {
  width: 20px;
  height: 20px;
  border: 2px solid #ccc;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.radio-dot {
  width: 10px;
  height: 10px;
  background-color: #42b883;
  border-radius: 50%;
}

.selected .radio-circle {
  border-color: #42b883;
}


</style>
