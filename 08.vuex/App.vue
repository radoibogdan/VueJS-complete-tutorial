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
        store.commit('setPostIdClicked', post.id);
      }

      const fetchData = () => {
        store.dispatch('fetchPosts', 'additional info can be added here');
      }

      const currentPost = computed(() => {
        return store.state.posts.find(x => {
          return x.id === store.state.postIdClicked
        })
      })

      // Called after component is rendered in the DOM
      onMounted(() => {
        fetchData();
      })

      return {
        postIdClicked: computed(() => store.state.postIdClicked),
        posts: computed(() => store.state.posts),
        click,
        currentPost
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