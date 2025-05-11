<script setup lang="ts">
import { ref, watch } from "vue";
import { getAddressSuggestions } from "@/services/addressService";
import BaseInput from "@/components/base/BaseInput.vue";

const address = ref("");
const suggestions = ref<any[]>([]);
const emit = defineEmits(["update:address"]);

watch(address, async (newValue:any) => {
  suggestions.value = await getAddressSuggestions(address.value);
  newValue = address.value
});

const selectAddress = (suggestion: any) => {
  address.value = suggestion.display_name;
  emit("update:address", {
    street: suggestion.street,
    city: suggestion.city,
    postalCode: suggestion.postalCode,
    province: suggestion.province,
    country: suggestion.country,
  });
  suggestions.value = [];
};
</script>

<template>
  <div>
    <BaseInput v-model="address" placeholder="Search Address" />
    <ul v-if="suggestions.length" class="bg-white border mt-2 max-h-40 overflow-auto">
      <li
        v-for="(suggestion, index) in suggestions"
        :key="index"
        @click="selectAddress(suggestion)"
        class="p-2 hover:bg-gray-200 cursor-pointer"
      >
        {{ suggestion.display_name }}
      </li>
    </ul>
  </div>
</template>
<!-- <script setup lang="ts">
import { ref, watch } from "vue";
import { getAddressSuggestions } from "@/services/addressService";
import BaseInput from "@/components/base/BaseInput.vue";
import { defineModel } from 'vue';


interface Address {
  street?: string;
  city?: string;
  postalCode?: string;
  province?: string;
  country?: string;
}

const modelValue = defineModel<string>();
const selectedAddress = defineModel<Address>();

const suggestions = ref<any[]>([]);

watch(modelValue, async (newValue) => {
  if (newValue) {
    suggestions.value = await getAddressSuggestions(newValue);
  } else {
    suggestions.value = [];
  }
});

const selectAddress = (suggestion: any) => {
  modelValue.value = suggestion.display_name;
  selectedAddress.value = {
    street: suggestion.street,
    city: suggestion.city,
    postalCode: suggestion.postcode,
    province: suggestion.state,
    country: suggestion.country,
  };
  suggestions.value = [];
};
</script>

<template>
  <div>
    <BaseInput v-model="modelValue" placeholder="Search Address" />
    <ul v-if="suggestions.length" class="bg-white border mt-2 max-h-40 overflow-auto">
      <li
        v-for="(suggestion, index) in suggestions"
        :key="index"
        @click="selectAddress(suggestion)"
        class="p-2 hover:bg-gray-200 cursor-pointer"
      >
        {{ suggestion.display_name }}
      </li>
    </ul>
  </div>
</template> -->
