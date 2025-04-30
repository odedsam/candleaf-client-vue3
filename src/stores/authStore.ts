import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { loginWithGoogle, verifyGoogleToken, logout } from '@/services/authService'
import { User } from '@/types/User'
import router from '@/router'
import { BASE_URL } from '@/utils'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)
  const isLoading = ref(false)
  const error = ref<string | null>(null)
  const isAuthenticated = computed(() => !!user.value)

  const handleGoogleSignIn = async () => {
    isLoading.value = true
    error.value = null
    try {
      const accessToken = await loginWithGoogle()
      const userData = await verifyGoogleToken(accessToken)
      if (userData) {
        user.value = userData
        router.push('/auth/login/success')
      }
    } catch (err: any) {
      console.error('Google login failed:', err)
      error.value = err?.message || 'Login failed'
    } finally {
      isLoading.value = false
    }
  }

  const fetchCurrentUser = async () => {
    try {
      const res = await fetch(`${BASE_URL}/api/auth/verify`, {
        method: 'POST',
        credentials: 'include',
      })

      if (res.status === 401) {
        user.value = null
        return
      }

      if (!res.ok) {
        throw new Error()
      }

      const data = await res.json()
      user.value = data
    } catch(err:any) {
      console.error(err)
      user.value = null
    }
  }
  const handleLogout = async () => {
    try {
      await logout()
    } catch (err) {
      console.error('Logout failed:', err)
    } finally {
      localStorage.removeItem('auth.user')
      user.value = null
    }
  }

  return {
    user,
    isAuthenticated,
    isLoading,
    error,
    handleGoogleSignIn,
    handleLogout,
    fetchCurrentUser,
  }
})
