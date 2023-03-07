<template>
  <button @click="a++"> Add +1 to var a</button>
  <button @click="b++"> Add +1 to var b</button>

  <h2>History here</h2>
  <p v-for="change in history" :key="change"
  >
    {{ change }}
  </p>
</template> 

<!------------------------------- SCRIPT ------------------------------->
<script>
import { useNumbers } from './useNumbers';

  export default {
    setup() {
      return useNumbers();
    }
  }
</script>

<!------------------------------- CSS ------------------------------->
<style scoped>
button {
  height: 100px;
  width: 100px;
  font-style: 40px;
}

p {
  font-style: 40px;
}
</style>