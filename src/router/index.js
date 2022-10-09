import { createRouter, createWebHistory } from 'vue-router'

import Designer from '@/views/LayoutDesigner.vue'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'

const routes =  [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    { path: '/designer', name: 'Page Designer', component: Designer }
]

// Create Router
const router = createRouter({
    history: createWebHistory(), 
    routes: routes
})

export default router