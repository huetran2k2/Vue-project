import CommentDetail from './components/posts/CommentDetail.vue'
import ListPost from './components/posts/ListPost.vue'

import {createRouter, createWebHistory}  from 'vue-router'

const routes = [
    {
        path:'/',
        name:"ListPost",
        component: ListPost
    },
    {
        path:'/comment-detail',
        name:"commentDetail",
        component: CommentDetail
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router