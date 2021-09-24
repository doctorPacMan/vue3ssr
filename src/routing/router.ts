import { createMemoryHistory, createWebHistory, createRouter } from "vue-router";
import { isSSR } from '@/helpers'
import { routes } from './routes'

export function createApplicationRouter(): any {
    const base:string = '';
    const router = createRouter({
        history: isSSR() ? createMemoryHistory(base) : createWebHistory(),
        routes
    });
    return router;
}