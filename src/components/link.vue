<template>
<a :href='hrefUtm'>
    <slot>link</slot>
</a>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'AruLink',
    props: {
        href: {type: String, required: false, default: '/'}
    },
    computed: {
        hrefUtm():string {

            let href:string = this.$props.href;
            if (!href.startsWith('http')) href = `https://apteka.ru${href}`;

            const url = new URL(href);
            const utm = encodeURI([
                'utm_source=vsyacosmetika.ru',
                'utm_medium=referral',
                'utm_campaign=general',
            ].join('&'));

            if (!url.search) url.search = utm;
            else url.search += `&${utm}`;

            return url.href;
        },
    },
});
</script>