<style lang="less">
@import '@/assets/css/env.less';
.siteBodyer {
    margin: 0 auto;
    min-width: @page-min-width;
    max-width: @page-max-width;
    padding: 0 1rem;
}
</style>

<template>
    <div class="siteHeader"><SiteHeader/></div>
    <div class="siteIntros"><TitleImage/></div>
    <div class="siteBodyer"><RouterView/></div>
    <div class="siteHeader"><SiteFooter/></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SiteHeader from '@/components/SiteHeader.vue';
import SiteFooter from '@/components/SiteFooter.vue';
import TitleImage from '@/components/Intro/Intro.vue';
export default defineComponent({
    name: 'AppRoot',
    components: {
        SiteHeader,
        TitleImage,
        SiteFooter,
    },
    serverPrefetch: async () => null,
});
</script>