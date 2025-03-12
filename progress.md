<script setup lang="ts">
import { ref, reactive } from "vue";
import { useAuthStore } from "@/stores/authStore";
import { GoogleSignInButton, type CredentialResponse } from "vue3-google-signin";
import { validateAuthForm } from "@/validations/authValidation";
import { useRouter } from "vue-router";
import { useUIStore } from "@/stores/uiStore";

const authStore = useAuthStore();
const uiStore = useUIStore();
const router = useRouter();

const isSignUp = ref(false);

const form = reactive({
  name: "",
  email: "",
  password: "",
});

const errors = reactive({
  name: "",
  email: "",
  password: "",
});

const handleAuth = async () => {
  const validationErrors = validateAuthForm(form);
  if (validationErrors) {
    Object.assign(errors, validationErrors);
    return;
  }

  try {
    if (isSignUp.value) {
      await authStore.signUp(form);
      uiStore.showToast("Registration successful! Redirecting...", "success");
    } else {
      await authStore.signIn({ email: form.email, password: form.password });
      uiStore.showToast("Login successful! Redirecting...", "success");
    }

    router.push("/");
    Object.assign(form, { name: "", email: "", password: "" }); // Clear form fields
  } catch (error) {
    uiStore.showToast("Authentication failed!", "error");
    console.error("Auth Error:", error);
  }
};

const handleGoogleLogin = async (response: CredentialResponse) => {
  try {
    await authStore.googleSignIn(response.credential);
    uiStore.showToast("Google sign-in successful! Redirecting...", "success");
    router.push("/");
  } catch (error) {
    uiStore.showToast("Google authentication failed!", "error");
    console.error("Google Sign-in Error:", error);
  }
};
</script>

<template>
  <div class="container border-[#ccc] bg-[#f9f9f9] p-5 rounded-lg text-center mx-auto">
    <h2>{{ isSignUp ? "Sign Up" : "Sign In" }}</h2>
    <form @submit.prevent="handleAuth">
      <input v-if="isSignUp" v-model="form.name" type="text" placeholder="Full Name" required />
      <p v-if="errors.name" class="error">{{ errors.name }}</p>

      <input v-model="form.email" type="email" placeholder="Email" required />
      <p v-if="errors.email" class="error">{{ errors.email }}</p>

      <input v-model="form.password" type="password" placeholder="Password" required />
      <p v-if="errors.password" class="error">{{ errors.password }}</p>

      <button type="submit">{{ isSignUp ? "Sign Up" : "Sign In" }}</button>
    </form>
    <div class="my-4">
      <GoogleSignInButton text="continue_with" @success="handleGoogleLogin" />
    </div>
    <p>
      {{ isSignUp ? "Already have an account?" : "Not have an account?" }}
      <a href="#" @click.prevent="isSignUp = !isSignUp">
        {{ isSignUp ? "Sign In" : "Sign Up" }}
      </a>
    </p>
  </div>
</template>

<style scoped>
input {
  display: block;
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
}
button {
  width: 100%;
  padding: 10px;
  background-color: #56B280;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
}
button:hover {
  background-color: #4a9e70;
}

a {
  color: #56B280;
  font-weight: bold;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
.error {
  color: red;
  font-size: 12px;
  margin-bottom: 10px;
}
</style>