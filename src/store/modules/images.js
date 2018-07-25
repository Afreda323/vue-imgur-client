import imgur from '../../api/imgur'

const state = {
  images: [],
  loadingImages: false,

  upload: {
    loading: false,
    success: false,
    failure: false,
  }
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
  uploadImage() { },
}

const mutations = {
  uploadImageRequest(state) {
    state.upload.loading = true
  },
  uploadImageSuccess(state) {
    state.upload.loading = false
    state.upload.success = true
  },
  uploadImageFailure(state) {
    state.upload.loading = false
    state.upload.failure = true
  },
  clearMessages(state) {
    state.upload.loading = false
    state.upload.success = false
    state.upload.failure = false
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