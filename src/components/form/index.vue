<template>
  <form class="form" @submit.prevent>
    <h2 class="h2">Создать список дел</h2>
    <input 
        v-model="title"
        @input="input"
        class='input'
        type="text"
        placeholder="Введите название"
        >
    <button class="button" @click="create">Создать</button>
  </form>
</template>

<script>
export default {
  name: 'form-component',
  data () {
    return {
      title: ''
    }
  },
  methods: {
    input (event) {
      this.title = event.target.value
    },
    create () {
      this.$emit('create', this.title)
      this.title = ''
    }
  }
}
</script>

<style scoped>
  .h2 {
    font-size: 28px;
  }
  .form {
    max-width: 600px;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
  .input {
    border: 1px solid grey;
    border-radius: 8px;
    padding: 10px;
    width: 100%;
    max-width: 300px;
  }
  .button {
    background-color: blue;
    color: white;
    font-size: 14px;
    font-weight: 700;
    padding: 10px 20px;
    width: 100%;
    max-width: 300px;
    border-radius: 8px;
  }
  .button:hover {
    opacity: 0.5;
    cursor: pointer;
  }
</style>