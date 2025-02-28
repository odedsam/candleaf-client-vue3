<script lang="ts" setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import { useCartStore } from "@/stores/cartStore"
import { z } from "zod"

const router = useRouter()
const cartStore = useCartStore()

// define schema for validation
const loginSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters")
})

// form Data
const email = ref("")
const password = ref("")
const errorMessage = ref<string | null>(null)

// handle Login with Validation
const handleLogin = async () => {
  try {
    // validate form input
    loginSchema.parse({ email: email.value, password: password.value })

    const response = await fetch("http://localhost:5001/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email.value, password: password.value })
    })

    const data = await response.json()
    if (!response.ok) throw new Error(data.message || "Login failed")

    // store access token & sync cart
    localStorage.setItem("accessToken", data.accessToken)
    await cartStore.syncLocalCartToBackend()

    router.push("/")
  } catch (error) {
    errorMessage.value = error instanceof z.ZodError
      ? error.errors.map(e => e.message).join(", ")
      : (error as Error).message
  }
}
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen space-y-4">
    <h1 class="text-2xl font-bold">Login</h1>

    <div class="w-full max-w-md p-6 bg-white rounded-lg shadow">
      <input v-model="email" type="email" placeholder="Email" class="w-full p-2 border rounded-md mb-2" />
      <input v-model="password" type="password" placeholder="Password" class="w-full p-2 border rounded-md mb-2" />
      <button @click="handleLogin" class="w-full bg-blue-500 text-white px-4 py-2 rounded-md">Login</button>
    </div>

    <p v-if="errorMessage" class="text-red-500">{{ errorMessage }}</p>
  </div>
</template>