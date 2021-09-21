/*
<!-- Yandex.Metrika counter -->
<script type="text/javascript">
    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    ym(62730118, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        ecommerce:"ymDataLayer"
    });
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/62730118" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->
*/
const yaMetrix = {
    trackerId: 62730118,
    ytagConfig: {
        defer: true,
        triggerEvent: true,
        accurateTrackBounce: true,
        ecommerce: 'ymDataLayer',
        trackLinks: true,
        clickmap: false,
        webvisor: false,
    },
    initialize(callback) {
        this.ytag('init', this.ytagConfig);

        const script = window.document.createElement('script');
        script.setAttribute('src', `https://mc.yandex.ru/metrika/tag.js?id=${this.trackerId}`);
        script.setAttribute('id', `yandextagmanager--${this.trackerId}`);
        script.setAttribute('async', '');
        script.setAttribute('defer', '');

        // triggerEvent callback
        const en = `yacounter${this.trackerId}inited`;
        document.addEventListener(en, () => this.ytagOnload(callback));
        this.ytag('getClientID', (clientID) => console.log('clientID:', clientID));

        this.appendScript(script);
    },
    get api() {
        return window[`yaCounter${this.trackerId}`];
    },
    ytagOnload(callback) {
        this.trace(`\u262F yaMetrix ready (${this.api.getClientID()})`);
        callback();
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
        args.unshift(action);
        args.unshift(this.trackerId);
        window['ym'].apply(window, args);
    },
    reachGoal(target, params) {
        const payload = !params ? undefined : {...params};
        this.ytag('reachGoal', target, payload);
    },
    appendScript(script, replace = false) {
        const head = document.getElementsByTagName('head')[0];
        const uid = script.getAttribute('id');
        const ext = !uid ? null : window.document.getElementById(uid);
        if (!ext) {
            head.insertBefore(script, head.firstElementChild);
        } else if (replace) {
            if (ext.parentNode) ext.parentNode.removeChild(ext);
            head.insertBefore(script, head.firstElementChild);
        }
    },
    trace(...args) {
        console.log.apply(console, args);
    },
};
document.addEventListener('DOMContentLoaded', () => yaMetrix.initialize(() => {

    const re = new RegExp('^(https?)://apteka.ru($|\/)');
    const links = Array.from(document.body.querySelectorAll('a[href]') || []);
    links.filter(a => {
        if (!re.test(a.href)) return false;
        const onclick = (href, event) => {
            event.preventDefault();
            yaMetrix.reachGoal('gotoApteka', {link: href});
            setTimeout(() => window.location = href, 150);
        };
        return a.addEventListener('click', (e) => onclick(a.href, e)), true;
    });
}));