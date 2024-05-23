import { createWebHistory, createRouter } from 'vue-router'

import PostView from '@/view/PostView.vue';
import MainView from '@/view/MainView.vue'


const routes = [
    { 
        path: '/', 
        name: 'main',
        component: MainView 
    },
    { 
        path: '/post/:id',
        name: 'post', 
        component: PostView,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;