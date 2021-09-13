<template>
  <h3>home!</h3>
  САМЫЕ ОБСУЖДАЕМЫЕ ТОВАРЫ

  <button class="button">button</button>
  <button class="button-reds">button</button>

  <h1 v-text='`Calibri H${1} Regular`'/>
  <h2 v-text='`Calibri H${2} Regular`'/>
  <h3 v-text='`Calibri H${3} Regular`'/>
  <h4 v-text='`Calibri H${4} Regular`'/>
  <h5 v-text='`Calibri H${5} Regular`'/>
  <h6 v-text='`Calibri H${6} Regular`'/>

}


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