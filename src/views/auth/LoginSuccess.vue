<script setup lang="ts">
import {onMounted, ref} from 'vue'
import {useRouter} from 'vue-router'
import {useAuthStore} from '@/stores/authStore'
import { storeToRefs } from 'pinia'


const router = useRouter()
const authStore = useAuthStore()
const { user } = storeToRefs(authStore)


onMounted(() => {
  if (user) {
    console.log(user.value);
    setTimeout(()=>{
      router.push('/')
    },3000)
    
  }
})
</script>

<template>
  <div v-if="user?.name">
    <h1 class="text-emerald-400">Welcome, {{ user.name.split(' ')[0]  }}! Logging you in...</h1>
    <i-tabler-loader class="w-6 h-6 animate-spin text-emerald-500" />
  </div>
  <div v-else>
    <p> Logging you in...</p>
  </div>
</template>







<!-- {
  "user": {
      "_id": "67df7344ad829779009e3543",
      "name": "Oded Shmuel",
      "email": "oded970@gmail.com",
      "avatar": "https://lh3.googleusercontent.com/a-/ALV-UjX0-e75t1Ze3dLrfG6ihw64SCkHBRhLavAFExJ104s4iQrhuxIs-2RJHm9DPBwZ3QyfEmct_go3HXSDWG5ZXjAPSF7IvThzsk2kkoIYovSzoenriBQlf4nbBLbLt0_FtkberAhESEK-shgWHIqFrnVcRLkJnADqTWRXjb26ftDhUionmfP9veNR9Wan37YlranbDynrD2nFhqJLgSurrXEyvjBW4VxqwkBmvQeNgEzJXzRRfGHG1X90jFvD6ZJKH5n6y_cDMAFHnEPZqW_1MFJdisfG_O7FvPb55fgkkLRrDUzqQKA2LmpRJV63QJ2d77tjp51wc93Ph3cg3M2WnrdVh1ycEj4ora15Hh2s1DsR5ooaX_dbVBm-lBI9k8ejE_wnIgsw8pYt3gPa2lvqwqMrmNX1ESPeouLSzmGQrsIaKK8PhYUh_cSIO__JCakVEAKYUZ1RtV4uOXnNIxeTM8QsQwhuubvMg7jtWQtcV9v26HsRa-S-pXUmINKsnqPMfoSdG5ELg0rl2LejhoosRfrPik5-DgiIsyrshph-WOvrzbBbJ2fxmTi6I2K2az0d4fl6V3fawDnpSupNt2NkVqBu6V67BttvEahgBji71ldKzP6rZv2rJebGCY3H2Ho89HmDaIndZrGXrwKRj0McFW1y4jfOWm_sU-kOESDWZ8AIJX_DBXS7oxIO_ohl0jcZPu5p1va9LojxSZMLDMXE_NUfiS1yxN3y2E72T-OgHw33WCNrGPpd_NRNwM7EMuAXX9nWx3vqXYt92duldUDToKw4DmCGBAD9xIgYjcsbFus8UaeweyhN9VEiJ8_qYH584wokYgtUJsrho7ldovjTzPr5ZKDNR57XHevNrUdrZz_Q5BtlBxbNkn6wKuGKd9kH66PSqkqKwojUFOaJ3IT4txLKcC0G0oO-XrJTLISYuLNBEHbWRWxFLg51IyRsxHtI4rl4PqxDh0VZjL94dr4MOg6hiBsX=s96-c",
      "role": "user",
      "provider": "google",
      "email_verified_at": "Sun Mar 23 2025 04:34:44 GMT+0200 (Israel Standard Time)",
      "createdAt": "23.3.2025, 4:34:44",
      "updatedAt": "23.3.2025, 4:34:44",
      "__v": 0
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RmNzM0NGFkODI5Nzc5MDA5ZTM1NDMiLCJuYW1lIjoiT2RlZCBTaG11ZWwiLCJlbWFpbCI6Im9kZWQ5NzBAZ21haWwuY29tIiwiYXZhdGFyIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FMVi1ValgwLWU3NXQxWmUzZExyZkc2aWh3NjRTQ2tIQlJoTGF2QUZFeEoxMDRzNGlRcmh1eElzLTJSSkhtOURQQndaM1F5ZkVtY3RfZ28zSFhTRFdHNVpYakFQU0Y3SXZUaHpzazJra29JWW92U3pvZW5yaUJRbGY0bmJCTGJMdDBfRnRrYmVyQWhFU0VLLXNoZ1dISXFGcm5WY1JMa0puQURxVFdSWGpiMjZmdERoVWlvbm1mUDl2ZU5SOVdhbjM3WWxyYW5iRHluckQybkZocUpMZ1N1cnJYRXl2akJXNFZ4cXdrQm12UWVOZ0V6Slh6UlJmR0hHMVg5MGpGdkQ2WkpLSDVuNnlfY0RNQUZIbkVQWnFXXzFNRkpkaXNmR19PN0Z2UGI1NWZna2tMUnJEVXpxUUtBMkxtcFJKVjYzUUoyZDc3dGpwNTF3YzkzUGgzY2czTTJXbnJkVmgxeWNFajRvcmExNUhoMnMxRHNSNW9vYVhfZGJWQm0tbEJJOWs4ZWpFX3duSWdzdzhwWXQzZ1BhMmx2cXdxTXJtTlgxRVNQZW91TFN6bUdRcnNJYUtLOFBoWVVoX2NTSU9fX0pDYWtWRUFLWVVaMVJ0VjR1T1huTkl4ZVRNOFFzUXdodXVidk1nN2p0V1F0Y1Y5djI2SHNSYS1TLXBYVW1JTktzbnFQTWZvU2RHNUVMZzBybDJMZWpob29zUmZyUGlrNS1EZ2lJc3lyc2hwaC1XT3ZyemJCYkoyZnhtVGk2STJLMmF6MGQ0Zmw2VjNmYXdEbnBTdXBOdDJOa1ZxQnU2VjY3QnR0dkVhaGdCamk3MWxkS3pQNnJadjJySmViR0NZM0gySG84OUhtRGFJbmRackdYcndLUmowTWNGVzF5NGpmT1dtX3NVLWtPRVNEV1o4QUlKWF9EQlhTN294SU9fb2hsMGpjWlB1NXAxdmE5TG9qeFNaTUxETVhFX05VZmlTMXl4TjN5MkU3MlQtT2dIdzMzV0NOckdQcGRfTlJOd003RU11QVhYOW5XeDN2cVhZdDkyZHVsZFVEVG9LdzREbUNHQkFEOXhJZ1lqY3NiRnVzOFVhZXdleWhOOVZFaUo4X3FZSDU4NHdva1lndFVKc3JobzdsZG92alR6UHI1WktETlI1N1hIZXZOclVkclp6X1E1QnRsQnhiTmtuNndLdUdLZDlrSDY2UFNxa3FLd29qVUZPYUozSVQ0dHhMS2NDMEcwb08tWHJKVExJU1l1TE5CRUhiV1JXeEZMZzUxSXlSc3hIdEk0cmw0UHF4RGgwVlpqTDk0ZHI0TU9nNmhpQnNYPXM5Ni1jIiwicm9sZSI6InVzZXIiLCJlbWFpbF92ZXJpZmllZF9hdCI6IlN1biBNYXIgMjMgMjAyNSAwNDozNDo0NCBHTVQrMDIwMCAoSXNyYWVsIFN0YW5kYXJkIFRpbWUpIiwicHJvdmlkZXIiOiJnb29nbGUiLCJpYXQiOjE3NDI3NzcyOTcsImV4cCI6MTc0MzM4MjA5N30.G7KX1GB6_aRE4GS5wzU_H1dIRljS8qgak9MI-Rs-5Dk"
} -->