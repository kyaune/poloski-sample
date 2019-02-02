<template>
  <div class="page-wrapper">
    <!-- <component v-if="story.content.component" :key="story.content._uid" :blok="story.content" :is="story.content.component"></component> -->
    <main>
      <TheIntro 
      v-for="header in headers"
      :key="header.id"
      :title="header.title"
      :text="header.text"
      :id="header.id"
      />
                            
      <!-- <TheHistory /> 
      <TheRecipe />
      <TheRange /> -->
    </main>
    <!-- <TheFooter /> -->
  </div>
</template>

<script>
// import storyblokLivePreview from '@/mixins/storyblokLivePreview'
import TheIntro from '~/components/TheIntro/TheIntro.vue'
// import TheHistory from '~/components/TheHistory/TheHistory.vue'
// import TheRecipe from '~/components/TheRecipe/TheRecipe.vue'
// import TheRange from '~/components/TheRange/TheRange.vue'
import TheFooter from '~/components/TheFooter/TheFooter.vue'

export default {
components: {
  TheIntro,
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
                photo: hd.content.photo
              }
            })
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

