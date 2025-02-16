<script lang="ts" setup>
import { ref, defineProps, defineEmits } from 'vue'
import SelectDelivery from '@/components/Products/atoms/SelectDelivery.vue'

const props = defineProps<{
  options: { label: string; value: string; hasSelect: boolean | null }[]
  modelValue: string
}>()

const emits = defineEmits(['update:modelValue'])

const deliveryInterval = ref('4 weeks')

const selectOption = (value: string) => {
  emits('update:modelValue', value)
}
</script>

<template>
  <div class="radio-container">
    <div
      v-for="option in props.options"
      :key="option.value"
      class="radio-option"
      :class="{ selected: modelValue === option.value }"
      @click="selectOption(option.value)"
    >
      <div class="radio-circle">
        <div v-if="modelValue === option.value" class="radio-dot"></div>
      </div>

      <div class="radio-content">
        <label>{{ option.label }}</label>

        <SelectDelivery
          v-if="option.hasSelect && modelValue === option.value"
          v-model="deliveryInterval"
          :options="['2 weeks', '4 weeks', '6 weeks']"
        />

        <p v-if="option.hasSelect" class="description">
          Subscribe now and get 10% off on every recurring order.
          The discount will be applied at checkout.
          <a href="#">See details</a>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.radio-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.radio-option {
  display: flex;
  align-items: center;
  padding: 15px;
  border: 2px solid #ccc;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.2s;
}

.radio-option.selected {
  border-color: #42b883;
  background-color: #f8f8f8;
}

.radio-circle {
  width: 20px;
  height: 20px;
  border: 2px solid #ccc;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
}

.radio-dot {
  width: 10px;
  height: 10px;
  background-color: #42b883;
  border-radius: 50%;
}

.radio-content {
  flex: 1;
}

.description {
  font-size: 12px;
  color: gray;
  margin-top: 5px;
}

a {
  color: #42b883;
  text-decoration: none;
}
</style>
