<style lang="less">
@import '@/assets/css/env.less';
.SiteFooter {
    background: @darkblue;
    color: white;
    padding: 2.5rem 1rem 2rem;
    & > div {
        max-width: 1500px;
        margin: 0 auto;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: flex-end;
    }

    &__links {
        & > section {
            & + section {
                margin-top: 3.5rem;
            }
            & > h6 {
                margin: 0 0 1.5rem;
                color: inherit;
                font-size: @font-size-4;
            }
            & > ul {
                padding: 0;
                margin: 0;
                list-style: none;
                & > li + li {
                    margin-top: .75em;
                }
                a {
                    display: block;
                    color: inherit;
                    text-decoration: none;
                    font-size: 1rem;
                    line-height: 1.25;
                    padding: .125rem 0 .25rem;
                    -x-background: black;
                }
            }
        }
    }

    &__phone {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;
        margin: 3.5rem 0 0;
        span {
            margin: .5rem .5rem 0 0;
            font-weight: 300;
        }
        a, a:link {
            color: white;
            text-decoration: none;
            font-weight: 600;
            font-size: @font-size-4;
        }
    }
    &__signa {
        padding: .5rem 0 0;
        margin: 1.5rem 0 0;
        text-align: center;
    }
    @media (min-width: @screen-mobile) {
        padding: 4rem 1.25rem 3.5rem;
    }
    @media (min-width: @screen-tablet) {
        & > div {
            flex-flow: row wrap;
            align-items: center;
            justify-content: space-between;
        }
        &__links {
            flex: 1 1 100%;
            display: flex;
            flex-flow: row wrap;
            align-items: flex-start;
            justify-content: space-between;
            & > section + section {margin-top: 0}
        }
        &__phone {
            margin-top: 1.5rem;
        }
    }

}
</style>

<template>
<div class="SiteFooter">
    <div>

        <div class="SiteFooter__links">
            <section v-for='(sec, k) in sections' :key='k'>
                <h6 v-text='sec.title'/>
                <ul>
                    <li v-for='(link, n) in sec.links' :key='n'>
                        <a :href='link.href' v-text='link.text' />
                    </li>
                </ul>
            </section>
        </div>

        <div class="SiteFooter__phone">
            <span>Горячая линия</span>
            <a href="tel:88007008888">8 800 700 88 88</a>
        </div>

        <div class="SiteFooter__signa">
            <b>КОСМЕТИЧКА.РФ</b>
        </div>

    </div>
</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'SiteFooter',
    setup() {

        const sections = [
            {
                title: 'Помощь',
                links: [
                    {
                        text: 'Часто задаваемые вопросы',
                        href: 'https://apteka.ru/faq/',
                    }, {
                        text: 'Как сделать заказ',
                        href: 'https://apteka.ru/order/',
                    }, {
                        text: 'Правила доставки',
                        href: 'https://apteka.ru/delivery/',
                    }, {
                        text: 'Обратная связь',
                        href: 'https://apteka.ru/feedback-form/',
                    },
               ],
            }, {
                title: 'Акции и распродажи',
                links: [
                    {
                        text: 'Акции и предложения',
                        href: 'https://apteka.ru/promotions/',
                    }, {
                        text: 'Программы лояльности',
                        href: 'https://apteka.ru/services/loyalty/',
                    },
                ],
            }, {
                title: 'Юридическая информация',
                links: [
                    {
                        text: 'Политика по обработке персональных данных',
                        href: 'https://apteka.ru/about/privacy/',
                    }, {
                        text: 'Пользовательское соглашение',
                        href: 'https://apteka.ru/about/term-of-use/',
                    },
                ],
            },
        ];

        return {
            sections,
        };
    },
});
</script>