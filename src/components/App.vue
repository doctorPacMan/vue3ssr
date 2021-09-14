<template>
<div class="app-body">
    <h2><img src="/static/logo.png" width="36" height="36"/> APP</h2>
    <!-- PageMetaTeleport / -->
    <router-view />
</div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
export default class App extends Vue {}
</script>
<style lang="less" src='@/assets/css/css.less'/>