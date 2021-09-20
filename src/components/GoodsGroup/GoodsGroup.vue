<style lang="less">
@import '@/assets/css/env.less';
.GoodsGroup {
    margin-top: 3rem;
    & + & {
        margin-top: 5.75rem;
    }
    &__title {
        margin: 0 0 1.5rem;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: flex-end;
        & > h3 {
            margin: 0;
            font-size: @font-size-4;
        }
        & > a {
            display: none;
            margin: 0 0 .125rem;
        }
    }
    &__more {
        margin-top: 1.5rem;
        text-align: center;
    }
    @media (min-width: @screen-mobile) {
        &__more {display: none}
        &__title > a {display: block}
    }
}

.tilesgrid {
    outline: 0px solid cyan;
    outline-offset: -1px;

    width: 100%;
    max-width: @page-max-width;
    margin: 0 auto;

    .ProductTile {
        height: 100%;
    }
    &, & > li {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    & > li {
        overflow: hidden;
        outline: inherit;
        outline-offset: inherit;
    }

    gap: 1.75rem .75rem;
    display: grid;
    grid-auto-flow: row dense;
    grid-template-columns: repeat(2, 1fr);

    @media (min-width: @screen-mobile) {
        gap: 2.875rem 1.5rem;
        grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: @screen-tablet) {
        grid-template-columns: repeat(4, 1fr);
    }

    &--lines-1,
    &--lines-2 {
        grid-auto-rows: 0;
        grid-template-rows: repeat(1, max-content);
    }
    &--lines-1 {
        row-gap: 0;
    }
    &--lines-2 {
        grid-template-rows: repeat(2, max-content);
    }

    /*
    &--lines-1 {
        @media (max-width: 1400px) {
            & > li:nth-child(n + 4) {
                outline-color: red;
            }
        }
        @media (max-width: 600px) {
            & > li:nth-child(n + 3) {
                outline-color: red;
            }
        }
    }
    */
}

</style>
<template>
<div class="GoodsGroup">

        <div class="GoodsGroup__title">
            <h3>{{group.title}}</h3>
            <a class="link-rarr" :href='group.href'>
                <span>Больше товаров</span>
                <icon symbol="rarr" />
            </a>
        </div>

        <ul class="GoodsGroup__items tilesgrid"
            :class="{[`tilesgrid--lines-${group.lines}`]: !!group.lines}">

            <li v-for='(item,k) in group.items' :key='k'>
                <ProductTile :group='group.url' :item='item'/>
            </li>
        </ul>

        <div class="GoodsGroup__more">
            <a class="link-rarr" :href='group.href'>
                <span>Больше товаров</span>
                <icon symbol="rarr" />
            </a>
        </div>
</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import ProductTile from './ProductTile.vue';
export default defineComponent({
    name: 'GoodsGroup',
    components: {ProductTile},
    props: {
        group: {required: true}
    },
    setup(props) {
        if (!props) console.log(props);
    },
})
</script>
