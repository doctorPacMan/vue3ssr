import { createApplication } from './app'

const { app, router } = createApplication();

router.push({path: window.location.pathname});
(async (r, a) => {
    await r.isReady();
    a.mount('#app', true);
})(router, app);