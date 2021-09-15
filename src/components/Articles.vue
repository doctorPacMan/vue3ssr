<style lang="less">
@import '@/assets/css/css.less';
.Articles {
    &__intro {

        width: 1339px;
        height: 261px;
        height: 197px;
        width: 100%;
        height: auto;
        position: relative;
        &::before,
        &::after {
            content: '';
            position: absolute;
            left: 0; right: 0;
            top: 0; bottom: 0;
            z-index: 1;
        }
        &::before {
            background-color: #D7E3F9;
            border-radius: 24px;
        }
        &::after {
            content: none;
            background: transparent none no-repeat 0 100%;
            background-image: url('/static/img/img2.svg');
            background-size: 100% auto;
            margin: -36px -16px -10px;
            background-clip: padding-box;
        }
        & > div {
            position: absolute;
            z-index: 2;
        }
        & > img {
            width: calc(100% + 32px);
            height: auto;
            margin: 0 -16px;
            position: relative;
            z-index: 2;
        }
    }
    //
    border: 1px solid red;

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
    /** min-width: @screen-mobile @screen-tablet*/

    .button2 {
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
    }
}

</style>

<template>
<div class="Articles">
    <div class="Articles__intro">
        <img src="/static/img/img2.svg" width="1339" height="261" alt="" />
        <div>
            <a class="button"><span>Блок эксперта</span></a>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({name: 'Articles'});
</script>