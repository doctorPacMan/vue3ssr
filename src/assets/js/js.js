function toggleHeaderMenu() {
    const an = 'aria-expanded';
    const el = document.getElementById('siteheader');
    if (el.getAttribute(an) === null) el.setAttribute('aria-expanded', '');
    else el.removeAttribute('aria-expanded');
}
