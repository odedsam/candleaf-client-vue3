export async function getProfile(id: string) {
  const res = await fetch(`http://localhost:5001/api/v1/user/${id}`, {
    credentials: "include",
    headers: { 'Content-Type': 'application/json' },
  });
  if (!res.ok) throw new Error("Failed to fetch profile");
  return res.json();
}
