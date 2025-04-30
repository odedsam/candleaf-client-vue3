import { User, Credentials } from '@/types/User';
import { loadGoogleScript } from '@/utils/loadGoogleScript';
import { GOOGLE_CLIENT_ID } from '@/utils';
const url = `https://candleaf-back-production.up.railway.app`
declare global {
  interface Window {
    google: any;
  }
}
const isMobile = (): boolean => {
  return /Mobi|Android/i.test(navigator.userAgent);
};

export const loginWithGoogle = async (): Promise<string> => {
  await loadGoogleScript();

  return await new Promise((resolve, reject) => {
    if (!window.google?.accounts?.oauth2) {
      return reject('Google OAuth2 not available');
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
    const res = await fetch(`${url}/api/auth/google`, {
      method: 'POST',
      credentials: 'include',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ token: accessToken }),
    });
    if (!res.ok) {
      const { message } = await res.json().catch(() => ({ message: 'Google login failed' }));
      console.log('res.status : ', res.status);
      throw new Error(message);
    }

    const { user } = await res.json();
    return user;
  } catch (err: any) {
    console.log("err verifying google token : ",err);
  }
};

export const login = async (credentials: Credentials): Promise<User> => {
  const res = await fetch(`${url}/api/auth/login`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.message || 'Login failed');
  }

  const { user } = await res.json();
  if (!user) {
    throw new Error('User data not returned after login');
  }

  return user;
};

export const logout = async () => {
  await fetch(`${url}/api/auth/logout`, {
    method: 'POST',
    credentials: 'include',
  });
  location.href = '/';
};

// const client = google.accounts.oauth2.initTokenClient({
//   client_id: 'YOUR_GOOGLE_CLIENT_ID',
//   callback: "onTokenResponse",
//   scope: 'https://www.googleapis.com/auth/documents.readonly',
// });
// client.requestAccessToken();

// const client = google.accounts.oauth2.initTokenClient({
//   client_id: 'YOUR_GOOGLE_CLIENT_ID',
//   callback: "onTokenResponse",
//   scope: 'https://www.googleapis.com/auth/calendar.readonly',
// });
// client.requestAccessToken();

// const client = google.accounts.oauth2.initTokenClient({
//   client_id: 'YOUR_GOOGLE_CLIENT_ID',
//   callback: "onTokenResponse",
//   scope: 'https://www.googleapis.com/auth/photoslibrary.readonly',
// });
// client.requestAccessToken();
