import Home from '../components/Home.vue'
import SignUp from '../components/SignUp.vue'
import Login from '../components/Login.vue'
import updateResto from '../components/updateResto.vue'
import AddResto from '../components/AddResto.vue'  
import UserProfile from '../components/UserProfile.vue'   



import {createRouter,createWebHistory} from 'vue-router'

const routes = [
    {
        name:'Home',
        path:'/',
        component:Home
    },
    {
        name:'SignUp',
        path:'/signup',
        component:SignUp
    },
    {
        name:'Login',
        path:'/login',
        component:Login
        
    },
    {
        name:'AddResto',
        path:'/add-resto',
        component:AddResto
    },
    {
        name:'updateResto',
        path:'/update-resto/:id',
        component:updateResto 
    },
    {
        name:'UserProfile',
        path:'/profile',
        component:UserProfile 
    }
]

const router = createRouter({
        history:createWebHistory(),
        routes
})
    
    export default router;


    