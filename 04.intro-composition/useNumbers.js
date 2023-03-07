import { ref, reactive, computed, watch, watchEffect } from 'vue';

export function useNumbers () {
  const a = ref(0);
  const b = ref(0);
  const history = ref([]);

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


  const total = computed(() => {
    return  count.value + numbers.a + numbers.b
  })

  return {
    a, b, history, total
  }
}