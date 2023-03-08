<template>
  <h2>{{ post.title }}</h2>
  <p>{{ post.content}}</p>
</template> 
  
  
<!------------------------------- SCRIPT ------------------------------->
<script>
  export default {
    props: {
      posts: {
        type: Array,
        default: []
      }
    },
    computed: {
      post() {
        return this.posts.find(
          x => x.id === parseInt(this.$route.params.id, 10)
        );
      }
    }
  }
</script>


<!-------------------------------- CSS --------------------------------->
<style scoped>

</style>