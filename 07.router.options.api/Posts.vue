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
  <router-view 
    @createPost="createPost"
    :posts="posts"
  />
</template> 
  
  
<!------------------------------- SCRIPT ------------------------------->
<script>
import { testPosts } from '../05.microblog/listPosts';

  export default {
    data() {
      return {
        posts: testPosts
      }
    },
    methods: {
      createPost(newPost) {
        const id = this.posts.length + 1;
        this.posts.push({
          id,
          title: newPost.title,
          content: newPost.content,
        });
        this.$router.push(`/posts/${id}`)
      }
    }
  }
</script>


<!-------------------------------- CSS --------------------------------->
<style scoped>

</style>