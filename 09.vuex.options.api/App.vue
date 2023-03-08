<template>
  <button v-for="post in posts" @click="click(post)"> 
    {{ post.title }}
  </button>
  <h3>Id post cliqué : {{ postIdClicked ?? ' -- Pas de click pour le moment --' }}</h3>

  <div v-if="currentPost">
    <h1>{{ currentPost.title }}</h1>
    <h4>{{ currentPost.content }}</h4>
  </div>
</template> 


<!------------------------------- SCRIPT ------------------------------->
<script>
  export default {
    created() {
      this.$store.dispatch('posts/fetch', 'additional info can be added here')
    },

    computed: {
      posts() {
        return this.$store.state.posts.all
      },
      currentPost() {
        return this.$store.getters['posts/currentPost'];
      },
      postIdClicked() {
        return this.$store.state.posts.postIdClicked;
      }
    },

    methods: {
      click(post) {
        this.$store.commit('posts/setPostIdClicked', post.id);
      }
    }
  }
</script>


<!-------------------------------- CSS --------------------------------->
<style scoped>
button {
  width: 100px;
  height: auto;
  border: 2px solid #03ff03;
  border-radius: 5px;
  background-color: #fff;
  color: red;
  font-weight: 700;
}

button:hover {
  background-color: #03ff03;
}
</style>