<template>
  <div>
    <h1 v-text="title"></h1>
  </div>
</template>

<script>
export default {
  computed:{
    title () {
      return `Este es el curso ${this.$route.params.post}`
    }
}
}
</script>

<style>

</style>