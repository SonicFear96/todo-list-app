<template>
  <div class="page home-page container">
    <vForm @create="createPost"/>
    <div class="data-list-wrapper">
      <ul class="data-list">
        <li class="data-item" v-for="item in todoList" :key="item.id">
            <vCard :data="item" @deletePost="showModals"/>
        </li>
      </ul>
    </div>
    <vModals v-if="showModals" @close="showModals = false" @delete="deletePost"/>
  </div>
</template>

<script>
import vCard from '@/components/card'
import vForm from '@/components/form'
import vModals from '@/components/modals'
import { mapState } from 'vuex'
export default {
  name: 'Home-page',
  components: {
    vCard,
    vForm,
    vModals
  },
  computed: {
    ...mapState({
      todoList: state => state.todoList
    })
  },
  data () {
    return {
      clickPost: null,
      showModals: false
    }
  },
  methods: {
    showModals (data) {
      this.clickPost = data
      this.showModals = true
    },
    deletePost () {
      this.$store.dispatch('deletePost', this.clickPost)
      this.clickPost = '',
      this.showModals = false
    },
    createPost (data) {
      const post = {
        id: Date.now(),
        title: data,
        items: []
      }
      this.$store.dispatch('addPost', post)
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