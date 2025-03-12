<script lang="ts" setup>
import LogoImage from '@/assets/icons/HeaderLogo.svg'
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps<{
  grow?: boolean
  disableRoute?: boolean
}>()

const baseClass = 'inline-flex justify-center items-center'
const classes = computed(() => [
  baseClass,
  props.grow ? 'w-full flex-grow py-6' : '',
])

const linkTo = computed(() => (props.disableRoute ? '' : '/'))
</script>

<template>
  <RouterLink :to="linkTo" :class="{ 'pointer-events-none ': disableRoute }">
    <div :class="classes">
      <img :src="LogoImage" alt="header-logo" />
      <p class="text-[#56B280] pl-2 text-xl text-semibold">Candleaf</p>
    </div>
  </RouterLink>
</template>

<style lang="css" scoped></style>