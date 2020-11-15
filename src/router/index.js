import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Busca from '@/views/Busca.vue'
import SobreNos from '@/views/SobreNos.vue'
import Produtos from '@/views/Produtos.vue'
import Contato from '@/views/Contato.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/busca',
    name: 'Busca',
    component: Busca
  },
  {
    path: '/sobrenos',
    name: 'SobreNos',
    component: SobreNos
  },
  {
    path: '/produtos',
    name: 'Produtos',
    component: Produtos
  },
  {
    path: '/contato',
    name: 'Contato',
    component: Contato
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
