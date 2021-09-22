<style lang="less">
.icon {
    margin: 1px;
    display: inline-block;
    width: 24px;
    height: 24px;
    stroke: currentColor;
    color: currentColor;
    fill: currentColor;
    & > svg {
        width: 100%;
        height: 100%;
        display: block;
    }
}
</style>
<template>
<i class="icon" :class='`icon--${symbol}`'>
<svg><use :xlink:href='href' :href='href'></use></svg>
</i>
</template>

<script lang="ts">
// eslint-disable-next-line
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'IconSvg',
    props: {
        symbol: {type: String, required: false, default: 'sale'}
    },
    computed: {
        href():string {
            return `${this.spritePath}#${this.symbol}`;
        },
        spritePath():string {
            return '/assets/sprite.svg';
        }
    },
});
</script>