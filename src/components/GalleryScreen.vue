<template>
  <v-container class="container" v-if="isLoggedIn">
    <v-layout v-if="loadingImages" fill-height justify-center align-center>
      <v-progress-circular 
        indeterminate 
        size="90"
      />
    </v-layout>
    <h1 v-if="noImages">0 Images Found</h1>
    <v-card v-else v-for="image in allImages" class="card-wrap">
      <v-card-media
        :src="image.link"
        contain
        height="200px"
      >
      </v-card-media>
    </v-card>
  </v-container>
  <v-container v-else>
    <h1>Log in to get started</h1>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: "GalleryScreen",
  methods: mapActions(['fetchImages',]),
  computed: {
    ...mapGetters(['allImages', 'loadingImages', 'isLoggedIn']),
    noImages() {
      return !this.loadingImages && this.allImages.length < 1
    },
  },
  created() {
    this.fetchImages()
  },
}
</script>

<style scoped>
  .container {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .card-wrap {
    padding: 10px 20px;
    margin: 2px 0;
    width: 33%;
  }
  @media (max-width: 900px) {
    .card-wrap {
      width: 49%;
    }
  }
  @media (max-width: 600px) {
    .card-wrap {
      width: 100%;
    }
  }
</style>