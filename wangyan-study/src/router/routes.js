import Main from  '../pages/Main/Main'
import Cart from  '../pages/Cart/Cart'
import Personal from  '../pages/Personal/Personal'
import Buy from '../pages/Buy/Buy'
import Classify from '../pages/Classify/Classify'
import Login from '../pages/login/login'



export default [
    {
        path:'/main',
        component:Main
    },
    {
        path:'/cart',
        component:Cart
    },
    {
        path:'/personal',
        component:Personal
    },
    {
        path:'/buy', // 类名规范一点，
        component:Buy
    },
    {
        path:'/classify',
        component:Classify
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/',
        redirect:'/login'
    },
]