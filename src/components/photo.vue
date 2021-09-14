<style lang="less">
.ProductPhoto {
    display: inline-block;
    flex: 0 0 auto;
    & > img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
}
</style>
<template>
<i class="ProductPhoto">
    <img :src="`/static/photo/${name}`" />
</i>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'photo',
    props: {
        name: {type: String, default: '1.png'}
    },
    computed: {
        // ...mapState('user', ['info', 'token']),
        // ...mapGetters('message', ['messages']),
    },
    // methods: mapActions(['start']),
    mounted() {
        // console.log('mm');
    }
});
</script>