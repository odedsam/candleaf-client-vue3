import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { loginWithGoogle, verifyGoogleToken, logout } from '@/services/authService';
import { User } from '@/types/User';
import { API } from '@/utils';
import { getProfile } from '@/services/user';
import router from '@/router';

type RegisterPayload = {
  name: string
  email: string
  password: string
}

type LoginPayload = Omit<RegisterPayload, 'name' | 'provider'>

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null);
  const isAuthenticated = computed(() => !!user.value);
  const isLoading = ref(false);
  const error = ref<string | null>(null);
  const formErrors = ref({})
  const orders = ref([]);

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
        isLoading.value = false;
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
    console.log("fetchCurrentUser Started");
    try {
      const res = await fetch(`${API}/api/v1/auth/verify`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
      });

      if (res.status === 401) {
        user.value = null;
        return;
      }

      if (!res.ok) {
        throw new Error();
      }

      const data = await res.json();
      console.log(data);
      user.value = data;
    } catch (err: any) {
      console.error(err);
      user.value = null;
    }
  };



  const fetchUserProfile = async (id: string) => {
    isLoading.value = true;
    error.value = null;
    try {
      const { user: userData, userOrdersHistory } = await getProfile(id);
      user.value = userData;
      orders.value = userOrdersHistory;
    } catch (err: any) {
      console.error('Fetch profile failed:', err);
      error.value = err?.message || 'Failed to fetch profile';
    } finally {
      isLoading.value = false;
    }
  };










  return {
    user,
    isAuthenticated,
    isLoading,
    error,
    orders,
    handleGoogleSignIn,
    handleLogout,
    fetchCurrentUser,
    fetchUserProfile,
    register,
    login,
  };
});
