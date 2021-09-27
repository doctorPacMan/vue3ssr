const $tracking = {
    googleId: 'UA-35149245-9',
    yandexId: 85458034,
    get ymApi() {
        return window[`yaCounter${this.yandexId}`];
    },
    ytag(action, ...args) {
        if (typeof window === 'undefined') return;
        if (!window['ym']) {
            window['ym'] = (...ymArguments) => {
                window['ym'].a = window['ym'].a || [];
                window['ym'].a.push(ymArguments);
            };
            window['ym'].l = Date.now();
        }
        const payload = [this.yandexId, action, ...args];
        window['ym'].apply(window, payload);
        // this.trace(`ytag> ${action}`, payload);
    },
    reachGoal(name, params = {}) {
        const payload = !params ? undefined : {...params};
        this.ytag('reachGoal', name, payload);
    },
    gtag(action, ...args) {
        if (typeof window === 'undefined') return;
        window['gtag'].apply(window, !args ? [action] : [action, ...args]);
        // this.trace(`gtag> ${action}`, !args ? [] : [...args]);
    },
    gtagEvent(name, params = {}) {
        const payload = Array.isArray(params) ? [...params] : {...params};
        this.gtag('event', name, payload);
    },
    initGoogleAnalytics() {
        return new Promise((resolve, reject) => {
            this.gtag('get', this.googleId, 'client_id', (clientId) => resolve(clientId));
        });
    },
    initYandexMetrica() {
        return new Promise((resolve, reject) => {
            this.ytag('getClientID', (clientId) => resolve(clientId));
        });
    },
    async init() {

        const cid = await Promise.all([
            this.initYandexMetrica(),
            this.initGoogleAnalytics()
        ]);
        this.trace(`YM#${this.yandexId} inited`, cid[0]);
        this.trace(`GA#${this.googleId} inited`, cid[1]);
        return this;
    },
    trace(...args) {
        console.log.apply(console, ['[BB]', ...args]);
    },
    dispatch(target, payload) {
        this.reachGoal(target, payload);
        this.gtagEvent(target, payload);
    },
};

document.addEventListener('DOMContentLoaded', async () => {
    window['$tracking'] = await $tracking.init();

    const re = new RegExp('^(https?)://apteka.ru($|\/)');
    const links = Array.from(document.body.querySelectorAll('a[href]') || []);
    links.filter(a => {
        if (!re.test(a.href)) return false;
        const onclick = (href, event) => {
            event.preventDefault();
            $tracking.dispatch('gotoApteka', {link:href});
            setTimeout(() => window.location = href, 150);
        };
        return a.addEventListener('click', (e) => onclick(a.href, e)), true;
    });
});
