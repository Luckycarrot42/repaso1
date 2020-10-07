import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cursos: [
      {id: 1, 
        title: 'Curso 1', 
        description: 'blablablabla', 
        img: 'https://images.unsplash.com/photo-1522881193457-37ae97c905bf',
        ex1: {id: 1, title: 'Ejemplo 1', description: 'blablablabla', img: 'https://images.unsplash.com/photo-1527792492728-08d07d011113'},
        ex2: {id: 2, title: 'Ejemplo 2', description: 'blablablabla2', img: 'https://images.unsplash.com/photo-1527792492728-08d07d011113'},
        ex3: {id: 3, title: 'Ejemplo 3', description: 'blablablabla3', img: 'https://images.unsplash.com/photo-1527792492728-08d07d011113'}
      },
      {id: 2, 
        title: 'Curso 2', 
        description: 'blablablabla2', 
        img: 'https://images.unsplash.com/photo-1522881193457-37ae97c905bf',
        ex1: {id: 1, title: 'Ejemplo 1', description: 'blablablabla', img: 'https://images.unsplash.com/photo-1527792492728-08d07d011113'},
        ex2: {id: 2, title: 'Ejemplo 2', description: 'blablablabla2', img: 'https://images.unsplash.com/photo-1527792492728-08d07d011113'},
        ex3: {id: 3, title: 'Ejemplo 3', description: 'blablablabla3', img: 'https://images.unsplash.com/photo-1527792492728-08d07d011113'}
      },
      {id: 3, 
        title: 'Curso 3',
        description: 'blablablabla3', 
        img: 'https://images.unsplash.com/photo-1522881193457-37ae97c905bf',
        ex1: {id: 1, title: 'Ejemplo 1', description: 'blablablabla', img: 'https://images.unsplash.com/photo-1527792492728-08d07d011113'},
        ex2: {id: 2, title: 'Ejemplo 2', description: 'blablablabla2', img: 'https://images.unsplash.com/photo-1527792492728-08d07d011113'},
        ex3: {id: 3, title: 'Ejemplo 3', description: 'blablablabla3', img: 'https://images.unsplash.com/photo-1527792492728-08d07d011113'}
      }
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
