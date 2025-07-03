<script setup>
import { ref } from 'vue'
import Router from '@/scripts/routers'
import { login } from '@/scripts/auth'

const email = ref('')
const password = ref('')

const handleLogin = async (email, password) => {
  // console.log(email, password)
  const validLogin = await login(email, password)
  // console.log(validLogin)
  validLogin ? Router.push({ path: '/' }) : console.log('login error')
}
</script>

<template>
  <div
    class="h-[100svh] flex flex-col items-center justify-center gap-2 *:w-1/4 text-center *:not-first:border-1"
  >
    <h1>Budget App</h1>
    <input type="text" v-model="email" placeholder="Email" />
    <input type="password" v-model="password" placeholder="Password" />
    <button @click="handleLogin(email, password)">Login</button>
  </div>
</template>
