<template>
    <title v-text='$data.head.title'/>
    <meta name="description" :content='$data.head.title'/>
    <meta name="keywords" content=""/>

    <meta property="og:title" :content='$data.head.title'/>
    <meta property="og:description" :content='$data.head.title'/>
    <meta property="og:image" content="/assets/apple-touch-icon.png"/>

    <link rel="icon" href="/assets/favicon.ico"/>
    <link rel="apple-touch-icon" href="/assets/apple-touch-icon.png"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { isSSR } from "@/helpers";
import { HeadMeta, MetaTag } from "@/interfaces";

export default defineComponent({
    name: 'AppHead',
    setup() {
        const cspList:{[key:string]: string[]} = {
            ['base-uri']: ['\'self\''],
            ['object-src']: ['\'self\''],
            ['script-src']: [
                '\'self\'',
                '*.yandex.ru',
                '*.googletagmanager.com',
                '*.google-analytics.com',
            ]
        };
        const conSecPol:string[] = [];
        for (let nv in cspList) conSecPol.push(`${nv} ${cspList[nv].join(' ')}`);
        return {
            conSecPol: conSecPol.join('; '),
        }
    },
    data():{head:HeadMeta} {
        if (isSSR()) "SSR";
        return {
            head:{
                title: 'Всё для вашей красоты на одном сайте',
                meta: [
                    {
                        name: 'description',
                        content: 'Description!'
                    } as MetaTag,
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
                        href: 'https://vsyacosmetika.ru'
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