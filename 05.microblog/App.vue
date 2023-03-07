<template>
  <input :value="currentTag" @input="onInputTagEdit"/>
  <card 
    v-for="post in filteredPosts" 
    :key="post.id"
  >
    <template v-slot:title>
        {{ post.title }}
    </template>

    <template v-slot:content>
      {{ post.content }}
    </template>

    <template v-slot:description>
      <controls :post="post" />
    </template>
      
  </card>
</template> 

<!------------------------------- SCRIPT ------------------------------->
<script>
  import {reactive, computed } from 'vue';
  import Card from '../03.pokemon/Card.vue';
  import Controls from './Controls.vue';
  import { store } from './store';

  export default {
    components: {
      Card,
      Controls
    },
    setup() {
      const onInputTagEdit = ($event) => {
        store.setHashtag($event.target.value)
      }

      // return variables to be used in template
      return {
        store: store,
        filteredPosts: computed(() => store.filteredPosts),
        currentTag: computed(() => store.state.currentTag),
        onInputTagEdit
      };
    }
  }
</script>

<!------------------------------- CSS ------------------------------->
<style scoped>

</style>