<style lang="less">
.GoodsGroup {
    &__more {
        float: right;
        margin: 1rem 0 0;
    }
    &__title {
        margin: 0;
    }
    &--lines-1 {

    }
}

.tilesgrid {
    .ProductTile {
        height: 100%;
    }
    outline: 1px solid cyan;
    outline-offset: -1px;
    outline: none;
    &, & > li {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    gap: 2rem 1.5rem;
    display: grid;
    grid-auto-flow: row dense;
    grid-template-columns: repeat(3, 1fr);
    @media (min-width: 1400px) {
        grid-template-columns: repeat(4, 1fr);
    }

    & > li {
        outline: inherit;
        outline-offset: inherit;
    }

    &--lines-1 {
        outline-color: green;
        /*
        @media (max-width: 1400px) {
            & > li:nth-child(n + 4) {
                outline-color: red;
            }
        }
        @media (max-width: 600px) {
            & > li:nth-child(n + 3) {
                outline-color: red;
            }
        }
        */
    }
}
</style>
<template>
<div>
    <div class="Intro">
        <h1>
            Всё для вашей красоты
            <i>на одном сайте</i>
        </h1>
        <div class="Intro__search"><SearchForm /></div>
        <div class="Intro__promos"><PromoBlock /></div>
        <hr style="clear:both" />
    </div>

    <ArticlesIntro/>

    <!-- div class="GoodsGroup"
        v-for='(group, gk) in groups' :key='gk'>

        <a class="GoodsGroup__more link-more" :href='group.href'>
            <span>Больше товаров</span>
            <icon symbol="rarr" />
        </a>

        <h3 class="GoodsGroup__title">{{group.title}}</h3>

        <ul class="GoodsGroup__items tilesgrid"
            :class="{[`tilesgrid--lines-${group.lines || 0}`]: true}">

            <li v-for='(item,k) in group.items' :key='k'>
                <ProductTile :group='group.url' :item='item'/>
            </li>
        </ul>
    </div -->

</div>
</template>

<script lang="ts">
import { groups as groupsJson } from '@/../data/items';
import { defineComponent } from 'vue';
import SearchForm from '@/components/SearchForm.vue';
import PromoBlock from '@/components/PromoBlock.vue';
import ArticlesIntro from '@/components/ArticlesIntro.vue';
// import ProductTile from '@/components/ProductTile.vue';
export default defineComponent({
    name: 'Home',
    components: {
        // ProductTile,
        SearchForm,
        PromoBlock,
        ArticlesIntro,
    },
    computed: {
    },
    methods: {
    },
    data():{groups?:any[]} {
        return {
            // groups: [],
        };
    },
    setup(props) {
        console.log('props', props);
        const groups:any[] = [...groupsJson];
        return {
            groups,
        };
    },
    mounted() {
        console.log('groups', this.groups);
        // this.groups = [...groupsJson];
        // console.log('mm', this.groups2);
    }
});
</script>