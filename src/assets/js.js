function toggleHeaderMenu() {
    const an = 'aria-expanded';
    const el = document.getElementById('siteheader');
    if (el.getAttribute(an) === null) el.setAttribute('aria-expanded', '');
    else el.removeAttribute('aria-expanded');
    // console.log();
}

const tracking = {
    ym(...args) {
        window.ym.apply(window, [62730118, ...args]);
        return;
    },
    escape2apteka(href, event) {
        if (event) event.preventDefault();

        const target = 'escape2apteka';
        const cb = () => console.log('reachGoal', target);
        this.ym('reachGoal', target, {link: href}, cb);

        setTimeout(() => window.location = href, 0);
    },
};

function trackHeaderMenu() {
    const an = 'aria-expanded';
    const el = document.getElementById('siteheader');
    if (el.getAttribute(an) === null) el.setAttribute('aria-expanded', '');
    else el.removeAttribute('aria-expanded');
    // console.log();
}

(function bindTracking() {
    const re = new RegExp('^(https?)://apteka.ru($|\/)');
    const links = Array.from(document.body.querySelectorAll('a[href]') || [])
    links.filter(a => {
        if (!re.test(a.href)) return false;
        a.addEventListener('click', (e) => tracking.escape2apteka(a.href, e));
        return true;
    });
    tracking.ym('getClientID', (clientID) => console.log('clientID:', clientID));
})()