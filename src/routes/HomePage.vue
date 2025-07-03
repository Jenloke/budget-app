<script setup>
import { logout } from '@/scripts/auth'
</script>

<template>
  <h1>Home Page</h1>
  <h2 @click="logout()">True Logout</h2>
  <RouterLink to="/Login">Logout</RouterLink>
</template>
