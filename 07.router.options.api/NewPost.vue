<template>
  <h2>New post</h2>
  
  <form @submit.prevent="submit">
    <input v-model="newPost.title" placeholder="Title here"/>
    <br>
    <textarea v-model="newPost.content" cols="50" rows="10">
      Contenu ici
    </textarea>
    <br>
    <button>Submit</button>
  </form>

</template> 
  

<!------------------------------- SCRIPT ------------------------------->
<script>
  export default {
    emits: ['createPost'],
    data() {
      return {
        newPost : {
          title: '',
          content: ''
        }
      }
    },
    methods: {
      submit() {
        this.$emit('createPost', {
          title: this.newPost.title,
          content: this.newPost.content
        })  
      }
    }
  }
</script>


<!-------------------------------- CSS --------------------------------->
<style scoped>

</style>