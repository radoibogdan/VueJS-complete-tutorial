<template>
  <pokemon-cards
    :pokemons="pokemons"
    @chosenPokemon="fetchEvolutions"
    :selectedId="selectedId"
  />
  <pokemon-cards :pokemons="evolutions" />
</template> 

<!------------------------------- SCRIPT ------------------------------->
<script>
  import PokemonCards from './PokemonCards.vue';

  const api = 'https://pokeapi.co/api/v2/pokemon';
  const IdsPokemon = [1, 4, 7];

  export default {
    data() {
      return {
        pokemon: '',
        pokemons: [],
        evolutions: [],
        selectedId: null,
      }
    },
    components: {
      PokemonCards
    },
    // lifecycle hook, created in memory but not rendered in the DOM
    async created() {
      this.pokemons = await this.fetchData(IdsPokemon);
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
      async fetchData(ids) {
        const responses = await Promise.all(
          ids.map(id => fetch(`${api}/${id}`))
        )
        const json = await Promise.all(
          responses.map(data => data.json())
        );
        return json.map(datum => ({
          id: datum.id,
          name: datum.name,
          sprite: datum.sprites.other['official-artwork'].front_default,
          types: datum.types.map(typeAndSlot => typeAndSlot.type.name)
        }))
      },
      async fetchEvolutions(pokemon) {
        this.evolutions = await this.fetchData(
          [pokemon.id + 1, pokemon.id + 2]
        );
        this.selectedId = pokemon.id;
        
      }
    }
  }
</script>


<!------------------------------- CSS ------------------------------->
<style scoped>

</style>