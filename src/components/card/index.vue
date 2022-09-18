<template>
 <div class="card-component">
    <div class="title">
        {{ data.title }}
    </div>
    <ul v-if="data.items.length" class="todo-list">
      <li class="todo-item" v-for="(item, index) in data.items" :key="index"> {{index + 1}} {{ item }} </li>
    </ul>
    <div class="todo-item--no" v-else>
      к сожалению, список дел ещё не заполнен
    </div>
 </div>   
</template>

<script>
export default {
  name: 'card-component',
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped>
.card-component {
  border-radius: 8px;
  border: 1px solid lightgray;
  padding: 20px;
  height: 100%;
}
.title {
    font-size: 24px;
    font-weight: bold;
}
.todo-list {
  margin-top: 10px;
  list-style: none;
}
.todo-item, .todo-item--no {
  font-size: 18px;
  color: grey;
}
</style>