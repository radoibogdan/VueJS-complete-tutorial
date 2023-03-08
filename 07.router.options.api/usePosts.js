import { testPosts } from '../05.microblog/listPosts'
import { ref } from 'vue'

export function usePosts() {
  const posts = ref(testPosts);

  const addPost = (post) => {
    posts.value.push(post);
  }

  return {
    posts,
    addPost
  }
}
