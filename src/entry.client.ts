import { createApplication } from './app'

const { app, router } = createApplication();

router.push({name: 'home'});
(async (r, a) => {
    await r.isReady();
    a.mount('#app', true);
})(router, app);