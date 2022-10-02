import { createRouter, createWebHistory } from 'vue-router'

import Designer from '@/views/LayoutDesigner.vue'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'

const routes =  [
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About },
    { path: '/designer', name: 'designer', component: Designer }
]

// Create Router
const router = createRouter({
    history: createWebHistory(), 
    routes: routes
})

export default router