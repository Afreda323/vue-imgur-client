<template>
  <v-app dark>
    <AppHeader />
    <router-view></router-view>
  </v-app>
</template>

<script>
import AppHeader from './components/AppHeader'

export default {
  name: "App",
  components: {
    AppHeader
  }
}
</script>

<style>
  
</style>