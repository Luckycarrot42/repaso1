<template>
  <div class="home">
    <v-row>
      <v-col v-for="(curso, id) in cursos" :key="id">
        <v-card
          class="mx-auto"
          max-width="344"
        >
          <v-img
            :src="curso.img"
            height="200px"
          ></v-img>

          <v-card-title>{{ example.title }}</v-card-title>
          <v-card-subtitle> {{ example.description }}</v-card-subtitle>

          <v-card-actions>
            <v-btn
              color="orange lighten-2"
              text
              :to="`/curso/${curso.id}`"
            >
              Explore
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn
              icon
              @click="show = !show"
            >
              <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Home',
  data(){
    return{
      show: false
    }
  },
  components: {
 },
 computed: {
  ...mapState(['cursos'])
 }
}
</script>
