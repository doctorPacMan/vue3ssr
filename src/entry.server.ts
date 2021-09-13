import { createApplication } from './app'
import { appStore } from './store/app'

export default (context: any) => {
  return new Promise((resolve, reject) => {
    const { app, router } = createApplication();

    // console.log('entry', typeof context, context?.url);
    if (context?.url) router.push(context.url);
    else router.push({path: '/'});
    router.isReady()
      .then(() => {
        const matchedComponents = router.currentRoute.value.matched;
        if (!matchedComponents.length) {
          return reject(new Error('404'));
        }
        const state = {
          app: appStore.getState()
        }
        return resolve({ app, router, state });
      }).catch(() => reject);
  })
}