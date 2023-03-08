import { createStore } from "vuex";

export const store = createStore({
  // similar to data() {return{}}
  state() {
    return {
      count: 0
    }
  }
})