<script lang="ts" setup>
import {ref, onMounted} from 'vue'

const user = ref(null)
const errorMessage = ref<string | null>(null)
const id = ref('67df7344ad829779009e3543')
const fetchUserProfile = async () => {
  try {
    const response = await fetch(`http://localhost:5001/api/user/${id.value}`, {
      credentials: 'include',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })

    const data = await response.json()

    if (!response.ok)
      throw new Error(data.message || 'Failed to fetch user profile')

    user.value = data
  } catch (error) {
    errorMessage.value = (error as Error).message
  }
}

onMounted(async()=>{
  fetchUserProfile()
})
</script>

<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold">User Profile</h1>
    <p v-if="errorMessage" class="text-red-500">{{ errorMessage }}</p>
    <div v-if="user" class="p-4 border rounded-lg shadow">
      <p>
        <strong>Name:</strong>
        {{ user.name }}
      </p>
      <p>
        <strong>Email:</strong>
        {{ user.email }}
      </p>
    </div>
  </div>
</template>
