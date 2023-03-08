<template>
  <h2>{{ post.title }}</h2>
  <p>{{ post.content}}</p>
</template> 
  
  
<!------------------------------- SCRIPT ------------------------------->
<script>
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';
  import { usePosts } from './usePosts';


  export default {
    setup() {
      const route = useRoute();
      const postStore = usePosts();

      const post = computed(() => 
        postStore.posts.value.find(x => x.id === parseInt(route.params.id, 10))
      );
      // return variables to be used in template
      return {
        post
      }
    }
  }
</script>


<!-------------------------------- CSS --------------------------------->
<style scoped>

</style>