import { createStore } from "vuex";
import { testPosts } from '../05.microblog/listPosts';

const delay = () => new Promise(res => setTimeout(res, 1000));

// Create module posts
const posts = {
  namespaced: true,
  // similar to data() {return{}}
  state() {
    return {
      postIdClicked: null,
      all: []
    }
  },
  // called with commit()
  mutations: {
    setPostIdClicked(state, postIdClicked) {
      state.postIdClicked = postIdClicked
    },
    setPosts(state, posts) {
      state.all = posts;
    }
  },
  // called with dispatch(), actions can be asynchronous
  actions: {
    async fetch(ctx, payload) {
      await delay();
      console.log(payload);
      ctx.commit('setPosts', testPosts)
    }
  },

  // getters
  getters: {
    currentPost(state) {
      return state.all.find(x => {
        return x.id === state.postIdClicked
      })
    }
  }
}

// ----------- Create store ----------- // 
export const store = createStore({
  // Register module
  modules: {
    posts // access module => store.state.posts.posts
  }
})