<style lang="less">
.ProductTile {
    min-width: 158px;
    outline: 0px solid cyan;
    outline-offset: -1px;
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    justify-content: center;
    &__photo {
        width: 100%;
        height: 231px;
        border-radius: 6px;
        background: lightpink;
        overflow: hidden;
        .ProductPhoto {
            display: block;
            width: 100%;
            height: 100%;
        }
    }
    &__label {
        margin: .75rem 1rem 0;
        font-size: 1.125rem;
        font-size: .875rem;
        line-height: 1.43;
    }
    &__baton {
        padding-top: 1rem;
        margin: auto 1rem 0;
        .button {
            text-transform: uppercase;
            font-weight: 600;
            width: 7.5rem;
        }
    }
}
</style>

<template>
<div class="ProductTile">
    <div class="ProductTile__photo">
        <Photo :name='`${group}/${item.photo || "1.png"}`'/>
    </div>
    <div class="ProductTile__label">
        <span v-text='item.name'/>
    </div>
    <div class="ProductTile__baton">
        <a :href='item.href' class="button">Заказать</a>
    </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Photo from './photo.vue';

export default defineComponent({
  components: { Photo },
  props: {
    item: {required: true},
    group: {required: true}
  },
  setup(props) {
    if (!props) console.log(props);
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