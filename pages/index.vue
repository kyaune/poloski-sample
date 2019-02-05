<template>
  <div class="page-wrapper">
    <!-- <component v-if="story.content.component" :key="story.content._uid" :blok="story.content" :is="story.content.component"></component> -->
    <main>
      <TheIntro/>
                            
      <TheHistory/> 
      <!-- <TheRecipe />
      <TheRange /> -->
    </main>
    <!-- <TheFooter /> -->
  </div>
</template>

<script>
import storyblokLivePreview from '@/mixins/storyblokLivePreview'
import TheIntro from '~/components/TheIntro/TheIntro.vue'
import TheHistory from '~/components/TheHistory/TheHistory.vue'
// import TheRecipe from '~/components/TheRecipe/TheRecipe.vue'
// import TheRange from '~/components/TheRange/TheRange.vue'
// import TheFooter from '~/components/TheFooter/TheFooter.vue'

export default {
components: {
  TheIntro,
  TheHistory,
},
   asyncData (context) {
        return context.app.$storyapi
        .get("cdn/stories",{ 
            version: "draft",
            starts_with: "main/"
        })
        .then(res =>{
            console.log(res);
            return res;
        })
    }
}
// }
//    data () {
//     return { story: { content: {} } }
//   },
//   mixins: [storyblokLivePreview],
//   asyncData (context) {
//     let version = context.query._storyblok || context.isDev ? 'draft' : 'published'

//     return context.app.$storyapi.get('cdn/stories', {
//       version: version,
//       starts_with: "main/"
//     }).then((res) => {
//       return res.data
//     }).catch((res) => {
//       context.error({ statusCode: res.response.status, message: res.response.data })
//     })
//   }
// }
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

