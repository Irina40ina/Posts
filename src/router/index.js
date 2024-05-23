import { createWebHistory, createRouter } from 'vue-router'

import PostView from '@/view/PostView.vue';
import MainView from '@/view/MainView.vue';
import AboutView from '@/view/AboutView.vue';
import TextView from '@/view/TextView.vue';


const routes = [
    {
        path: '/',
        name: 'main',
        component: MainView,
    },
    {
        path: '/post/:id',
        name: 'post',
        component: PostView,
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView,
        children: [
            {
                path: 'text',
                name: 'text',
                component: TextView,
                meta: { isRequiredAuth: true },
            },

        ]
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});
const isAuth = true;

router.beforeEach((to, from) => {
    if(to.meta.isRequiredAuth === true) {
        if(isAuth === true) {
            return true;
        } else {
            return false;
        }
    }
    from
    return true;
});

export default router;