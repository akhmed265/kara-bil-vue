import {createRouter, createWebHistory} from 'vue-router'

import Home from "../pages/Home/index.vue";
import Poems from "../pages/Poems/index.vue";
import About from "../pages/About/index.vue";
import Social from "../pages/Social/index.vue";

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/poems',
        component: Poems
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/social',
        component: Social
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;
