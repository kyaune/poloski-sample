<template>
  <div class="page-wrapper">
    <!-- <component v-if="story.content.component" :key="story.content._uid" :blok="story.content" :is="story.content.component"></component> -->
    <main
    v-for="content in contents"
    :key="content.id"
    >
      <TheIntro
      :title="contents[1].title"
      :description="contents[1].description"
      />
                            
      <TheHistory
      :title="contents[0].title"
      :description="contents[0].description"
      /> 
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
   
  asyncData(context) {
    return context.app.$storyapi.get('cdn/stories', {
      version: 'draft',
      starts_with: "main/"
    }).then(res => {
      return {
        content: res.data.stories.map(ct => {
          return {
            title: ct.content.title,
            description: ct.content.description
          }
        })
      }
    })
  }



  //  data () {
  //   return { story: { content: {} } }
  // },
  // mixins: [storyblokLivePreview],
  // asyncData (context) {
  //   let version = context.query._storyblok || context.isDev ? 'draft' : 'published'

  //   return context.app.$storyapi.get('cdn/stories', {
  //     version: version,
  //     starts_with: "main/"
  //   }).then((res) => {
  //     return res.data
  //   }).catch((res) => {
  //     context.error({ statusCode: res.response.status, message: res.response.data })
  //   })
  // }
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

