<template>
  <div class="page-wrapper">
    <!-- <component v-if="story.content.component" :key="story.content._uid" :blok="story.content" :is="story.content.component"></component> -->
    <main>
      <TheIntro 
      :key="headers[1].id"
      :title="headers[1].title"
      :text="headers[1].text"
      :id="headers[1].id"
      />
                            
      <TheHistory 
      :title="headers[0].hstitle"
      :photo="headers[0].hsphoto"
      :text="headers[0].hstext"
      :id="headers[0].hsid"
      :fact="headers[0].hsfact"
      :description="headers[0].hsdescription"
      /> 
      <!-- <TheRecipe />
      <TheRange /> -->
    </main>
    <!-- <TheFooter /> -->
  </div>
</template>

<script>
// import storyblokLivePreview from '@/mixins/storyblokLivePreview'
import TheIntro from '~/components/TheIntro/TheIntro.vue'
import TheHistory from '~/components/TheHistory/TheHistory.vue'
// import TheRecipe from '~/components/TheRecipe/TheRecipe.vue'
// import TheRange from '~/components/TheRange/TheRange.vue'
import TheFooter from '~/components/TheFooter/TheFooter.vue'

export default {
components: {
  TheIntro,
  TheHistory,
  TheFooter
},
   asyncData (context) {
        return context.app.$storyapi
        .get("cdn/stories",{ 
            version: "draft",
            starts_with: "main/"
        })
        .then(res =>{
            console.log(res);
            return {
              headers:
            res.data.stories.map(hd => {
              return {
                id: hd.slug,
                title: hd.content.title,
                text: hd.content.description,
                photo: hd.content.photo,
                hsid: hd.slug,
                hsphoto: hd.content.photo,
                hstext: hd.content.text,
                hsfact: hd.content.fact,
                hsdescription: hd.content.description,
                hstitle: hd.content.title
              }
            }),
            // histories:
            // res.data.stories.map(hs => {
            //   return {
            //     id: hs.slug,
            //     photo: hs.content.photo,
            //     text: hs.content.text,
            //     fact: hs.content.fact,
            //     description: hs.content.description,
            //     title: hs.content.title
            //   }
            // })
            };
        })
    }
}
</script>
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

<style scoped>
.page-wrapper{
  font-family: 'Cormorant';
}
  main{
    margin-left: 10%;
    font-family: 'Cormorant';
  }
</style>

