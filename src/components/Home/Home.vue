<style lang="less">
.GoodsGroup {
    &__more {
        float: right;
        margin: 1rem 0 0;
    }
    &__title {
        margin: 0;
    }
}

.tilesgrid {
    .ProductTile {
        height: 100%;
    }
    &, & > li {
        margin: 0;
        padding: 0;
        list-style: none;
        outline: 1px solid cyan;
        outline-offset: -1px;
    }
    gap: 2rem 1.5rem;
    display: grid;
    grid-auto-flow: row dense;
    grid-template-columns: repeat(3, 1fr);
    @media (min-width: 1400px) {
        grid-template-columns: repeat(4, 1fr);
    }
}
</style>
<template>
<div>
    <div class="GoodsGroup" v-for='(group, gk) in groups' :key='gk'>
        <a class="GoodsGroup__more link-more" :href='group.href'>
            <span>Больше товаров</span>
            <icon symbol="rarr" />
        </a>

        <h3 class="GoodsGroup__title">{{group.title}}</h3>

        <ul class="GoodsGroup__items tilesgrid">
            <li v-for='(item,k) in group.items' :key='k'>
                <ProductTile :item='item'/>
            </li>
        </ul>

    </div>
</div>
</template>

<script lang="ts">
import { groups as groupsJson } from '@/data/items';
import { defineComponent } from 'vue';
import ProductTile from '@/components/ProductTile.vue';
export default defineComponent({
    name: 'Home',
    components: {
        ProductTile,
    },
    computed: {
        // ...mapState('user', ['info', 'token']),
        // ...mapGetters('message', ['messages']),
    },
    // methods: mapActions(['start']),
    data():{groups:any[]} {
        return {
            groups: [],
        };
    },
    setup(props) {
        console.log('props', props);
        console.log('groups', [...groupsJson]);
        // this.groups = [...groupsJson];
    },
    mounted() {
        this.groups = [...groupsJson];
        // console.log('mm');
    }
});
</script>