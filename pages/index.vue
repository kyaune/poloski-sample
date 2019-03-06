<template>
  <div class="page-wrapper">
    <section class="util__container">
      <component v-if="story.content.component" 
      :key="story.content._uid" 
      :blok="story.content" 
      :is="story.content.component"></component>
    </section>
    <!-- <main
    >
      <TheIntro
      
      />
      <button
      @click="console.log(ct.title)"
      ></button>
                            
      <TheHistory 
      
      /> 
      <TheRecipe 
      
      />
      <TheRange 
      
      />
    </main>
    <TheFooter 
    
    /> -->
  </div>
</template>

<script>
import storyblokLivePreview from '@/mixins/storyblokLivePreview'
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
  TheFooter,
  TheRange
},

  // :text="contents[2].text"
  //     :fact="contents[2].fact"
  //     :title="contents[2].title"
  //     :description="contents[2].description"
  //     :photo="contents[2].photo"
   
  //     :steps="contents[1].steps"
  //     :photo="contents[1].photo"
  //     :title="contents[1].title"
  //     :header="contents[1].header"
  //     :ingredients="contents[1].ingredients"

  //     :assortment="contents[3].assortment"

  //     :title="contents[0].title"
  //   :description="contents[0].description"


  asyncData(context) {
    return context.app.$storyapi.get('cdn/stories/main', {
      version: 'draft',
    }).then((res) => {
      // console.log(res.data.stories.content)
      return res.data
      }).catch((res) => {
      context.error({ statusCode: res.response.status, message: res.response.data })
    })
    }
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

