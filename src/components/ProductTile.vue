<style lang="less">
.ProductTile {
}
</style>

<template>
<div class="ProductTile">
    <Photo/>
    <Photo :name='"2.png"'/>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Photo from './photo.vue';

export default defineComponent({
  components: { Photo },
  props: {
    user: {type: String, required: false}
  },
  setup(props) {
    console.log(props) // { user: '' }

    return {} // anything returned here will be available for the rest of the component
  }
  // the "rest" of the component
});
/*
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component<ProductTile>({
    components: {},
    data() {
        return {
            breadcrumbTitle: '',
            modalOrderStatus: null,
        };
    },
})
export default class ProductTile extends Vue {
    @Prop() x:any;
}
*/
</script>