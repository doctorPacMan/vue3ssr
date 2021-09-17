<style lang="less">
.SearchForm {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-start;

    &__input {
        flex: 1 1 100%;
        border-radius: 4px;
        box-shadow:
            0 4px 4px rgba(51, 51, 51, .04),
            0 4px 16px rgba(51, 51, 51, .08);
        position: relative;
        background: white;
        height: 44px;
        input {
            width: 100%;
            position: relative;
            font: inherit;
            font-size: .875rem;
            flex: 1 1 100%;
            background: none;
            box-sizing: border-box;
            height: 100%;
            outline: 0;
            margin: 0;
            border: 1px solid transparent;
            padding: 0 .25rem .0625rem 2.5rem;
            border-radius: inherit;
            &:focus {
                border-color: rgb(100, 138, 204);
            }
        }
        .icon {
            position: absolute;
            left: 0;
            top: 50%;
            width: 1rem;
            height: 1rem;
            color: darkgray;
            padding: .25rem;
            margin: -.75rem 0 0 .625rem;
        }
    }
    &__submit {
        flex: 0 0 auto;
        margin-left: .25rem;
        & > button {width: 96px}
    }
}
</style>

<template>
<form class="SearchForm" method="get" action="https://apteka.ru/category/basic_care">
    <div class="SearchForm__input">
        <icon symbol="seek" />
        <input placeholder="Название товара или бренда"
            type="text"
            name="q"
            value=""/>
    </div>
    <div class="SearchForm__submit">
        <button type="submit" class="button-reds">Искать!</button>
    </div>
</form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({name: 'SearchForm'});
</script>