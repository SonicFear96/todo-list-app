<template>
 <div class="card-component">
    <div v-if="showTitle" class="title">
        {{ data.title }}
    </div>
    <div v-else class="input-wrapper">
      <input class="card-input" :value="data.title" @input="input"> 
      <button class="button" @click="changePost">
        <iconCheck />
      </button>
    </div>
    <ul v-if="data.items.length" class="todo-list">
      <li class="todo-item" v-for="(item, index) in data.items" :key="index"> {{index + 1}} {{ item }} </li>
    </ul>
    <div class="todo-item--no" v-else>
      к сожалению, список дел ещё не заполнен
    </div>
    <div class="button-wrapper">
      <button class="button" @click="showChangePost">
        изменить 
      </button>
      <button class="button" @click="deletePost">
        удалить
      </button>
    </div>
 </div>   
</template>

<script>
import iconCheck from '@/components/icons/check'
export default {
  name: 'card-component',
  components: {
    iconCheck
  },
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      showTitle: true,
      newTitle: ''
    }
  },
  methods: {
    showChangePost () {
      this.showTitle = false
    },
    changePost () {
      if (this.newTitle !== '') {
        this.data.title = this.newTitle
        this.$store.dispatch('changePost', this.data)
        this.showTitle = true
      }
    },
    deletePost () {
      this.$emit('deletePost', this.data)
      // this.$store.dispatch('deletePost', this.data)
    },
    input () {
      this.newTitle = event.target.value
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
    height: 40px;
    font-size: 24px;
    font-weight: bold;
}
.card-input {
  height: 28px;
  border: 1px solid gray;
}
.input-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 40px;
}
.input-wrapper .button {
  width: 45px;
  padding: 5px;
}
.input-wrapper .button svg {
  width: 18px;
  height: 18px;
  fill: white;
}
.todo-list {
  margin-top: 10px;
  list-style: none;
}
.todo-item, .todo-item--no {
  font-size: 18px;
  color: grey;
}
.button-wrapper {
  display: flex;
  flex-direction: row;
  gap: 40px;
  margin-top: 20px;
}
</style>