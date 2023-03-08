<template>
{{ store.state.count }}
</template> 


<!------------------------------- SCRIPT ------------------------------->
<script>
  import { useStore } from 'vuex';

  export default {
    setup() {
      const store = useStore();
      // return variables to be used in template
      return {
        store
      }
    }
  }
</script>


<!-------------------------------- CSS --------------------------------->
<style scoped>

</style>