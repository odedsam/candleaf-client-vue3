<script setup lang="ts">
import { computed, ref } from 'vue'
import { useCartStore } from '@/stores/cartStore'
import RadioInput from '@/components/features/products/RadioInput.vue'
import SelectDelivery from '@/components/features/products/SelectDelivery.vue'

const cartStore = useCartStore()

const selectedOption = ref<'one-time' | 'subscribe' | null>(null)
const deliveryInterval = ref('4 Weeks')

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
        :label-style="'max-md:pl-2 pl-4 max-md:text-sm text-break text-sm lg:text-md font-poppins'"
        v-model="selectedOption"
        :value="'one-time'"
        radio-label="One Time Purchase"
      />
    </div>

    <div class="option-container" :class="borderToggle('subscribe')" @click="selectedOption = 'subscribe'">
      <div class="flex gap-2 md:justify-between items-center lg:text-nowrap">
        <RadioInput
          :label-style="'max-md:pl-2 pl-4 max-md:text-sm text-break text-sm lg:text-md font-poppins'"
          v-model="selectedOption"
          :value="'subscribe'"
          radio-label="Subscribe & Delivery Every"
        />

        <SelectDelivery v-model="deliveryInterval" :options="['2 Weeks', '4 Weeks', '6 Weeks']" />
      </div>
      <p class="text-[.975rem] py-3 max-md:py-2 max-md:text-xs font-poppins text-[#818181]">
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
