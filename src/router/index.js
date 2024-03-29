import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Busca from '@/views/Busca.vue'
import SobreNos from '@/views/SobreNos.vue'
import Produto from '@/views/Produto.vue'
import Contato from '@/views/Contato.vue'
import Perfil from '@/views/Perfil.vue'
import Privacidade from '@/views/Privacidade.vue'

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
    path: '/produto/:id',
    name: 'Produto',
    component: Produto
  },
  {
    path: '/contato',
    name: 'Contato',
    component: Contato
  },
  {
    path: '/perfil',
    name: 'Perfil',
    component: Perfil
  },
  {
    path: '/privacidade',
    name: 'Privacidade',
    component: Privacidade
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
