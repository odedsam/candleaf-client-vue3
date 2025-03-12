<script setup lang="ts">
import { ref, watch } from "vue";
import { useAuthStore } from "@/stores/authStore";
import { useRouter } from "vue-router";
import BaseInput from "@/components/shared/BaseInput.vue";
import { validateAuthForm } from "@/validations/authValidation";
import { GoogleSignInButton, type CredentialResponse } from "vue3-google-signin";

const authStore = useAuthStore();
const router = useRouter();
const isSignUp = ref(false);
const isLoading = ref(false);
const errorMessage = ref<string | null>(null);

const form = ref({
  name: "",
  email: "",
  password: "",
});

// Reset errors and form when toggling Sign Up / Sign In
watch(isSignUp, () => {
  errorMessage.value = null;
  form.value = { name: "", email: "", password: "" };
});

// Handle email/password authentication
const handleAuth = async () => {
  errorMessage.value = null;
  const validationErrors = validateAuthForm(form.value);
  if (validationErrors) {
    errorMessage.value = "Please fill all fields correctly.";
    return;
  }

  isLoading.value = true;
  try {
    isSignUp.value ? await authStore.signUp(form.value) : await authStore.signIn(form.value);
    router.push("/");
  } catch (error: any) {
    errorMessage.value = error.message || "Authentication failed!";
  } finally {
    isLoading.value = false;
  }
};

// Handle Google Sign-In (using `redirect` mode)
const handleGoogleSignIn = async (response: CredentialResponse) => {
  try {
    await authStore.googleSignIn(response);
    router.push("/");
  } catch (error: any) {
    errorMessage.value = error.message || "Google Sign-In failed!";
  }
};
</script>

<template>
  <div class="container border-[#ccc] bg-[#f9f9f9] p-5 rounded-lg text-center mx-auto">
    <h2>{{ isSignUp ? "Sign Up" : "Sign In" }}</h2>

    <form @submit.prevent="handleAuth" class="space-y-3">
      <BaseInput v-if="isSignUp" v-model="form.name" placeholder="Full Name" />
      <BaseInput v-model="form.email" type="email" placeholder="Email" />
      <BaseInput v-model="form.password" type="password" placeholder="Password" />

      <button
        class="block w-full p-2.5 bg-[#56B280] text-white border-none rounded-md font-bold cursor-pointer hover:bg-[#4a9e70] transition"
        type="submit"
        :disabled="isLoading"
      >
        {{ isLoading ? "Processing..." : isSignUp ? "Sign Up" : "Sign In" }}
      </button>
    </form>

    <p v-if="errorMessage" class="text-red-500 text-xs mt-2">
      {{ errorMessage }}
    </p>

    <div class="my-4">
      <!-- ✅ Use `data-ux_mode="redirect"` to avoid Chrome’s cookie restrictions -->
      <GoogleSignInButton
        @success="handleGoogleSignIn"
        @error="errorMessage = 'Google Sign-In failed!'"
        data-ux_mode="redirect"
      />
    </div>

    <p>
      {{ isSignUp ? "Already have an account?" : "Not have an account?" }}
      <a href="#" @click.prevent="isSignUp = !isSignUp" class="text-blue-600 underline">
        {{ isSignUp ? "Sign In" : "Sign Up" }}
      </a>
    </p>
  </div>
</template>