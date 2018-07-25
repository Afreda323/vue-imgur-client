<template>
  <v-container>
    <div>Please wait...</div>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'AuthHandler',
  methods: mapActions(['finalizeLogin']),
  created() {
    this.finalizeLogin(window.location.hash)
  },
}
</script>