import Post from './components/posts/Post.vue'

import {createRouter, createWebHistory}  from 'vue-router'

const routes = [
    {
        path:'/',
        name:"Post",
        component: Post
    }
]
const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router