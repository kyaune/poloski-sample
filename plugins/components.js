import Vue from 'vue'
import intro from '~/components/TheIntro/TheIntro.vue'
import history from '~/components/TheHistory/TheHistory.vue'
import recipe from '~/components/TheRecipe/TheRecipe.vue'
import assortment from '~/components/TheRange/TheRange.vue'
import footer from '~/components/TheFooter/TheFooter.vue'
import Page from '~/components/Page.vue'

Vue.component('intro', intro)
Vue.component('history', history)
Vue.component('recipe', recipe)
Vue.component('assortment', assortment)
Vue.component('footer', footer)
Vue.component('page', Page)