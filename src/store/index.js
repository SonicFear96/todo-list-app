import { createStore } from 'vuex'

export default createStore({
  state: {
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
