export const albums = {
  namespaced: true,
  state() {
    return {
      all: []
    }
  },

  mutations: {
    setAlbums(state, albums) {
      state.all = albums;
    }
  },

  // WE DONT CHANGE THE STATE IN ACTIONS !!!
  actions: {
    async fetch(ctx) {
      const response = await fetch('https://jsonplaceholder.typicode.com/albums');
      const json = await response.json();
      ctx.commit('setAlbums',json);
    }
  }
}