<template>
    <template v-for='(n, k) in Array(6)' :key='k'>
        <component :is="`h${k+1}`" v-text='`Обыкновенный заголовок H${k+1} Regular`' />
    </template>
    <hr />

    <button class="button">Button</button>
    <button class="button-reds">Button</button>
    <button class="button-sale"><b>Скидки</b></button>
    <a class="button">Button</a>
    <a class="button-reds">Button</a>

    <a class="button-sale">
        <b>Скидки</b>
        <icon symbol="sale" />
    </a>

    <hr />

    <a class="link-more">
        <span>Больше товаров</span>
        <icon symbol="rarr" />
    </a>

    <hr />

    <a class="button-huge">
        <span>Все акции месяца</span>
        <icon symbol="rarr" />
    </a>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Icon from "@/components/icon.vue";
export default defineComponent({
    name: 'Page',
    components: {
        Icon,
    },
    computed: {
    },
    mounted() {
        console.log('mm');
    }
});
</script>