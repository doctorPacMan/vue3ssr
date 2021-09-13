export const routes = [
    {
        path: '/',
        name: 'home',
        component: ():any => import(/* webpackChunkName: "home" */ '../components/Home/Home.vue')
    },
    {
        path: '/page/',
        name: 'page',
        component: ():any => import(/* webpackChunkName: "page" */ '../components/Page/Page.vue')
    },
]