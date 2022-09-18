<template>
  <div class="page todo-page container">
    <div class="title"> {{ data.title }} </div>
    <div class="list-wrapper">
      <ul class="list-todo">
        <li class="item-todo" v-for="(item, index) in data.items" :key="index" >
          {{item}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'todo-page',
  computed: {
    ...mapState({
      todoList: state => state.todoList
    })
  },
  data () {
    return {
      data: {}
    }
  },
  mounted () {
    this.data = this.todoList.find(item => item.id === Number(this.$route.params.id))
    console.log(this.data)
  }
}
</script>

<style scoped>
  .todo-page {

  }
</style>

