import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ResumeFiles from '../views/ResumeFiles.vue'
import MyWork from '../views/MyWork.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/resume',
    name: 'ResumeFiles',
    component: ResumeFiles
  },
  {
    path: '/my-work',
    name: 'MyWork',
    component: MyWork
  }
  // {
  //   path: '/',
  //   name: 'HomePage',
  //   component: Home
  // },
  // {
  //   path: '/',
  //   name: 'HomePage',
  //   component: Home
  // },
  // {
  //   path: '/',
  //   name: 'HomePage',
  //   component: Home
  // },
  // {
  //   path: '/',
  //   name: 'HomePage',
  //   component: Home
  // },
]

const router = new VueRouter({
  routes
})

export default router
