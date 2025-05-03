import { User, Credentials } from '@/types/User';
import { loadGoogleScript } from '@/utils/loadGoogleScript';
import { API, GOOGLE_CLIENT_ID } from '@/utils';

declare global {
  interface Window {
    google: any;
  }
}


export const loginWithGoogle = async (): Promise<string> => {
  await loadGoogleScript();

  return await new Promise<string>((resolve, reject) => {
    if (!window.google?.accounts?.oauth2) {
      return reject(new Error('Google OAuth2 not available'));
    }

    const client = window.google.accounts.oauth2.initTokenClient({
      client_id: GOOGLE_CLIENT_ID,
      scope: 'openid profile email',
      callback: (tokenResponse: any) => {
        if (tokenResponse?.access_token) {
          resolve(tokenResponse.access_token);
        } else {
          reject('No access token returned from Google');
        }
      },
    });

    client.requestAccessToken();
  });
};
export const verifyGoogleToken = async (accessToken: string): Promise<User> => {
  try {
    const res = await fetch(`${API}/api/v1/auth/google`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token: accessToken }),
    });

    if (!res.ok) {
      const { message } = await res.json().catch(() => ({ message: 'Google login failed' }));
      console.error('Failed Google token verification:', res.status, message);
      throw new Error(message);
    }

    const { user } = await res.json();
    return user;
  } catch (err) {
    console.error('Error verifying Google token:', err);
    throw err;
  }
};


export const login = async (credentials: Credentials): Promise<User> => {
  const res = await fetch(`${API}/api/v1/auth/login`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.message || 'Login failed');
  }

  const { user } = await res.json();
  if (!user) throw new Error('User data not returned after login');
  return user;
};


export const logout = async (): Promise<void> => {
  await fetch(`${API}/api/v1/auth/logout`, {
    method: 'POST',
    credentials: 'include',
  });

  window.location.href = '/';
};
