<style lang="less">
@import '@/assets/css/env.less';
.ArticleIntro {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    outline: 0px solid red;
    position: relative;
    border-radius: 20px;
    width: 100%;

    &::before {
        content: '';
        position: absolute;
        left: 0; right: 0;
        top: 0; bottom: 0;
        background-color: #D7E3F9;
        border-radius: inherit;
        margin: 4.5% 0 -0px;
    }
    & > img {
        flex: 0 0 auto;
        display: block;
        width: calc(100% + 24px);
        min-width: @screen-mobile;
        height: auto;
        margin: 0 -12px;
        position: relative;
        z-index: 2;
    }
    & > div {
        position: absolute;
        left: 0; right: 0;
        top: 0; bottom: 0;
        z-index: 2;
        display: flex;
        align-items: flex-end;
        justify-content: flex-start;
        border-radius: inherit;
    }
    .button {
        border-radius: inherit;
        border-top-left-radius: 0;
        border-bottom-right-radius: 0;
        height: 54px;
        width: 231px;
        padding: 0 0;
        font-size: @font-size-4;
        font-weight: 600;
        box-shadow: none;
        & > .icon {
            margin: .125rem 0 0 .5rem;
            height: .875rem;
            width: .875rem;
        }
    }
    @media (min-width: @screen-mobile) {
        border-radius: 26px;
    }
    @media (min-width: @screen-mobile) {
    }
}
</style>

<template>
<div class="ArticleIntro">
    <img src="/assets/img/img2.svg" width="1339" height="261" alt="" />
    <div>
        <a class="button"><span>Блок эксперта</span></a>
    </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'ArticleIntro',
});
</script>