<script lang="ts" setup>
import {onMounted, ref} from 'vue'
import LoadingSpinner from '@/components/shared/LoadingSpinner.vue'

const profileName = ref('')
const userItems = ref([''])
const fetchUserData = async () => {
  try {
    const req = await fetch('http://localhost:5001/google/callback', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!req.ok) throw new Error('err in req')
    const response = await req.json()
    const {userName, items} = response.data

    profileName.value = userName
    userItems.value = items
  } catch (err: any) {
    console.log('err: ', err)
  }
}
onMounted(fetchUserData())
</script>
<template>
  <div class="bg-slate-500 p-4 w-full h-full">
    <div v-if="profileName">
      <nav>userName: {{ profileName || 'No Profile NAME' }}</nav>

      <div v-if="userItems">
        items :
        <div v-for="(item, index) in userItems" :key="index">
          <p>{{ item }}</p>
        </div>
      </div>
    </div>
    <div v-else><LoadingSpinner /></div>
  </div>
</template>

<style lang="css" scoped></style>
