<script lang="ts" setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import { getCurrentInstance } from "vue"

const router = useRouter()
const instance = getCurrentInstance()

// native sign-up data
const name = ref("")
const email = ref("")
const password = ref("")
const errorMessage = ref<string | null>(null)

// handle native sign-up
const handleSignup = async () => {
  try {
    const response = await fetch("http://localhost:5001/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: name.value, email: email.value, password: password.value })
    })

    const data = await response.json()

    if (!response.ok) throw new Error(data.message || "Signup failed")

    // store token and redirect
    localStorage.setItem("accessToken", data.accessToken)
    router.push("/")
  } catch (error) {
    errorMessage.value = (error as Error).message
  }
}

const handleGoogleSignup = async () => {
  try {
    if (!instance?.appContext.config.globalProperties.$gAuth) {
      throw new Error("Google Auth not initialized")
    }

    const googleUser = await instance.appContext.config.globalProperties.$gAuth.signIn()
    const idToken = googleUser.credential

    // send the token to backend
    const response = await fetch("http://localhost:5001/api/auth/google", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: idToken })
    })

    const data = await response.json()

    if (!response.ok) throw new Error(data.message || "Google Sign-Up failed")

    //  store token and redirect
    localStorage.setItem("accessToken", data.accessToken)
    router.push("/")
  } catch (error) {
    errorMessage.value = (error as Error).message
  }
}
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen space-y-4">
    <h1 class="text-2xl font-bold">Sign Up</h1>

    <!-- native sign-up form -->
    <div class="w-full max-w-md p-6 bg-white rounded-lg shadow">
      <input v-model="name" type="text" placeholder="Name" class="w-full p-2 border rounded-md mb-2" />
      <input v-model="email" type="email" placeholder="Email" class="w-full p-2 border rounded-md mb-2" />
      <input v-model="password" type="password" placeholder="Password" class="w-full p-2 border rounded-md mb-2" />
      <button @click="handleSignup" class="w-full bg-blue-500 text-white px-4 py-2 rounded-md">Sign Up</button>
    </div>

    <p class="text-gray-600">OR</p>

    <!-- google sign-up button -->
    <button @click="handleGoogleSignup" class="bg-red-500 text-white px-4 py-2 rounded-md">
      Sign Up with Google
    </button>

    <p v-if="errorMessage" class="text-red-500">{{ errorMessage }}</p>
  </div>
</template>