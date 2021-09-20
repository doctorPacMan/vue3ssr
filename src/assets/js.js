function toggleHeaderMenu() {
    const an = 'aria-expanded';
    const el = document.getElementById('siteheader');
    if (el.getAttribute(an) === null) el.setAttribute('aria-expanded', '');
    else el.removeAttribute('aria-expanded');
    // console.log();
}

const tracking = {
    init() {

        const re = new RegExp('^(https?)://apteka.ru($|\/)');
        const links = Array.from(document.body.querySelectorAll('a[href]') || [])
        links.filter(a => {
            if (!re.test(a.href)) return false;
            a.addEventListener('click', (e) => this.escape2apteka(a.href, e));
            return true;
        });

        this.ym('getClientID', (clientID) => console.log('clientID:', clientID));
    },
    ym(...args) {
        if (typeof window === 'undefined' || !window.ym) return;
        window.ym.apply(window, [62730118, ...args]);
        return;
    },
    escape2apteka(href, event) {
        if (event) event.preventDefault();

        const cb = () => console.log('reachGoal goto');
        this.ym('reachGoal', 'gotoApteka', {link: href}, cb);

        setTimeout(() => window.location = href, 0);
    },
};
tracking.init();
