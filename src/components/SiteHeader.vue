<style lang="less">
@import '@/assets/css/env.less';
.SiteHeader .button-sale {
    padding: 0;
    min-width: 2.75rem;
    line-height: 1.5rem;
    font-size: 1.25rem;
    & > b {display: none}
    & > .icon {
        margin: 0;
        width: 1.5rem;
        height: 1.5rem;
    }
    background-color: rgb(227, 30, 36);
    &:hover {background-color: rgb(169, 0, 5)}
    @media (min-width: @screen-mobile) {
        padding: 0 .625rem .0625rem .875rem;
        & > b {display: unset}
        & > .icon {
            margin-left: .25rem;
            width: 1.25rem;
            height: 1.25rem;
        }
    }
}

.SiteHeader {
    background: white;
    padding: 11px 1rem 10px;
    height: 44px;
    position: relative;
    & > div {
        max-width: 1600px;
        margin: 0 auto;
        height: 100%;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-between;
    }
    &__sale,
    &__bttn {
        flex: 1 1 20%;
    }
    &__bttn {
        & > button {
            cursor: pointer;
            color: @darkblue;
            height: 44px;
            width: 44px;
            border: none;
            background: none;
            padding: 3px 0 0;
            .icon--close {
                box-sizing: border-box;
                padding: 4px;
            }
        }
    }
    &:not([aria-expanded]) &__bttn > button .icon:nth-child(2) {display: none}
    &[aria-expanded] &__bttn > button .icon:nth-child(1) {display: none}

    &__sale {
        text-align: right;

    }
    &__logo {
        text-align: center;
        flex: 1 1 60%;
        & > img {vertical-align: middle}
    }

    &__menu {
        flex: 0 1 100%;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        z-index: 10;
        padding: 1.5rem 3.125rem 2rem;
        max-width: unset;
        background: whitesmoke;
        display: flex;
        flex-flow: column wrap;
        justify-content: flex-start;
        align-items: flex-start;
        text-align: left;
        gap: .125rem;
        box-shadow: 0 14px 10px -10px rgba(0, 0, 0, .25);
        & > a {
            flex: 0 0 auto;
            padding: .5rem 1rem;
            text-decoration: none;
            white-space: nowrap;
        }
    }
    &:not([aria-expanded]) &__menu {display: none}

    @media (min-width: @screen-tablet) {
        &__logo {
            flex: 1 1 35%;
            padding-right: 5%;
        }
        &__sale {
            flex: 1 1 20%;
            padding-left: 2%;
        }
        &__bttn {
            display: none;
        }
        &__menu {
            display: flex;
            padding: 0;
            box-shadow: none;
            position: static;
            max-width: 800px;
            text-align: center;
            flex-flow: row nowrap;
            align-items: center;
            justify-content: space-between;
            background: none;
            & > a {padding: 0 .125rem}
        }
        &:not([aria-expanded]) &__menu {display: flex}
    }
}
</style>

<template>
<div class="SiteHeader" id="siteheader">
    <div>
        <div class="SiteHeader__bttn">
            <button type="button" onclick="toggleHeaderMenu()">
                <icon symbol="menu"/><icon symbol="close"/>
            </button>
        </div>
        <div class="SiteHeader__logo">
            <img src="/static/img/logo.svg" width="195" height="25" />
        </div>
        <div class="SiteHeader__menu">
            <a v-for='(v, k) in menuItems' :key='k' :href="v.href">{{v.name}}</a>
        </div>
        <div class="SiteHeader__sale">
            <a class="button-sale">
                <b>Скидки</b>
                <icon symbol="sale" />
            </a>
        </div>
    </div>
</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'SiteHeader',
    setup(params:void) {
        return {
            menuItems: [
                {name:'Лицо', href:'https://apteka.ru/category/basic_care/face/'},
                {name:'Тело', href:'https://apteka.ru/category/basic_care/body/'},
                {name:'Волосы', href:'https://apteka.ru/category/basic_care/body/'},
                {name:'Солнцезащитные средства', href:'https://apteka.ru/category/basic_care/sunscreen/'},
                {name:'Детская косметика', href:'https://apteka.ru/category/derma_cosmetics/baby/'},
            ]
        }
    },
});
</script>