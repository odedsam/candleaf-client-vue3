<script setup lang="ts">
import { computed, ref } from 'vue'
import { useCartStore } from '@/stores/cartStore'
import RadioInput from '@/components/features/products/RadioInput.vue'
import SelectDelivery from '@/components/features/products/SelectDelivery.vue'

const cartStore = useCartStore()

const selectedOption = ref<'one-time' | 'subscribe' | null>(null)
const deliveryInterval = ref('4 weeks')

const selectionData = computed(() => ({
  type: selectedOption.value,
  weeks: selectedOption.value === 'subscribe' ? deliveryInterval.value : null,
}))

const borderToggle = (option: 'one-time' | 'subscribe') => {
  return selectedOption.value === option ? 'border-selected' : 'border-transparent'
}
</script>
<template>
  <div class="w-full grid grid-auto-rows-2">
    <div class="option-container" :class="borderToggle('one-time')" @click="selectedOption = 'one-time'">
      <RadioInput
        :label-style="'max-sm:pl-2 pl-4 max-sm:text-xs text-break text-sm lg:text-md font-roboto'"
        v-model="selectedOption"
        :value="'one-time'"
        radio-label="One Time Purchase"
      />
    </div>

    <div class="option-container" :class="borderToggle('subscribe')" @click="selectedOption = 'subscribe'">
      <div class="flex gap-4 max-sm:gap-3 items-center lg:text-nowrap">
        <RadioInput
          :label-style="'max-sm:pl-2 pl-4 max-sm:text-xs text-break text-sm lg:text-md font-roboto'"
          v-model="selectedOption"
          :value="'subscribe'"
          radio-label="Subscribe and delivery every"
        />

        <SelectDelivery v-model="deliveryInterval" :options="['2 weeks', '4 weeks', '6 weeks']" />
      </div>
      <p class="text-[.975rem] py-3 max-sm:py-2 max-sm:text-xs font-roboto text-[#818181]">
        Subscribe now and get 10% off on every recurring order.
        <br class="hidden max-md:block" />
        The discount will be applied at checkout.
        <a href="#" class="text-[#92cfad]">See details</a>
      </p>
    </div>
  </div>
</template>

<style scoped>
.option-container {
  padding-block: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 0.5px;
  transition: border 0.2s ease-in-out;
}

.option-container {
  border: 2px solid transparent;
}

.border-selected {
  border: 2px solid #ccc;
  border-radius: 12px;
}
@media (max-width: 640px) {
  .option-container {
    padding-left: 0.5rem;
  }
}
</style>
