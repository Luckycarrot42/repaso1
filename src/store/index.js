import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cursos: [
      {title: 'Curso 1', description: 'blablablabla', img: 'https://images.unsplash.com/photo-1522881193457-37ae97c905bf'},
      {title: 'Curso 2', description: 'blablablabla2', img: 'https://images.unsplash.com/photo-1522881193457-37ae97c905bf'},
      {title: 'Curso 3', description: 'blablablabla3', img: 'https://images.unsplash.com/photo-1522881193457-37ae97c905bf'}
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
