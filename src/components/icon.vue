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
const spritePath = require('@/assets/sprite.svg');
import { defineComponent } from 'vue';
export default defineComponent({
    props: {
        symbol: {type: String, required: false, default: 'sale'}
    },
    data() {
        return {
            // href: `${this.spritePath}#${this.symbol}`,
        }
    },
    computed: {
        href():string {
            return `${this.spritePath}#${this.symbol}`;
        },
        spritePath():string {
            return spritePath.default || spritePath || '/svgsprite';
        }
    },
});
</script>