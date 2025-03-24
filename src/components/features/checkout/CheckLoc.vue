<script setup lang="ts">
import { ref, watch } from "vue";

const address = ref("");
const street = ref("");
const city = ref("");
const postalCode = ref("");
const province = ref("");
const country = ref("");
const suggestions = ref<any[]>([]);

const fetchAddressSuggestions = async () => {
  if (address.value.length < 3) {
    suggestions.value = [];
    return;
  }

  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${address.value}&format=json&addressdetails=1`
    );
    const data = await response.json();

    console.log("API Response:", data);

    if (Array.isArray(data)) {
      suggestions.value = data.map((item: any) => ({
        display_name: item.display_name,
        street: item.address?.road || "Unknown",
        city: item.address?.city || item.address?.town || item.address?.village || "Unknown",
        postalCode: item.address?.postcode || "Unknown",
        province: item.address?.state || "Unknown",
        country: item.address?.country || "Unknown",
      }));
    } else {
      console.error("Invalid API response", data);
      suggestions.value = [];
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    suggestions.value = [];
  }
};

watch(address, fetchAddressSuggestions);
</script>

<template>
  <div class="p-4">
    <label for="address" class="block">Address</label>
    <input
      id="address"
      v-model="address"
      type="text"
      class="border p-2 w-full"
      placeholder="Enter your address"
    />
    <ul v-if="suggestions.length" class="bg-white border mt-2 max-h-40 overflow-auto">
      <li
        v-for="(suggestion, index) in suggestions"
        :key="index"
        @click="
          () => {
            address = suggestion.display_name;
            street = suggestion.street;
            city = suggestion.city;
            postalCode = suggestion.postalCode;
            province = suggestion.province;
            country = suggestion.country;
            suggestions = [];
          }
        "
        class="p-2 hover:bg-gray-200 cursor-pointer"
      >
        {{ suggestion.display_name }}
      </li>
    </ul>

    <label for="street" class="block mt-4">Street</label>
    <input id="street" v-model="street" type="text" class="border p-2 w-full" />

    <label for="city" class="block mt-4">City</label>
    <input id="city" v-model="city" type="text" class="border p-2 w-full" />

    <label for="postalCode" class="block mt-4">Postal Code</label>
    <input id="postalCode" v-model="postalCode" type="text" class="border p-2 w-full" />

    <label for="province" class="block mt-4">Province</label>
    <input id="province" v-model="province" type="text" class="border p-2 w-full" />

    <label for="country" class="block mt-4">Country</label>
    <input id="country" v-model="country" type="text" class="border p-2 w-full" />
  </div>
</template>
