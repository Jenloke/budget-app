<script setup>
import { ref } from 'vue'
import Router from '@/scripts/routers'
import { login } from '@/scripts/auth'

const email = ref('')
const password = ref('')

const handleLogin = async (email, password) => {
  const validLogin = await login(email, password)
  validLogin ? Router.push({ path: '/' }) : console.log('login error')
}
</script>

<template>
  <div
    class="h-[100svh] pb-50 flex flex-col items-center justify-center gap-10 bg-[#ffcbe1] *:w-2/3 md:*:w-1/3 text-center"
  >
    <h1 class="text-6xl">☊ Buddie</h1>
    <div
      class="flex flex-col gap-2 *:not-first:shadow-lg *:p-2 *:border-2 *:rounded-lg *:outline-none"
    >
      <input class="focus:bg-[#dcccec]" type="text" v-model="email" placeholder="Email" />
      <input class="focus:bg-[#dcccec]" type="password" v-model="password" placeholder="Password" />
      <button
        class="w-1/2 mt-5 mx-auto transition-color duration-300 hover:bg-[#dcccec]"
        @click="handleLogin(email, password)"
      >
        Login
      </button>
    </div>
  </div>
</template>
