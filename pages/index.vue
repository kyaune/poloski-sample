<template>
  <main>
    <TheIntro />
    <TheHistory />
    <TheRecipe />
  </main>
</template>

<script>
import TheIntro from '~/components/TheIntro/TheIntro.vue'
import TheHistory from '~/components/TheHistory/TheHistory.vue'
import TheRecipe from '~/components/TheRecipe/TheRecipe.vue'

export default {
  components: {
    TheIntro,
    TheHistory,
    TheRecipe
  }
}
require ('~/components/reset.css')
</script>

<style scoped>
  main{
    margin-left: 10%;
    font-family: 'Cormorant';
  }
</style>

