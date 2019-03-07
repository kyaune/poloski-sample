import Vue from 'vue'
import intro from '~/components/TheIntro/TheIntro.vue'
import history from '~/components/TheHistory/TheHistory.vue'
import ingredients from '~/components/TheRecipe/TheRecipe.vue'
import assortment from '~/components/TheRange/TheRange.vue'
import down from '~/components/TheFooter/TheFooter.vue'
import Page from '~/components/Page.vue'

Vue.component('intro', intro)
Vue.component('history', history)
Vue.component('ingredients', ingredients)
Vue.component('assortment', assortment)
Vue.component('down', down)
Vue.component('page', Page) 