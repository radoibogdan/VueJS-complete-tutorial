<template>
  <div class="input">
    <div class="label">
    <label :for="name">{{ name }}</label>
    <div class="error">{{ error }}</div>
  </div>
  <!-- v-model = two way binding -->
  <input
    :id="name"
    :value="value"
    :error="error"
    :type="type"
    @input="input"
  />
  </div>
</template>


<!------------------------------ SCRIPTS ------------------------------>
<script>
export default {
  // Declarer les événements pour ne pas voir les warning dans la console
  // Utile pour le "type definition" si typescript est utilisé
  emits: ['update'],
  props: {
    name: {
      type: String,
      required: true
    },
    rules: {
      // min: number
      // required: true
      type: Object,
      default: {}
    },
    value: {
      type: String,
      required: true
    },
    error: {
      type: String,
    }, 
    type: {
      type: String,
      default: "text"
    }
  },

  // Utilisé lors de la création du composant
  created() {
    this.$emit("update", {
      name : this.name.toLowerCase(),
      value: this.value,
      error: this.validate(this.value)
    })
  },

  methods: {
    input($event) {
      this.$emit("update", {
        name : this.name.toLowerCase(),
        value: $event.target.value,
        error: this.validate($event.target.value)
      })
    },
    validate(value) {
      if (this.rules.required && value.length === 0) {
        return `Ce champ ne peut être vide.`
      }
      if (this.rules.min && value.length < this.rules.min) {
        return `Le "${this.name.toLowerCase()}" doit avoir min ${this.rules.min} caractères.`
      }
    }
  }

}
</script>


<!------------------------------ CSS ------------------------------>
<style scoped>
.input {
  display: flex;
  flex-direction: column;
}
.label {
  display: flex;
  justify-content: space-between;
}
.error {
  color: red;
}
.input {
  width: 100%;
}
input {
  box-sizing: border-box;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid silver;
  margin: 2px;
  font-size: 16px;
  width: 100%;
  cursor: pointer;
}
</style>