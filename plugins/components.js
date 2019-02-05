import Vue from 'vue'
import TheIntro from '~/components/TheIntro/TheIntro.vue'
import TheHistory from '~/components/TheHistory/TheHistory.vue'
import TheRecipe from '~/components/TheRecipe/TheRecipe.vue'
import TheRange from '~/components/TheRange/TheRange.vue'
import TheFooter from '~/components/TheFooter/TheFooter.vue'

Vue.component('intro', TheIntro)
Vue.component('history', TheHistory)
Vue.component('recipe', TheRecipe)
Vue.component('assortment', TheRange)
Vue.component('Thefooter', TheFooter)