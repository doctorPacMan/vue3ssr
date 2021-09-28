<template>
<div>
    <GoodsGroup v-for='(group, gk) in groups' :key='gk' :group='group'/>
    <Article />
</div>
</template>

<script lang="ts">
import { groups as groupsJson } from '@/../data/items';
import { defineComponent } from 'vue';
import Article from '@/components/Article/Article.vue';
import GoodsGroup from '@/components/GoodsGroup/GoodsGroup.vue';
export default defineComponent({
    name: 'Home',
    components: {
        GoodsGroup,
        Article,
    },
    setup() {
        return {
            groups: [...groupsJson],
        };
    },
});
</script>