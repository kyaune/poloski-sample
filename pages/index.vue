<template>
  <div class="page-wrapper">
    <main>
      <!-- <section class="util__container">
    <component v-if="story.content.component" :key="story.content._uid" :blok="story.content" :is="story.content.component"></component>
  </section> -->
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
import storyblokLivePreview from '@/mixins/storyblokLivePreview'

export default {
  components: {
    TheIntro,
    TheHistory,
    TheRecipe,
    TheRange,
    TheFooter
  },
//    data () {
//     return { story: { content: {} } }
//   },
//   mixins: [storyblokLivePreview],
//   asyncData (context) {
//     let version = context.query._storyblok || context.isDev ? 'draft' : 'published'

//     return context.app.$storyapi.get('cdn/stories/home', {
//       version: version
//     }).then((res) => {
//       return res.data
//     }).catch((res) => {
//       context.error({ statusCode: res.response.status, message: res.response.data })
//     })
//   }
}
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

