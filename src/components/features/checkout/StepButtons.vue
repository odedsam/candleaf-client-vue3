<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps<{
  primaryText: string;
  secondaryText: string;
  primaryRoute: string;
  secondaryRoute: string;
  validate?: () => boolean;
  submitInfo?:()=>boolean
}>();

// ensure validate function is only called when needed
const isDisabled = computed(() => {
  return props.validate ? !props.validate() : false;
});

const handlePrimaryClick = () => {
  if (props.validate && !props.validate()) return; // prevents navigation if validation fails
  router.push(props.primaryRoute);
};

const handleSecondaryClick = () => {
  router.push(props.secondaryRoute);
};
</script>

<template>

  <div class="text-center py-8 flex flex-col items-center gap-3">
    <button
      class="w-full max-w-[21.875rem] cursor-pointer text-white text-lg font-medium py-3 rounded-md transition-all"
      :class="{ 'bg-[#56B280] hover:bg-green-600': !isDisabled, 'bg-gray-400 cursor-not-allowed': isDisabled }"
      @click="handlePrimaryClick"
       type="button"
      :disabled="isDisabled">

      {{ primaryText }}

     </button>

    <button
      type="button"
      class="w-full text-[#56B280] max-w-[21.875rem] text-lg font-medium py-3 rounded-md border border-green-500 hover:bg-green-100 transition-all cursor-pointer"
      @click="handleSecondaryClick">
      {{ secondaryText }}
    </button>
  </div>

</template>
