<!-- App.vue -->

<template>
  <h1>Hello App!</h1>
  <nav>
    <router-link to="/"> Home </router-link> |
    <router-link to="/dashboard"> Dashboard </router-link> |
    <router-link to="/login"> Login </router-link> |
  </nav>
  <router-view />
</template>

<script>
import { auth } from './main'

export default {
  computed: {
    user() {
      return auth.currentUser
    }
  }
}
</script>





