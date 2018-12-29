<template>
  <main>
    <TheIntro />
    <TheHistory />
    <TheRecipe />
    <TheRange />
  </main>
</template>

<script>
import TheIntro from '~/components/TheIntro/TheIntro.vue'
import TheHistory from '~/components/TheHistory/TheHistory.vue'
import TheRecipe from '~/components/TheRecipe/TheRecipe.vue'
import TheRange from '~/components/TheRange/TheRange.vue'

export default {
  components: {
    TheIntro,
    TheHistory,
    TheRecipe,
    TheRange
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

