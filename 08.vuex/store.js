import { createStore } from "vuex";
import { testPosts } from '../05.microblog/listPosts';

const delay = () => new Promise(res => setTimeout(res, 1000));

export const store = createStore({
  // similar to data() {return{}}
  state() {
    return {
      postIdClicked: null,
      posts: []
    }
  },
  // called with commit()
  mutations: {
    setPostIdClicked(state, postIdClicked) {
      state.postIdClicked = postIdClicked
    },
    setPosts(state, posts) {
      state.posts = posts;
    }
  },
  // called with dispatch(), actions can be asynchronous
  actions: {
    async fetchPosts(ctx, payload) {
      await delay();
      console.log(payload);
      ctx.commit('setPosts', testPosts)
    }
  }
})