<template>
  <div id="wrapper">
    <!-- submit.prevent <=> $e.preventDefault -->
    <form @submit.prevent="submit">
      <my-input 
      name="Username"
      :rules="{ required: true, min: 5 }"
      :value="username.value"
      :error="username.error"
      @update="update"
      />
      <my-input 
        name="Password"
        :rules="{ required: true, min: 10 }"
        :value="password.value"
        :error="password.error"
        type="password"
        @update="update"
      />
      <my-button
        background = "darkslateblue"
        color = "white"
        :disabled = "!valid"
      />
    </form>
  </div>
</template>

<script>
import MyButton from './MyButton.vue'
import MyInput from './MyInput.vue'

export default {
  components: {
    MyButton,
    MyInput
  },
  data() {
    return {
      valid: true,
      username: {
        value: 'Ton nom ici',
        error: ''
      },
      password: {
        value: 'pass',
        error: ''
      }
    }
  },
  computed: {
    valid() {
      return (
        !this.username.error && !this.password.error
      );
    }
  },
  methods: {
    update({name, value, error}) {
      console.log('update method triggered')
      this[name].value = value;
      this[name].error = error;
    },
    submit() {
      console.log('Form submittted.');
    }
  }
}
</script>

<style scoped>
#wrapper {
  display: flex;
  justify-content: center;
  margin-top: 200px;
}
body {
  font-family: Arial;
}
form {
  max-width: 400px;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>