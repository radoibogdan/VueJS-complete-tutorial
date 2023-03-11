export const photos = {
  namespaced: true,
  state() {
    return {
      all: [],
      cache: {},
    }
  },

  mutations: {
    setPhotosForCurrentAlbum(state, { photos, albumId }) {
      state.all = photos;
      state.cache[albumId] = photos;
    }
  },

  // WE DONT CHANGE THE STATE IN ACTIONS !!!
  actions: {
    async getPhotosByAlbum(ctx, { albumId }) {
      if (ctx.state.cache[albumId]) {
        ctx.commit('setPhotosForCurrentAlbum', ctx.state.cache[albumId]);
        return;
      }
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
      const json = await response.json();
      ctx.commit('setPhotosForCurrentAlbum', { photos: json, albumId });
    }
  }
}