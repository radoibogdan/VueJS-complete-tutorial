<template>
  <button @click="likePost">Like</button> 
  {{ post.likes }}
  <hashtag 
    v-for="hashtag in post.hashtags" 
    :key="hashtag" 
    :hashtag="hashtag"
  />
</template> 


<!------------------------------- SCRIPT ------------------------------->
<script>
  import Hashtag from './Hashtag.vue';
import { store } from './store';

  export default {
    components: { Hashtag },
    props: {
      post: {
        type: Object,
        required: true
      }
    },
    setup(props) {
      const likePost = () => {
        store.incrementLikes(props.post);
      }

      return {
        likePost
      }
    }
  }
</script>


<!------------------------------- CSS ------------------------------->
<style scoped>

</style>