class SiteApp {
    cookieName = 'allow_cookies';
    divCookieWarn = null;
    divSiteHeader = null;
    constructor() {
        this.divSiteHeader = document.getElementById('siteheader');
        this.divCookieWarn = document.getElementById('cookieWarn');
        if (!this.allowCookies) this.allowCookies = false;
    }
    toggleHeaderMenu() {
        const an = 'aria-expanded';
        const el = this.divSiteHeader;
        if (el.getAttribute(an) === null) el.setAttribute('aria-expanded', '');
        else el.removeAttribute('aria-expanded');
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
};

document.addEventListener('DOMContentLoaded', async () => {
    window['$app'] = new SiteApp();
});

