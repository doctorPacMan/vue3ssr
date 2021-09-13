<template>
    <div class="app">
        <img src="/static/logo.png" />
        <h1>APP</h1>
        <!-- PageMetaTeleport / -->
        <router-view />
    </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
export default class App extends Vue {}
</script>
<style lang="less" src='@/assets/css/css.less'/>