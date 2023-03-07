<template>
  <button @click="increment"> {{ count }}</button>
  <button @click="increase('a')"> {{ numbers.a }}</button>
  <button @click="increase('b')"> {{ numbers.b }}</button>
  <p>{{ total }}</p>

  
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
import { ref, reactive, computed, watch, watchEffect } from 'vue';

  export default {
    setup() {
      // ref used with primitive values + objects : number, string
      const count = ref(0);
      // reactive used with objects, can't be used with primitives
      const numbers = reactive({
        a: 1,
        b: 2
      })

      const a = ref(0);
      const b = ref(0);
      const history = ref([]);

      const increment = () => {
        count.value++;
      }

      const increase = (n) => {
        numbers[n]++
      }

      const total = computed(() => {
        return count.value + numbers.a + numbers.b
      })

      // code not runned at initial render
      // runned -> add "immediate: true"
      watch(count, (newVal) => {
        console.log(newVal);
      },{
        immediate: true // runs for initial render
      });

      watch([a, b], ([newA, newB], [oldA, oldB]) => {
        if (newA !== oldA) {
          console.log(`${oldA} -> ${newA}`);
          history.value.push(`A: ${oldA} -> ${newA}`);
        }
        if (newB !== oldB) {
          console.log(`${oldB} -> ${newB}`);
          history.value.push(`B: ${oldB} -> ${newB}`);
        }
        
      });


      // runs for initial render also
      watchEffect(() => {
        console.log(
          'Log on initial render or if this value changes -> ' + numbers.a
        );
      });

      return {
        a,
        b,
        history,
        count,
        increment,
        numbers,
        increase,
        total
      }
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