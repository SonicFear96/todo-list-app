<template>
  <div class="card-component-todo" :class="{'is-done': data.isDone}">
    <div class="number">
      {{index}}
    </div>
    <div class="title">
      {{data.title}}
    </div>
    <div class="button-wrapper">
        <button v-if="!data.isDone" class="button button-done" @click="$emit('isDone', data)">
          Сделано
        </button>
        <button v-if="data.isDone" class="button button-done-none" @click="$emit('isDone', data)">
          Не сделано
        </button>
        <button class="button button-delete" @click="$emit('delete', data)">X</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "card-component-todo",
  props: {
    data: {
      type: Object,
      default: () => {}
    },
    index: Number
  }
}
</script>

<style scoped>
.card-component-todo {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid grey;
  border-radius: 8px;
  align-items: center;
}
.is-done .title {
  text-decoration: line-through;
  color: red;
}
.number {
  margin-left: 10px;
}
.button-wrapper {
  display: flex;
  flex-direction: row;
}
.button {
  padding: 10px;
  white-space: nowrap;
}
.button-done-none {
  background-color: red;
}
.button-delete {
  margin-left: 10px;
  background-color: red;
}
</style>