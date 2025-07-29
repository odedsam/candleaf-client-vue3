import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { loginWithGoogle, verifyGoogleToken, logout } from '@/services/authService';
import { User } from '@/types/User';
import { API } from '@/utils';
import router from '@/router';

type RegisterPayload = {
  name: string
  email: string
  password: string
}

type LoginPayload = Omit<RegisterPayload, 'name'>

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null);
  const isLoading = ref(false);
  const error = ref<string | null>(null);
  const formErrors = ref({})
  const isAuthenticated = computed(() => !!user.value);

  const handleGoogleSignIn = async () => {
    isLoading.value = true;
    error.value = null;
    try {
      const accessToken = await loginWithGoogle();
      const userData = await verifyGoogleToken(accessToken);
      if (userData) {
        user.value = userData;
        router.push('/auth/login/success');
      }
    } catch (err: any) {
      console.error('Google login failed:', err);
      error.value = err?.message || 'Login failed';
    } finally {
      isLoading.value = false;
    }
  };



async function register(payload: RegisterPayload) {
    isLoading.value = true;
    error.value = null;
    formErrors.value = {};

    try {
      const res = await fetch(`${API}/api/v1/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.error("Backend Error Response:", errorData);

        let errorMessage = 'Registration failed';

        if (errorData.errors && typeof errorData.errors === 'object') {
          const fieldErrors: string[] = [];
          for (const field in errorData.errors) {
            if (Array.isArray(errorData.errors[field]) && errorData.errors[field].length > 0) {
              fieldErrors.push(`${field}: ${errorData.errors[field].join(', ')}`);

            }
          }
          if (fieldErrors.length > 0) {
            errorMessage = fieldErrors.join('; ');
          } else if (errorData.message) {
            errorMessage = errorData.message;
          }
        } else if (errorData.message) {
          errorMessage = errorData.message;
        }

        error.value = errorMessage;
        throw new Error(errorMessage);
      }

      const data = await res.json();
      user.value = data.user;
      router.push('/auth/login/success');
    } catch (err: any) {
      console.error("Caught error during registration:", err);
      if (!error.value) {
         error.value = err.message || 'Registration failed due to network or unexpected error.';
      }
    } finally {
      isLoading.value = false;
    }
  }
  async function login(payload: { email: string; password: string }) {
    isLoading.value = true;
    error.value = null;
    try {
      const res = await fetch(`${API}/api/v1/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Login failed');
      }

      const data = await res.json();
      user.value = data.user;
      router.push('/auth/login/success');
    } catch (err: any) {
      error.value = err.message || 'Login failed';
      throw err;
    } finally {
      isLoading.value = false;
    }
  }


  const handleLogout = async () => {
    try {
      await logout();
    } catch (err) {
      console.error('Logout failed:', err);
    } finally {
      localStorage.removeItem('auth.user');
      user.value = null;
    }
  };


  const fetchCurrentUser = async () => {
    try {
      const res = await fetch(`${API}/api/v1/auth/verify`, {
        method: 'POST',
        credentials: 'include',
      });

      if (res.status === 401) {
        user.value = null;
        return;
      }

      if (!res.ok) {
        throw new Error();
      }

      const data = await res.json();
      user.value = data;
    } catch (err: any) {
      console.error(err);
      user.value = null;
    }
  };














  return {
    user,
    isAuthenticated,
    isLoading,
    error,
    handleGoogleSignIn,
    handleLogout,
    fetchCurrentUser,
    register,
    login,
  };
});
