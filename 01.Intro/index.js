import * as Vue from 'vue/dist/vue.esm-bundler.js'

const Hello = {
  props: ['greeting'],
  template: `<p> {{ greeting }} !</p>`
}

const Num = {
  props: ['number'],
  template: `
    <button 
      v-bind:class="getClass(number)"
      v-on:click="click"
    >
      {{ number }}
    </button>`,
  methods: {
    isEven(number) {
      return number % 2 === 0
    },
    getClass(number) {
      return this.isEven(number) ? 'blue' : 'red'
    },
    click() {
      this.$emit('chosenNumber', this.number)
    }
  }
}

const app = Vue.createApp({
  // Register custom components
  components : {
    Hello,
    Num
  },

  template : `

    <p>Custom component</p>
    <hello greeting="Salut"/>
    <hello greeting="Bonjour"/>
    
    <button v-on:click="increment"> Increment </button>
    
    <p> {{ count }} </p>


    <input v-model="value" /> <br />
    Valeur : {{ value }} <br />
    Valeur Radio : {{ valueRadio }} <br />
    Valeur Checkbox : {{ valueCheckbox }} <br />


    <input type="radio" v-model="valueRadio" value="a"/>
    <input type="radio" v-model="valueRadio" value="b"/>

    <input type="checkbox" v-model="valueCheckbox" value="a"/>
    <input type="checkbox" v-model="valueCheckbox" value="b"/>

    <div class="red">{{ error }}</div>

    <num 
      v-for="number in numbers"
      v-bind:number="number"
      v-on:chosenNumber="addNumberToList"
    />
    <hr />
    <num 
      v-for="number in numbersFromChildHistory"
      v-bind:number="number"
    />
  `,

  // variables available in the file
  data() {
    return {
      count: 0,
      value: 'bla',
      valueRadio: 'a',
      valueCheckbox: ['a'],
      numbers: [1,2,3,4,5,6,7,8,9,10],
      numbersFromChildHistory: []
    }
  },

  // A function with NO ARGUMENTS
  // computed properties - derived data, sub set of exising data
  computed: {
    evenList() {
      return this.numbers.filter( num => this.isEven(num))
    },
    error() {
      if (this.value.length < 5) {
        return 'La taille doit avoir min 5 caractères.'
      } 
    }
  },

  methods:{
    increment() {
      // this = access to all var in data()
      this.count += 1
    },
    addNumberToList(number) {
      this.numbersFromChildHistory.push(number);
    }
  }
})

app.mount('#app');