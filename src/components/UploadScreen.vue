<template>
  <v-container fill-height align-center justify-center>
    <v-card>
      <div class="upload-wrap">
        <input 
          @change="uploadImages($event.target.files)" 
          type="file" 
          multiple
          accept="image/*"
        />
        <span>Drag files here! (up to 10Mb)</span>
      </div>
    </v-card>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: "UploadScreen",
  methods: mapActions(['uploadImages'])
}
</script>

<style>
  .upload-wrap {
    height: 30vh;
    min-height: 300px;
    width: 400px;
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .upload-wrap:hover {
    background: #666;
  }
  .upload-wrap input {
    height: 100%;
    width: 100%;
    position: absolute;
    opacity: 0;
  }
</style>