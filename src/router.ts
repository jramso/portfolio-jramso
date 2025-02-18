import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './views/HomePage.vue'
import Contato from './views/ContatoPage.vue'
import Sobre from './views/AboutMe.vue'
import Repos from './views/MyProjects.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/contato', component: Contato },
  { path: '/sobre', component: Sobre },
  { path: '/repos', component: Repos },
]

const router = createRouter({
  history: createWebHashHistory(), // Alterado para hash mode
  routes
})

export default router
