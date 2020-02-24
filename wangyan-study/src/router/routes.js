import Main from  '../pages/Main/Main'
import Cart from  '../pages/Cart/Cart'
import Personal from  '../pages/Personal/Personal'
import Buy from '../pages/Buy/Buy'
import Classify from '../pages/Classify/Classify'
import Login from '../pages/login/login'



export default [
    {
        path:'/main',
        component:Main,
        meta:{
            isShowFooter:true
        }

    },
    {
        path:'/cart',
        component:Cart,
        meta:{
            isShowFooter:true
        }
    },
    {
        path:'/personal',
        component:Personal,
        meta:{
            isShowFooter:true
        }
    },
    {
        path:'/buy', // 类名规范一点，
        component:Buy
        ,meta:{
            isShowFooter:true
        }
    },
    {
        path:'/classify',
        component:Classify,
        meta:{
            isShowFooter:true
        }
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/',
        redirect:'/buy'
    },
]