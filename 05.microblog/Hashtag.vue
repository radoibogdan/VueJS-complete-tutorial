<template>
  <div 
    class="hashtag"
    @click="setHashtag"
  >
    #{{ hashtag }}
  </div>
</template> 


<!------------------------------- SCRIPT ------------------------------->
<script>
  import { store } from './store';

  export default {
    props: {
      hashtag: {
        type: String,
        required: true
      }
    },
    setup(props, ctx) {
      const setHashtag = () => {
        store.setHashtag(props.hashtag)
      }

      return {
        setHashtag
      }
    }
  }
</script>


<!-------------------------------- CSS --------------------------------->
<style scoped>
  .hashtag {
    text-decoration: underline;
  }
  .hashtag:hover {
    color: cornflowerblue;
  }
</style>