import { createApplication } from './app'

export default (context: any) => {
    return new Promise((resolve, reject) => {

        const { app, router } = createApplication();

        if (context?.url) router.push(context.url);
        else router.push({name: 'home'});

        router.isReady()
        .then(() => {
            const matchedComponents = router.currentRoute.value.matched;
            if (!matchedComponents.length) return reject(new Error('404'));
            return resolve({ app, router });
        }).catch(() => reject);
    })
}