import { createStore } from 'vuex'

export default createStore({
  state: {
    todoList: [
      {
        id: 1,
        title:'Дела в понедельник',
        items: [
          {
            id: 1,
            title: 'Проснуться',
            isDone: true
          },
          {
            id: 2,
            title: 'Умыться',
            isDone: true
          },
          {
            id: 3,
            title: 'Поехать на работу',
            isDone: false
          }
        ]
      },
      {
        id: 2,
        title: 'Дела на вторник',
        items: [
          {
            id: 1,
            title: 'Проснуться',
            isDone: false
          },
          {
            id: 2,
            title: 'Умыться',
            isDone: false
          },
          {
            id: 3,
            title: 'Поехать на работу',
            isDone: false
          },
        ]
      },
      {
        id: 3,
        title: 'Дела на среду',
        items: [
          {
            id: 1,
            title: 'Помыться',
            isDone: false
          },
          {
            id: 2,
            title: 'Тренировка',
            isDone: false
          }
        ]
      },
      {
        id: 4,
        title: 'Дела на четверг',
        items: [
          {
            id: 1,
            title: 'Готовить обед',
            isDone: false
          }
        ]
      }
    ]
  },
  getters: {
  },
  mutations: {
    ADD_POST (state, value) {
      state.todoList.push(value)
    },
    CHANGE_POST (state, value) {
      state.todoList.map(el => {
        el.id === value.id ? el = value : el
      })
    },
    DELETE_POST (state, value) {
      state.todoList.filter(item => item.id !== value.id)
      state.todoList = state.todoList.filter(item => item.id !== value.id)
    }
  },
  actions: {
    addPost ({ commit }, value) {
      commit('ADD_POST', value)
    },
    changePost ({ commit }, value) {
      commit('CHANGE_POST', value)
    },
    deletePost ({ commit }, value) {
      commit('DELETE_POST', value)
    },
  },
  modules: {
  }
})
