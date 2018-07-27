import imgur from '../../api/imgur'
import { router } from '../../main'

const state = {
  images: [],
  loadingImages: false,

  uploadLoading: false
}

const getters = {
  allImages: state => state.images,
  loadingImages: state => state.loadingImages,
  upload: state => state.upload,
}

const actions = {
  async fetchImages({ rootState, commit }) {
    commit('fetchImageRequest')

    const { token } = rootState.auth
    const { data: { data } } = await imgur.fetchImages(token)
    console.log(data)
    commit('setImages', data)
  },
  async uploadImages({ rootState, commit }, images) {
    commit('uploadImageRequest')
    const { token } = rootState.auth
    await imgur.uploadImages(images, token)
    commit('uploadImageDone')
    router.push('/')
  },
}

const mutations = {
  uploadImageRequest(state) {
    state.uploadLoading = true
  },
  uploadImageDone(state) {
    state.uploadLoading = false
  },
  fetchImageRequest(state) {
    state.loadingImages = true
  },
  setImages(state, images) {
    state.images = images
    state.loadingImages = false
  },
}

export default { state, getters, actions, mutations }