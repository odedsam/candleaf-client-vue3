export const loginWithGoogle = () => {
  window.open('http://localhost:5001/api/auth/google')
}

export const logout = async () => {
  await fetch(`http://localhost:5001/api/auth/logout`, {credentials: 'include'})
  localStorage.removeItem('user')
  window.location.href = '/'
}

export const getUserFromURL = () => {
  const urlParams = new URLSearchParams(window.location.search)
  const userInfo = urlParams.get('user')

  if (userInfo) {
    try {
      const decodedUser = JSON.parse(decodeURIComponent(userInfo))
      localStorage.setItem('user', JSON.stringify(decodedUser))
      window.history.replaceState({}, document.title, window.location.pathname)
      return decodedUser
    } catch (error) {
      console.error('Error parsing user data:', error)
    }
  }

  return null
}

export const fetchProfile = async () => {
  try {
    const req = await fetch('http://localhost:5001/api/user', {
      credentials: 'include',
    })
    if (!req.ok) throw new Error('failed making request')

    const data = await req.json()
    return data
  } catch (err: any) {
    console.error(err)
    return null
  }
}

export const getUser = async () => {
  try {
    const user = localStorage.getItem('user')
    return user ? JSON.parse(user) : null
  } catch (error) {
    console.error('Error fetching user:', error)
    return null
  }
}
