import router from '@/router';
import { loginWithGoogle, logout } from '@/services';
import { User } from '@/types';
import { API } from '@/utils';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { computed } from 'vue';

export const authStore = defineStore('authStoreNew', () => {
  const user = ref<User | null>(null);
  const isLoading = ref(false);
  const error = ref<string | null>(null);
  const isAuthenticated = computed(() => !!user.value);

  const handleGoogleSignIn = async () => {
    isLoading.value = true;
    error.value = null;
    try {
      const accessToken = await loginWithGoogle();
      const res = await fetch(`${API}/api/v1/auth/google`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: accessToken }),
      });
      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.message || 'Google login failed');
      }
      const userData = await res.json();
      user.value = userData;
      router.push('/auth/login/success');
    } catch (err: any) {
      console.error('Google login failed:', err);
      error.value = err?.message || 'Login failed';
    } finally {
      isLoading.value = false;
    }
  };

  const fetchCurrentUser = async () => {
    try {
      const res = await fetch(`${API}/api/v1/auth/authenticate`, {
        method: 'GET',
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

  const handleLogout = async () => {
    try {
      await logout();
    } catch (err) {
      console.error('Logout failed:', err);
    } finally {
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
  };
});
