import { createApp, createSSRApp } from 'vue'
import { Router } from 'vue-router'
import { createApplicationRouter } from './routing/router'
import { isSSR } from "@/helpers";

import AppRoot from '@/components/App.vue'
import IconSvg from '@/components/icon.vue';
import WebpImg from '@/components/webp.vue';

export function createApplication() {
    const app = isSSR() ? createSSRApp(AppRoot) : createApp(AppRoot);

    const router: Router = createApplicationRouter();

    app.use(router)

    app.component('icon', IconSvg);
    app.component('webp', WebpImg);

    return { app, router };
}