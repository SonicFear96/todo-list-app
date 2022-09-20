<template>
  <div class="page todo-page container">
    <div class="title"> {{ data.title }} </div>
    <vForm @create="createTodo"/>
    <div class="list-wrapper" >
      <ul v-if="data.items" class="list-todo">
        <li class="item-todo" v-for="(item, index) in data.items" :key="index" >
          <vCard :data="item" :index="index + 1" @isDone="changeDone" @delete="deleteItems"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import vCard from '@/components/card/todo'
import vForm from '@/components/form/add-todo'

export default {
  name: 'todo-page',
  computed: {
    ...mapState({
      todoList: state => state.todoList
    })
  },
  components: {
    vCard,
    vForm
  },
  data () {
    return {
      data: {},
      showModals: false,
      clickItems: null
    }
  },
  methods: {
    showModals (data) {
      this.clickItems = data
      this.showModals = true
    },
    deleteItems (data) {
      this.data.items = this.data.items.filter(item => item.id !== data.id)
      this.$store.dispatch('changePost', this.data)
    },
    changeDone (data) {
      data.isDone = !data.isDone
    },
    createTodo (data) {
      this.data.items.push(
        {
          title: data,
          id: Date.now(),
          isDone: false,
        })
      this.$store.dispatch('changePost', this.data)
    }
  },
  mounted () {
    this.data = this.todoList.find(item => item.id === Number(this.$route.params.id))
  }
}
</script>

<style scoped>
  .title {
    font-size: 28px;
    font-weight: bold;
    text-align: center;
  }
  .form-todo {
    margin-top: 20px;
  }
  .list-wrapper {
    margin-top: 40px;
  }
  .list-todo {
    list-style: none;
    max-width: 400px;
    margin: 0 auto;
  }
  .item-todo:not(:first-child) {
    margin-top: 10px;
  }
  .item-title {
    margin-left: 5px;
  }
</style>

