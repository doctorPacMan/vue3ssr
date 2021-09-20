<template>
<teleport to="head">
    <title v-bind="attributes({})" v-text='head.title'/>
    <meta property="og:title" :content='head.title'/>
    <meta property="og:image" content="https://storage.yandexcloud.net/image/a_meta-logo.png">
    <meta
        v-for="(meta, i) in head.meta"
        v-bind="attributes(meta)"
        :key="`meta-${i}`"/>
    <link
        v-for="(link, i) in head.links"
        v-bind="attributes(link)"
        :key="`link-${i}`"/>
</teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { isSSR } from "@/helpers";
import { HeadMeta, MetaTag } from "@/interfaces";

export default defineComponent({
    name: 'PageMeta',
    setup() {
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
    mounted() {
        this.$nextTick(() => {
            const children = Array.from(document.getElementsByTagName("head")[0].children);
            children.forEach((node: Element) => {if (node.getAttribute("ssr")) node.remove()});
        });
    },
    methods: {
        attributes(attributes: MetaTag): MetaTag {
            return {
                ...(isSSR() && { ssr: true }),
                ...attributes
            };
        },
    },
    data():{head:HeadMeta} {
        return {
            head:{
                title: 'косметичка.рф',
                meta: [
                    {
                        name: 'description',
                        content: 'Description!'
                    },
                    {
                        name: 'og:description',
                        content: 'Description!'
                    },
                    {
                        name: 'keywords',
                        content: 'косметика'
                    },
                ],
                links: [
                    {
                        rel: 'canonical',
                        href: 'https://apteka.tech'
                    },
                    {
                        rel: 'icon',
                        href: '/assets/favicon.ico'
                    },
                    {
                        rel: 'apple-touch-icon',
                        href: '/assets/apple-touch-icon.png'
                    },
                ],
            },
        };
    },
});
</script>

<!-- script lang="ts">


import { Vue } from "vue-class-component";
import { isSSR } from "@/helpers";
import { HeadMeta, MetaTag } from "@/interfaces";

export default class PageMetaTeleport extends Vue {

    attributes(attributes: MetaTag): MetaTag {
        return {
            ...(isSSR() && { ssr: true }),
            ...attributes
        };
    }

    mounted() {
        this.$nextTick(() => {
            const children = Array.from(document.getElementsByTagName("head")[0].children);
            children.forEach((node: Element) => {if (node.getAttribute("ssr")) node.remove()});
        });
    }

    get head(): HeadMeta {
        return {
            title: 'косметичка.рф',
            meta: [
                {
                    name: 'description',
                    content: 'Description!'
                },
                {
                    name: 'og:description',
                    content: 'Description!'
                },
                {
                    name: 'keywords',
                    content: 'косметика'
                },
            ],
            links: [
                {
                    rel: 'canonical',
                    href: 'https://apteka.tech'
                },
                {
                    rel: 'icon',
                    href: '/assets/favicon.ico'
                },
                {
                    rel: 'apple-touch-icon',
                    href: '/assets/apple-touch-icon.png'
                },
            ],
        };
    }
}
</script -->