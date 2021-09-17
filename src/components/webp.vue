<style lang="less">
.webpimg {
    box-sizing: border-box;
    display: inline-block;
    min-height: .5rem;
    min-width: 2.5rem;
    object-fit: scale-down;
    overflow: hidden;
    & > img {
        max-height: 100%;
        object-fit: inherit;
        display: block;
        width: 100%;
        height: 100%;
    }
}
</style>

<template>
<picture class="webpimg" :data-webp='imageWebp ? "" : null'>
    <source :srcset='imageWebp' type="image/webp"/>
    <source :srcset='src'/>
    <img loading="lazy"
        :width='width'
        :height='height'
        :alt='alt'
        :src='src' />
</picture>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    props: {
        src: {type: String, required: true},
        alt: {type: String, default: ''},
        width: {type: [String, Number], default: null},
        height: {type: [String, Number], default: null},
    },
    setup(props) {
        const imageExt = /\.(png|gif|jpe?g|jfif)$/;
        const imageWebp = props.src.replace(imageExt, '.webp');
        return {
            imageWebp,
        };
    }
});
</script>