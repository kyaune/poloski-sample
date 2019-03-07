<template>
   <section class="util__container">
    <component v-if="story.content.component" :key="story.content._uid" :blok="story.content" :is="story.content.component"></component>
  </section>
</template>

<script>
import storyblokLivePreview from '@/mixins/storyblokLivePreview'


export default {
  data () {
    return { story: { content: {} } }
  },
  mixins: [storyblokLivePreview],
  asyncData (context) {
    let version = context.query._storyblok || context.isDev ? 'draft' : 'published'
    return context.app.$storyapi.get('cdn/stories/home', {
      version: version
    }).then((res) => {
      return res.data
    }).catch((res) => {
      context.error({ statusCode: res.response.status, message: res.response.data })
    })
  }
}
</script>


<style>
.page-wrapper{
  font-family: 'Cormorant';
}
main{
    margin-left: 10%;
    font-family: 'Cormorant';
  }
</style>

