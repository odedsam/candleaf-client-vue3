import { defineStore } from 'pinia';
import { ref } from 'vue';

export type User = {
id:string | number;
name:string
email:string;
}
export type Credentials = {
email:string;
password:string;
}

export const useUserStore = defineStore('user', () => {
  const user = ref<User| null>(null);
  const token = ref<string | null>(null);

  async function login(credentials:Credentials) {
    const res = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await res.json();
    user.value = data.user;
    token.value = data.token;
  }

  const logout=()=> {
    user.value = null;
    token.value = null;
  }

  return { user, token, login, logout };
});
