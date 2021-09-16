<style lang="less" src='@/assets/css/css.less'></style>
<style lang="less">
@import '@/assets/css/env.less';
.siteBodyer {
    margin: 0 auto;
    min-width: 328px;
    max-width: 1600px;
    padding: 16px;

    .Intro {
        & > h1 {
            font-size: 28px;
            line-height: 1.25;
            margin: 0 0 1.75rem;
            & > i {
                display: block;
                white-space: nowrap;
                font-style: normal;
                font-weight: 400;
            }
        }
        &__search {

        }
        &__promos {
        }
        @media (min-width: @screen-tablet) {
            & > h1 {
                margin-bottom: .5rem;
                font-size: 72px;
                line-height: 1;
                float: left;
            }
            &__search {
                width: 570px;
                float: left;
                clear: left;
            }
            &__promos {
                padding-left: 54px;
                overflow: hidden;
            }
        }
    }
}
</style>
<template>
<div class="siteHeader"><SiteHeader /></div>
<div class="siteBodyer"><router-view /></div>
<div class="siteHeader"><SiteFooter /></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SiteHeader from '@/components/SiteHeader.vue';
import SiteFooter from '@/components/SiteFooter.vue';
export default defineComponent({
    components: {
        SiteHeader,
        SiteFooter,
    },
    serverPrefetch: async () => null,
    name: 'root',
    props: {},
    data() {
        return {};
    },
    computed: {},
});
</script>