<template>
  <h3>home!</h3>
  САМЫЕ ОБСУЖДАЕМЫЕ ТОВАРЫ

  <button class="button">button</button>
  <button class="button-reds">button</button>
  <ProductTile/>
</template>

<script lang="ts">
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
    mounted() {
        console.log('mm');
    }
});
</script>