import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './main/App.vue'

import HomePage from '@/components/home/HomePage'
import UserCrud from '@/components/user/UserCrud'

const routes = [
  { path: "/", component: HomePage },
  { path: "/usercrud", component: UserCrud },
]

const router = createRouter({
  history: createWebHistory(),
  routes, 
})

createApp(App).use(router).mount('#app');
