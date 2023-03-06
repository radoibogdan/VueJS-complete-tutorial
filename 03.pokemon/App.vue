<template>
  <div class="cards">
    <card 
      v-for="pokemon in pokemons" 
      :key="pokemon.id" 
    >
      <template v-slot:title>
        {{ pokemon.name }}
      </template>
      <template v-slot:content>
        <img :src="pokemon.sprite" :alt="pokemon.name">
      </template>
      <template v-slot:description>
        <div 
          v-for="type in pokemon.types" 
          :key="type"
        >
          {{ type }}
        </div>
      </template>
    </card>
  </div>
</template> 

<!------------------------------- SCRIPT ------------------------------->
<script>
  import Card from './Card.vue';
  const api = 'https://pokeapi.co/api/v2/pokemon';
  const ids = [1, 4, 7];

  export default {
    data() {
      return {
        pokemon: '',
        pokemons: []
      }
    },
    components: {
      Card
    },
    // lifecycle hook, created in memory but not rendered in the DOM
    created() {
      this.fetchData();
    },
    // lifecycle hook, created and inserted in the DOM
    mounted() {
      // console.log('Mounted', this.$el);
    },
    methods: {
      async fetchOnePokemon() {
        const response = await fetch(`${api}/1`);
        const json = await response.json();
        this.pokemon = {
          id: json.id,
          name: json.name,
          sprite: json.sprites.other['official-artwork'].front_default,
          types: json.types.map(typeAndSlot => typeAndSlot.type.name)
        }
      },
      async fetchData() {
        const responses = await Promise.all(
          ids.map(id => fetch(`${api}/${id}`))
        )
        const json = await Promise.all(
          responses.map(data => data.json())
        );
        this.pokemons = json.map(datum => ({
          id: datum.id,
          name: datum.name,
          sprite: datum.sprites.other['official-artwork'].front_default,
          types: datum.types.map(typeAndSlot => typeAndSlot.type.name)
        }))
      }
    }
  }
</script>


<!------------------------------- CSS ------------------------------->
<style scoped>
img {
  width: 100%;
}
.cards {
  display: flex;
}
</style>