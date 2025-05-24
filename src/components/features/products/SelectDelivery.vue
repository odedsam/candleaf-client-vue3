<script lang="ts" setup>

defineProps<{
  modelValue: string
  options: string[]
  defaultValue?: string
}>()

const emit = defineEmits(['update:modelValue'])

const updateValue = (value: string) => {
  emit('update:modelValue', value)
}
</script>
<template>
  <div class="custom-select group bg-white">
    <span class="text-sm p-2 text-center font-poppins">{{ modelValue || defaultValue }}</span>
    <ul class="font-poppins transition-all duration-300 ease-out opacity-0 translate-y-[-10px] group-hover:opacity-100 group-hover:translate-y-0">
      <li
        v-for="option in options"
        :key="option"
        @click="updateValue(option)"
        class="option-item font-poppins transition duration-200 dark:text-black">
        {{ option }}
      </li>
    </ul>
  </div>
</template>


<style scoped>
.custom-select {
  border: 1px solid #ccc;
  border-radius: 5px;
  display: inline-flex;
  cursor: pointer;
  flex-direction: column;
  position: relative;
  text-wrap: nowrap;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  background: white;
  border: 1px solid #ccc;
  width: 100%;
  display: none;
  transition:all
}

.custom-select:hover ul {
 display: block;
 padding:8px;
 transition: all;
}

.option-item {
  cursor: pointer;
  text-align:center;
  font-size:14px;

}

.option-item:hover {
  background:  rgb(146, 207, 173,.4);
}
</style>
