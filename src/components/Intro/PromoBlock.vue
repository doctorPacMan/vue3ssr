<style lang="less">
@import '@/assets/css/css.less';
.PromoBlock {
    background: transparent none no-repeat 0 100%;
    background-image: url('/assets/img/illustration.svg');
    background-size: 100% 100%;
    background-clip: padding-box;
    width: 345px;
    height: 201px;
    padding: 0 0 2px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-end;
    align-items: flex-start;
    box-sizing: border-box;
    & > a {
        flex: 0 0 auto;
        margin: 0 0 0 8px;
    }
    .button {
        border-radius: 0 18px 0 18px;
        min-height: 58px;
        width: 214px;
        padding: 0 0;
        font-size: 18px;
        box-shadow: none;
        & > .icon {
            margin: .125rem 0 0 .5rem;
            height: .875rem;
            width: .875rem;
        }
    }

    @media (min-width: @screen-mobile) {
        width: 641px;
        height: 377px;
        padding-bottom: 5px;
        & > a {margin-left: 14px}
        .button {
            border-radius: 0 26px 0 26px;
            font-size: 28px;
            font-weight: 300;
            width: 424px;
            min-height: 5.75rem;
            & > .icon {
                margin: .25rem .75rem 0;
                height: 1.125rem;
                width: 1.125rem;
            }
        }
    }
}

</style>

<template>
<div class="PromoBlock">
    <a class="button" href="https://apteka.ru/promotions/">
        <span>Все акции месяца</span>
        <icon symbol="rarr" />
    </a>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({name: 'PromoBlock'});
</script>