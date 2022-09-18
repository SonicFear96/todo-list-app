<template>
  <div class="page home-page container">
    <vForm @create="createPost"/>
    <div class="data-list-wrapper">
      <ul class="data-list">
        <li class="data-item" v-for="item in todoList" :key="item.id">
          <vCard :data="item" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import vCard from '@/components/card'
import vForm from '@/components/form'
export default {
  name: 'Home-page',
  components: {
    vCard,
    vForm
  },
  data () {
    return {
      todoList: [
        {
          id: 1,
          title:'Съесть на завтрак',
          items: ['яйцо', 'хлеб с маслом', 'яблоко']
        },
        {
          id: 2,
          title: 'Съесть на обед',
          items: ['суп', 'макароны', 'кофе',]
        }
      ]
    }
  },
  methods: {
    createPost (data) {
      const post = {
        id: Date.now(),
        title: data,
        items: []
      }
      this.todoList.push(post)
    }
  }
}
</script>

<style scoped>
  .data-list {
    margin-top: 50px;
    list-style: none;
    display: flex;
    flex-direction: row;
    gap: 20px;
    flex-wrap: wrap;
  }
  .data-item {
    width: calc(50% - 10px);
  }
</style>