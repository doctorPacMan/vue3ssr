<style lang="less">
@import '@/assets/css/env.less';
.SiteIntros {
    @intro-width: 1464px;
    max-width: 732px;
    padding: 0 1rem;
    -x-background: white;
    margin: 1.875rem auto 0;
    display: flex;
    flex-flow: column nowrap;
    align-items: stretch;
    h1 {
        white-space: nowrap;
        font-size: @font-size-4;
        margin: 0;
        & > i {
            white-space: nowrap;
            font-style: normal;
            font-weight: 400;
        }
    }

    &__header {
        .SearchForm {
            margin: 1.5rem 0 0;
        }
    }

    &__search {
        margin: 1.875rem 0 0;
    }

    &__promos {
        flex: 0 0 auto;
        align-self: center;
        margin: 1.75rem 0 0;
    }

    @media (min-width: @screen-tablet) {
        margin-top: 95px;
        padding: 0;
        h1 {
            margin-bottom: .5rem;
            font-size: @font-size-1;
            line-height: 1.2;
        }
    }
    @media (min-width: calc(@intro-width + 64px)) {
        padding: 0;
        max-width: unset;
        width: @intro-width;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-between;
        h1 {
            margin-bottom: .5rem;
            font-size: 72px;
            line-height: 1;
        }
        &__header {
            flex: 0 0 auto;
            .SearchForm {
                margin: 2rem 0 0;
                width: 570px;
            }
        }
        &__promos {
            margin-top: 0;
            overflow: hidden;
        }
    }
    /**/
}
</style>

<template>
<div class="SiteIntros">
    <div class="SiteIntros__header">
        <h1>
            Всё для вашей красоты
            <br /><i>на одном сайте</i>
        </h1>
        <SearchForm />
    </div>
    <div class="SiteIntros__promos"><PromoBlock /></div>
    <!-- hr style="clear:both" / -->
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SearchForm from '@/components/SearchForm.vue';
import PromoBlock from '@/components/PromoBlock.vue';
export default defineComponent({
    components: {
        SearchForm,
        PromoBlock,
    },
})
</script>
