// import Post from './components/posts/Post.vue'
import SignUp from './components/authentication/signup/index.vue'
import LogIn from './components/authentication/login/index.vue'
import Layout from './components/Layout.vue'
import Index from './components/profile/Index.vue'
import {createRouter, createWebHistory}  from 'vue-router'

const routes = [
    {
        path:'/',
        name:"Layout",
        component: Layout
    },
    {
        path:'/signup',
        name:"SignUp",
        component: SignUp
    },
    {
        path:'/login',
        name:"LogIn",
        component: LogIn
    },
     {
        path:'/profile',
        name:"Index",
        component: Index
    }
]
const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router