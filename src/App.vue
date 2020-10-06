<template>
  <v-app>
    <navbar-comp></navbar-comp>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import NavbarComp from './components/NavbarComp'

export default {
  name: 'App',

  components: {
    NavbarComp
  },

  data: () => ({
    //
  }),
};
</script>
