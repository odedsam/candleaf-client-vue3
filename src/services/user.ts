import { API } from '@/utils';

export async function getProfile(id: string) {
  const res = await fetch(`${API}/user/${id}`, {
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
  });
  if (!res.ok) throw new Error('Failed to fetch profile');
  return res.json();
}
