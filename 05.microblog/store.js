import { reactive } from "vue";
import { testPosts } from "./listPosts"

class Store {
  constructor() {
    this.state = reactive({
      posts: testPosts,
      currentTag: null,
    });
  }

  setHashtag(tag) {
    this.state.currentTag = tag;
  }

  incrementLikes(post) {
    const postFound = this.state.posts.find(postInStore => postInStore === post);

    if (!postFound) {
      return;
    }

    postFound.likes++;
  }

  get filteredPosts() {
    if (!store.state.currentTag) {
      return store.state.posts;
    }
    return store.state.posts.filter(
      post => post.hashtags.includes(store.state.currentTag)
    );
  }
}

export const store = new Store();