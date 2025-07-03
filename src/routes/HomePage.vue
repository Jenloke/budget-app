<script setup>
import { logout } from '@/scripts/auth'
import Router from '@/scripts/routers'

const handleLogout = async () => {
  const validLogin = await logout()
  validLogin ? Router.push({ path: '/login' }) : console.log('Logout Error')
}
</script>

<template>
  <div class="h-[100svh] pb-50 flex flex-col items-center justify-center gap-10 bg-[#ffcbe1]">
    <h1>Home Page</h1>
    <h2
      class="p-2 w-1/2 mx-auto transition-color duration-300 hover:bg-[#dcccec]"
      @click="handleLogout()"
    >
      True Logout
    </h2>
  </div>
</template>
