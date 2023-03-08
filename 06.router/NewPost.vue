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
import { useRouter } from 'vue-router';
import { usePosts } from './usePosts'

  export default {
    setup() {
      const postStore = usePosts();
      // used to redirect to another route
      const router = useRouter();
      const newPost = reactive({
        title: '',
        content: ''
      })

      const submit = () => {
        const id = postStore.posts.value.length + 1;
        postStore.addPost({
          id,
          title: newPost.title,
          content: newPost.content
        });

        router.push(`/posts/${id}`)
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