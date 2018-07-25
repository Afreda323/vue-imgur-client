<template>
  <v-container>
    <v-layout v-if="loadingImages" fill-height justify-center align-center>
      <v-progress-circular 
        indeterminate 
        size="90"
      />
    </v-layout>
    <h1 v-if="noImages">0 Images Found</h1>
    <v-card v-else v-for="image in allImages">
      <v-card-media
        :src="image.link"
        contain
        height="200px"
      >
      </v-card-media>
    </v-card>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: "GalleryScreen",
  methods: mapActions(['fetchImages']),
  computed: {
    ...mapGetters(['allImages', 'loadingImages']),
    noImages() {
      return !this.loadingImages && this.allImages.length < 1
    },
  },
  created() {
    this.fetchImages()
  },
}
</script>