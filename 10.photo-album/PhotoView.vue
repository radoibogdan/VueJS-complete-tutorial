<template>
  <img 
    v-for="photo in photos" 
    :src="photo.thumbnailUrl" 
    :key="photo.id"
  >
</template>

<script>
  import { useStore } from 'vuex';
  import { computed, watchEffect } from 'vue';
  import { useRoute } from 'vue-router';

  export default {
    setup() {
      const store = useStore();
      const route = useRoute();

      //Called on initial load, and if variable changes
      watchEffect(() => {
        const id = route.params.id;
        if (!id) {
          return
        }
        store.dispatch('photos/getPhotosByAlbum', {albumId: id})
      })

      const photos = computed(() => {
        return store.state.photos.all;
      })

      return {
        photos
      }
    }
  }
</script>