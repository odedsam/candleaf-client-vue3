import { ref } from "vue"
import { useRouter } from "vue-router"

const accessTokenKey = "accessToken"

export function useAuth() {
  const user = ref(null)
  const isAuthenticated = ref(false)
  const router = useRouter()

  //  get user info
  const fetchUser = async () => {
    const token = localStorage.getItem(accessTokenKey)
    if (!token) return

    const response = await fetch("http://localhost:5001/api/user/profile", {
      headers: { Authorization: `Bearer ${token}` }
    })

    if (response.ok) {
      user.value = await response.json()
      isAuthenticated.value = true
    }
  }

  //  handle login
  const login = async (email: string, password: string) => {
    const response = await fetch("http://localhost:5001/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    })

    const data = await response.json()
    if (response.ok) {
      localStorage.setItem(accessTokenKey, data.accessToken)
      isAuthenticated.value = true
      router.push("/")
    } else {
      throw new Error(data.message)
    }
  }

  //  handle logout
  const logout = () => {
    localStorage.removeItem(accessTokenKey)
    user.value = null
    isAuthenticated.value = false
    router.push("/login")
  }

  return { user, isAuthenticated, fetchUser, login, logout }
}