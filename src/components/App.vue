<style lang="less" src='@/assets/css/css.less'></style>
<style lang="less">
@import '@/assets/css/css.less';
.rootview {
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
<div class="rootview">
    <!-- PageMetaTeleport / -->
    <!-- img src="/static/logo.png" width="36" height="36"/ -->
    <Articles/>
    <div class="Intro">
        <h1>
            Всё для вашей красоты
            <i>на одном сайте</i>
        </h1>
        <div class="Intro__search"><SearchForm /></div>
        <div class="Intro__promos"><PromoBlock /></div>
        <hr style="clear:both" />
    </div>

    <div class="rootview__promos">

    </div>

    <router-view />
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SearchForm from '@/components/SearchForm.vue';
import PromoBlock from '@/components/PromoBlock.vue';
import Articles from '@/components/Articles.vue';
export default defineComponent({
    components: {SearchForm, PromoBlock, Articles},
    serverPrefetch: () => (Promise.resolve(null)),
    name: 'root',
    props: {},
    data() {
        return {};
    },
    computed: {},
});
</script>