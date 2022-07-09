import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ResumeFiles from '../views/ResumeFiles.vue'
import MyWork from '../views/MyWork.vue'
import ExperiencePage from '../views/ExperiencePage.vue'
import BlogPage from '../views/BlogPage.vue'
import PlanPage from '../views/PlanPage.vue'



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
  },
  {
    path: '/experience',
    name: 'ExperiencePage',
    component: ExperiencePage
  },
  {
    path: '/blogs',
    name: 'BlogPage',
    component: BlogPage
  },
  {
    path: '/plans',
    name: 'PlanPage',
    component: PlanPage
  }
]

const router = new VueRouter({
  routes
})

export default router
