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
  import { computed, onMounted } from 'vue';
  import { useStore } from 'vuex';

  export default {
    setup() {
      const store = useStore();

      const click = (post) => {
        store.commit('posts/setPostIdClicked', post.id);
      }

      const fetchData = () => {
        store.dispatch('posts/fetch', 'additional info can be added here');
      }

      // Called after component is rendered in the DOM
      onMounted(() => {
        fetchData();
      })

      return {
        click,
        posts: computed(() => store.state.posts.all),
        postIdClicked: computed(() => store.state.posts.postIdClicked),
        currentPost: computed(() => store.getters['posts/currentPost']),
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