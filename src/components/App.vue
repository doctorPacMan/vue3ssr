<style lang="less">
@import '@/assets/css/env.less';
.siteHeader {
    display: contents;
}
.siteBodyer {
    margin: 0 auto;
    min-width: @page-min-width;
    max-width: @page-max-width;
    padding: 0 1rem;
}
.siteFooter {
    margin-top: 36px;
}
</style>

<template>
<div>
    <teleport to="head"><AppHead/></teleport>
    <div class="siteHeader"><SiteHeader/></div>
    <div class="siteIntros"><TitleImage/></div>
    <div class="siteBodyer"><RouterView/></div>
    <div class="siteFooter"><SiteFooter/></div>
    <CookieWarn />
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppHead from '@/components/AppHead.vue';
import SiteHeader from '@/components/SiteHeader.vue';
import SiteFooter from '@/components/SiteFooter.vue';
import TitleImage from '@/components/Intro/Intro.vue';
import CookieWarn from '@/components/CookieWarn.vue';
export default defineComponent({
    name: 'App',
    components: {
        AppHead,
        SiteHeader,
        TitleImage,
        SiteFooter,
        CookieWarn,
    },
    // serverPrefetch: async () => null,
});
</script>