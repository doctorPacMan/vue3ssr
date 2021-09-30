<style lang="less">
@import '@/assets/css/env.less';
.ProductTile {
    min-width: 158px;
    color: @text;
    & > a {
        min-height: 100%;
        display: flex;
        flex-flow: column nowrap;
        align-items: flex-start;
        justify-content: center;
        &:link,
        &:hover,
        &:visited {
            color: inherit;
            text-decoration: none;
        }
    }
    &__photo {
        width: 100%;
        height: 231px;
        border-radius: 6px;
        background: white;
        overflow: hidden;
        .webpimg {
            display: block;
            width: 100%;
            height: 100%;
        }
    }
    &__label {
        margin: .75rem 1rem 0;
        font-size: 1.125rem;
        font-size: .875rem;
        line-height: 1.43;
        &:hover {
            color: @blue;
        }
    }
    &__baton {
        padding-top: 1rem;
        margin: auto 1rem 0;
        .button {
            text-transform: uppercase;
            font-weight: 600;
            width: 7.5rem;
        }
    }
}
</style>

<template>
    <div class="ProductTile">
        <arulink :href='itemHref'>
            <span class="ProductTile__photo">
                <webp :src='`/data/photo/${group.url}/${item.photo || "1.png"}`'/>
            </span>
            <span class="ProductTile__label">
                <span v-text='item.name'/>
            </span>
            <span class="ProductTile__baton">
                <button class="button">Заказать</button>
            </span>
        </arulink>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ProductTile',
    props: {
        item: {required: true},
        group: {required: true},
   },
    computed: {
        itemHref() {
            const {item, group} = this.$props as any;
            return item.href || group.href || null;
        }
    },
});
</script>