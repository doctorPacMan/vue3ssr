<style lang="less">
.CookieWarn {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;

    background: rgba(255, 255, 255, .8);
    backdrop-filter: saturate(150%) blur(12px);
    box-shadow: 0 -16px 24px -24px rgba(55, 55, 55, .5);
    padding: 1.5rem;

    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    & > div + div {margin-left: 1.5rem}
    &[aria-hidden] {display: none}
    p {margin: 0}
}
</style>
<template>
<div class="CookieWarn" id="cookieWarn" aria-hidden>
    <div>
        <p>Куки необходимы для более удобного посещения сайтов. Мы&nbsp;используем куки для вашего комфорта!</p>
        <p><a target="_blank" href="https://apteka.ru/personal-protection/">Узнайте больше про использование cookie</a></p>
    </div>
    <div>
        <button class="button" onclick="$app.allowCookies = true">Согласен</button>
    </div>
</div>
</template>