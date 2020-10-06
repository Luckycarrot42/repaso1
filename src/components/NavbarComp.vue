<template>
  <v-card
    color="grey lighten-4"
    flat
    height="190px"
    
    tile
  >
    <v-toolbar
      prominent
      extended
      src="https://images.unsplash.com/photo-1507838153414-b4b713384a76"
    >
      <v-toolbar-title><router-link to="/" class="toolbar-title live_coding">Live Coding</router-link></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-img max-height="190" max-width="190" src="https://i.pinimg.com/originals/d6/5e/19/d65e19ed468c7322a47f5e5525422f71.png"></v-img>
    </v-toolbar>
  </v-card>
</template>

<style scoped>
.live_coding{
  text-decoration: none;
  font-weight:bold;
  font-size: 100px;
  color: #ffffff;
}
</style>