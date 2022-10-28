import Vue from 'vue'
import VueRouter from 'vue-router'
import Autoscore from '@/views/Autoscore.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'main',
    redirect:{ name:'autoscore' }
  },
  {
    path:'/autoscore/:idAutoscore(\\d+)?',
    name:'autoscore',
    component:Autoscore
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
