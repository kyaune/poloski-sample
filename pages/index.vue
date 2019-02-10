<template>
  <div class="page-wrapper">
    <!-- <component v-if="story.content.component" :key="story.content._uid" :blok="story.content" :is="story.content.component"></component> -->
    <main
    >
      <TheIntro
      :title="contents[2].title"
      :description="contents[2].description"
      />
                            
      <TheHistory 
      :text="contents[1].text"
      :fact="contents[1].fact"
      :title="contents[1].title"
      :description="contents[1].description"
      /> 
      <TheRecipe 
      :steps="contents[0].steps"
      :photo="contents[0].photo"
      :title="contents[0].title"
      :header="contents[0].header"
      :ingredients="contents[0].ingredients"
      />
      <!-- <TheRange /> -->
    </main>
    <!-- <TheFooter /> -->
  </div>
</template>

<script>
import storyblokLivePreview from '@/mixins/storyblokLivePreview'
import TheIntro from '~/components/TheIntro/TheIntro.vue'
import TheHistory from '~/components/TheHistory/TheHistory.vue'
import TheRecipe from '~/components/TheRecipe/TheRecipe.vue'
// import TheRange from '~/components/TheRange/TheRange.vue'
// import TheFooter from '~/components/TheFooter/TheFooter.vue'

export default {
components: {
  TheIntro,
  TheHistory,
  TheRecipe,
},
   
  asyncData(context) {
    return context.app.$storyapi.get('cdn/stories', {
      version: 'draft',
      starts_with: "main/"
    }).then(res => {
      console.log(res.data.stories.content)
      return {
        contents: res.data.stories.map(ct => {
          return {
            title: ct.content.title,
            description: ct.content.description,
            text: ct.content.text,
            fact: ct.content.fact,
            header: ct.content.header,
            ingredients: ct.content.ingredients,
            photo: ct.content.photo,
            steps: ct.content.steps,
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

