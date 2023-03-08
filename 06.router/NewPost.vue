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
import { reactive } from 'vue';
import { usePosts } from './usePosts'

  export default {
    setup() {
      const postStore = usePosts();
      const newPost = reactive({
        title: '',
        content: ''
      })

      const submit = () => {
        postStore.addPost({
          id: postStore.posts.value.length + 1,
          title: newPost.title,
          content: newPost.content
        })
      }
      // return variables to be used in template
      return {
        submit,
        newPost,
      }
    }
  }
</script>


<!-------------------------------- CSS --------------------------------->
<style scoped>

</style>