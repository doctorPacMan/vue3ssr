<template>
  <title v-bind="attributes({})">
      {{ head.title }}
  </title>
  <meta
      v-for="(meta, i) in head.meta"
      v-bind="attributes(meta)"
      :key="`meta-${i}`"/>
  <link
      v-for="(link, i) in head.links"
      v-bind="attributes(link)"
      :key="`link-${i}`"/>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { isSSR } from "@/helpers";
import { HeadMeta, MetaTag } from "@/interfaces";

export default class PageMeta extends Vue {
    attributes(attributes: MetaTag): MetaTag {
        return {
            ...(isSSR() && { ssr: true }),
            ...attributes
        };
    }

    mounted() {
        this.$nextTick(() => {
            Array.from(
                document.getElementsByTagName("head")[0].children
            ).forEach((node: Element) => {
                if (node.getAttribute("ssr")) {
                    node.remove();
                }
            });
        });
    }

    get head(): HeadMeta {
        return {
            title: 'SSR title!!!',
            meta: [
                {
                    name: "description",
                    content: 'SSR description'
                },
            ],
            links: [
                {
                    rel: "canonical",
                    href: 'https://apteka.tech'
                }
            ]
        };
    }
}
</script>