import { createApp, createSSRApp } from 'vue'
import { Router } from 'vue-router'
import { createApplicationRouter } from './routing/router'
import { isSSR } from "@/helpers";

import App from '@/components/App.vue'
import AppHead from '@/components/AppHead.vue';
import IconSvg from '@/components/icon.vue';
import WebpImg from '@/components/webp.vue';
import AruLink from '@/components/link.vue';

export function createApplication() {
    const app = isSSR() ? createSSRApp(App) : createApp(App);
    const router: Router = createApplicationRouter();
    app.use(router);

    app.component('AppHead', AppHead);
    app.component('arulink', AruLink);
    app.component('icon', IconSvg);
    app.component('webp', WebpImg);
    return { app, router };
}