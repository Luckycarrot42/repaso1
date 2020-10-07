<template>
  <div>
    <h1 v-text="title"></h1>
    <v-btn @click="fillCourse">Apretame</v-btn>
    <v-spacer></v-spacer>
    {{ ejemplosCurso }}
    <v-spacer></v-spacer>
    {{ cursos }}
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data (){
    return{
      ejemplosCurso: []
    }
  },
  methods: {
    fillCourse(){
      let pageCode = this.$route.params.num
      switch(pageCode){
        case 1:
        this.ejemplosCurso = this.cursos.find(x => x.id === 1);
        console.log(pageCode)
        break;
        case 2:
        this.ejemplosCurso = this.cursos.find(x => x.id === 2);
        console.log(this.ejemplosCurso)
        break;
        case 3:
        this.ejemplosCurso = this.cursos.find(x => x.id === 3);
        console.log(this.ejemplosCurso)
        break;        
      }     
    }
  },
  computed:{
    ...mapState(['cursos']),
    title () {
      return `Este es el curso ${this.$route.params.num}`
    },
  }
}
</script>

<style>

</style>