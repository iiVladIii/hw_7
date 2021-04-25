import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import aboutPost from '../components/aboutPost.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/post/about',
    name: 'About',
    component: aboutPost
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
