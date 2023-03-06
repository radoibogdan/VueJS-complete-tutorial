<template>
  <div class="cards">
    <!-- vue will combine class + :class -->
    <!-- {opace : true} will attach class opace if True -->
    <card 
      v-for="pokemon in pokemons" 
      :key="pokemon.id"
      @click="click(pokemon)"
      :class="{
        opace : selectedId && pokemon.id !== selectedId
      }"
      class="card"
    >
      <template v-slot:title>
        {{ pokemon.name }} #{{ pokemon.id }}
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

<script>
  import Card from './Card.vue';

  export default {
    components: {
      Card
    },
    props: {
      pokemons: {
        type: Array,
        default: []
      },
      selectedId: {
        type: Number
      }
    },
    methods: {
      click(pokemon) {
        this.$emit('chosenPokemon', pokemon)
      }
    }
  }
</script>

<style scoped>
img {
  width: 100%;
}
.cards {
  display: flex;
}

.card:hover {
  opacity: 1;
}

.opace {
  opacity: 0.5;
}
</style>