export const routes = [
    {
        path: '/',
        name: 'home',
        component: ():any => import(/* webpackChunkName: "home" */ '../views/Home/Home.vue')
    },
    {
        path: '/page/',
        name: 'page',
        component: ():any => import(/* webpackChunkName: "page" */ '../views/Page/Page.vue')
    },
]