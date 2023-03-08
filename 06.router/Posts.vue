<template>
  <h2>Posts</h2>
  <router-link to="/posts/new">New post</router-link>
  <ul>
    <li v-for="post in posts" :key="post.id">
      <router-link :to="`/posts/${post.id}`">
        {{ post.title }} 
      </router-link>
    </li>
  </ul>
  <router-view />
</template> 
  
  
<!------------------------------- SCRIPT ------------------------------->
<script>
import { usePosts } from './usePosts';

  export default {
    setup() {
      const postStore = usePosts();

      // return variables to be used in template
      return {
        posts: postStore.posts
      }
    }
  }
</script>


<!-------------------------------- CSS --------------------------------->
<style scoped>

</style>