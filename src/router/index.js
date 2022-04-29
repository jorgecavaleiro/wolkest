import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/pageBuilder/PageBuilder.vue'
import About from '@/views/About.vue'

const routes =  [
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About }
]

// Create Router
const router = createRouter({
    history: createWebHistory(), 
    routes: routes
})

export default router