class SiteApp {
    cookieName = 'allow_cookies';
    divCookieWarn = null;
    divSiteHeader = null;
    headerSticky = false;
    constructor() {
        this.divCookieWarn = document.getElementById('cookieWarn');
        if (!this.allowCookies) this.allowCookies = false;

        this.divSiteHeader = document.getElementById('siteheader');
        this.headerStickyObserve();
    }
    toggleHeaderMenu() {
        const attr = 'aria-expanded';
        const el = this.divSiteHeader;
        if (el.getAttribute(attr) === null) el.setAttribute(attr, '');
        else el.removeAttribute(attr);
    }
    set allowCookies(allow) {
        const exp = new Date();
        exp.setFullYear(exp.getFullYear() + (allow ? 1 : -1));
        document.cookie = `${this.cookieName}=1; expires=${exp.toUTCString()}; path=/`;

        const el = this.divCookieWarn;
        if (allow) el.setAttribute('aria-hidden', '');
        else el.removeAttribute('aria-hidden');
    }
    get allowCookies() {
        const match = document.cookie.match(new RegExp(`(^| )${this.cookieName}=([^;]+)`));
        return match ? match[2] : undefined;
    }
    headerStickyObserve() {
        const el = this.divSiteHeader;
        window.addEventListener('scroll', (e) => {
            const scrollTop = (window.pageYOffset || document.documentElement.scrollTop || 0);
            const sticky = scrollTop > 0;
            if (this.headerSticky === sticky) return;
            if (this.headerSticky = sticky) el.setAttribute('data-sticky', '');
            else el.removeAttribute('data-sticky');
        });
    }
};

document.addEventListener('DOMContentLoaded', async () => {
    window['$app'] = new SiteApp();
});

