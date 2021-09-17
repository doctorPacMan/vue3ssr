import { createApp, createSSRApp } from 'vue'
import { Router } from 'vue-router'
import { createApplicationRouter } from './routing/router'
import { isSSR } from "@/helpers";
import App from '@/components/App.vue'
import IconSvg from '@/components/icon.vue';
import WebpImg from '@/components/webp.vue';
import PageMeta from "@/components/App/PageMeta.vue";
import PageMetaTeleport from "@/components/App/PageMetaTeleport.vue";

export function createApplication() {
    const app = isSSR() ? createSSRApp(App) : createApp(App);

    const router: Router = createApplicationRouter();

    app.use(router)

    app.component('icon', IconSvg);
    app.component('webp', WebpImg);
    app.component('PageMeta', PageMeta);
    app.component('PageMetaTeleport', PageMetaTeleport);

    return { app, router };
}