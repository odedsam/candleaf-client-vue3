import {defineStore} from 'pinia'
import {ref, computed} from 'vue'
import useLocalStorage from '@/composables/useLocalStorage'
import {getUser, loginWithGoogle, logout, fetchProfile} from '@/services/authService'

type User = {
  id: number
  name: string
  email: string
  email_verified_at: string
  created_at: string
  updated_at: string
}

type Credentials = {
  email: string
  password: string
  remember: boolean
}

export const useAuthStore = defineStore('auth', () => {
  const user = useLocalStorage<User>('auth.user')
  const isLoading = ref<boolean>(false)
  const error = ref<string | null>(null)
  const isAuthenticated = computed(() => !!user.value)

  const fetchUser = async () => {
    try {
      const data = await getUser()
      if (data && !data.error) {
        const url = new URLSearchParams()
        const userInfo = url.get(window.location.href)
        console.log(userInfo)
        user.value = data.user
        sessionStorage.setItem('user', JSON.stringify(data.user))
      } else {
        user.value = null
      }
    } catch (e) {
      console.error('Error fetching user:', e)
      error.value = e
      user.value = null
    }
  }

  async function fetchUserProfile() {
    const profile = await fetchProfile()
    user.value = profile
  }
  const handleGoogleSignIn = async () => {
    isLoading.value = true
    try {
      loginWithGoogle()
    } catch (error) {
      if (error) {
        console.error(error)
        error.value = 'Google login failed. Try again.'
      }

      error.value = error
    } finally {
      isLoading.value = false
    }
  }
  const handleLogout = async () => {
    isLoading.value = true
    try {
      await logout()
    } catch (error) {
      error.value = 'Logout failed. Try again.'
    } finally {
      isLoading.value = false
    }
  }
  const clearCookies = () => {
    document.cookie.split(';').forEach((c) => {
      document.cookie = c
        .replace(/^ +/, '')
        .replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/; domain=.google.com')
    })
  }

  return {
    user,
    isAuthenticated,
    fetchUser,
    fetchUserProfile,
    handleGoogleSignIn,
    handleLogout,
  }
})
