import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SearchPage from '../views/SearchPage.vue'
import Album from '../views/Album.vue'
import Artist from '../views/Artist.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'SearchPage',
    component: SearchPage
  },
  {
    path: '/album/:id',
    name: 'Album',
    component: Album
  },
  {
    path: '/artist/:id',
    name: 'Artist',
    component: Artist
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
