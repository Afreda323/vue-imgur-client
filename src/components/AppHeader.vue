<template>
  <v-toolbar>
    <v-toolbar-title>Image Storage</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items v-if="isLoggedIn">
      <v-btn to='/' flat>Upload</v-btn>
      <v-btn to='/galleries' flat>Galleries</v-btn>
      <v-btn flat @click="logout">Logout</v-btn>
    </v-toolbar-items>
    <v-toolbar-items v-else>
      <v-btn flat @click="login">Login</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'AppHeader',
  methods: mapActions(['login', 'logout']),
  computed: mapGetters(['isLoggedIn']),
}
</script>