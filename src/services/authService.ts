import { User, Credentials } from '@/types/User'
import { loadGoogleScript } from '@/utils/loadGoogleScript'

declare global {
  interface Window {
    google: any
  }
}


/* Start Google OAuth login flow & Returns access_token */
export const loginWithGoogle = async (): Promise<string> => {
  await loadGoogleScript()

  return await new Promise((resolve, reject) => {
    if (!window.google?.accounts?.oauth2) {
      return reject('Google OAuth2 not available')
    }

    const client = window.google.accounts.oauth2.initTokenClient({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      scope: 'openid profile email',
      callback: (tokenResponse: any) => {
        if (tokenResponse?.access_token) {
          resolve(tokenResponse.access_token)
        } else {
          reject('No access token returned from Google')
        }
      },
    })

    client.requestAccessToken()
  })
}


/* Send Google access_token to backend for verification + JWT creation */
export const verifyGoogleToken = async (accessToken: string): Promise<User> => {
  const res = await fetch('/api/auth/google', {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token: accessToken }),
  })

  if (!res.ok) {
    const { message } = await res.json().catch(() => ({ message: 'Google login failed' }))
    throw new Error(message)
  }

   const { user } = await res.json()
   return user
}


export const logout = async () => {
  await fetch('/api/auth/logout', {
    method: 'POST',
    credentials: 'include',
  })
  location.href = '/'
}


/* Local login email/password */
export const login = async (credentials: Credentials): Promise<User> => {
  const res = await fetch('/api/auth/login', {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials)
  })

  if (!res.ok) {
    const error = await res.json().catch(() => ({}))
    throw new Error(error.message || 'Login failed')
  }

  return await res.json()
}
