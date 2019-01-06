<template>
  <div class="page-wrapper">
    <main>
      <TheIntro />
      <TheHistory />
      <TheRecipe />
      <TheRange />
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheIntro from '~/components/TheIntro/TheIntro.vue'
import TheHistory from '~/components/TheHistory/TheHistory.vue'
import TheRecipe from '~/components/TheRecipe/TheRecipe.vue'
import TheRange from '~/components/TheRange/TheRange.vue'
import TheFooter from '~/components/TheFooter/TheFooter.vue'

export default {
  components: {
    TheIntro,
    TheHistory,
    TheRecipe,
    TheRange,
    TheFooter
  }
}
// require ('~/static/css/reset.css')
</script>

<style scoped>
.page-wrapper{
  font-family: 'Cormorant';
}
  main{
    margin-left: 10%;
    font-family: 'Cormorant';
  }
</style>

