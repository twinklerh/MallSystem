// @/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
 
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home',
            meta: { requireAuth: false }
        },
        {
            path: '/:catchAll(.*)',
            redirect: '/notfound',
            meta: { requireAuth: false }
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/view/login/LoginView.vue'),
            meta: { requireAuth: false }
        },
        {
            path: '/notfound',
            name: 'notfound',
            component: () => import('@/view/404/NotFoundView.vue'),
            meta: { requireAuth: false }
        },
        {
            path: '/home/',
            name: 'home',
            component: () => import('@/view/HomeView.vue'),
            meta: { requireAuth: true },
            redirect: '/home/commodity',
            children: [
                {
                    path: 'commodity',
                    name: 'commodity',
                    component: () => import('@/view/commodity/CommodityView.vue')
                },
                {
                    path: 'board',
                    name: 'board',
                    component: () => import('@/view/board/BoardView.vue')
                }
            ]
        },
    ]
})
export default router