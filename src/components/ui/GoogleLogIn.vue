<script lang="ts" setup>
import { ref, getCurrentInstance } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()
const errorMessage = ref<string | null>(null)
const instance = getCurrentInstance() //  get vue instance to access `$gAuth`

const handleGoogleAuth = async () => {
  try {
    if (!instance?.appContext.config.globalProperties.$gAuth) {
      throw new Error("Google Auth not initialized")
    }

    const googleUser = await instance.appContext.config.globalProperties.$gAuth.signIn() //  google auth call
    const idToken = googleUser.credential

    //  send token to backend using fetch
    const response = await fetch("http://localhost:5001/api/auth/google", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: idToken })
    })

    const data = await response.json()

    if (!response.ok) throw new Error(data.message || "Authentication failed")

    //  store access token in localStorage/pinia
    localStorage.setItem("accessToken", data.accessToken)

    //  redirect user after successful login
    router.push("/")
  } catch (error) {
    errorMessage.value = (error as Error).message
    console.error(error)
  }
}
</script>

<template>
  <div class="flex flex-col items-center space-y-4">
    <button @click="handleGoogleAuth" class="bg-blue-500 text-white px-4 py-2 rounded-md">
      Sign In / Sign Up with Google
    </button>
    <p v-if="errorMessage" class="text-red-500">{{ errorMessage }}</p>
  </div>
</template>