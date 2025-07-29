import { User, Credentials } from '@/types/User';
import { loadGoogleScript } from '@/utils/loadGoogleScript';
import { API, GOOGLE_CLIENT_ID } from '@/utils';

declare global {
  interface Window {
    google: any;
  }
}

// טוען את סקריפט גוגל ומחזיר access token
export const loginWithGoogle = async (): Promise<string> => {
  await loadGoogleScript();

  return new Promise<string>((resolve, reject) => {
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

// שולח את accessToken לשרת לקבלת פרטי משתמש
export const verifyGoogleToken = async (accessToken: string): Promise<User> => {
  const res = await fetch(`${API}/api/v1/auth/google`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token: accessToken }),
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message || 'Google login failed');
  }

  return res.json();
};

// כניסה עם אימייל וסיסמה
export const login = async (credentials: Credentials): Promise<User> => {
  const res = await fetch(`${API}/api/v1/auth/login`, {
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
  if (!user) throw new Error('User data not returned after login');
  return user;
};

// יציאה
export const logout = async (): Promise<void> => {
  await fetch(`${API}/api/v1/auth/logout`, {
    method: 'POST',
    credentials: 'include',
  });
};
