const groups:{
    url: string;
    href: string;
    title: string;
    lines?: number;
    items: {
        name: string;
        photo: string;
        href?: string;
    }[];
}[] = [
    {
        lines: 1,
        url: 'popular',
        title: 'САМЫЕ ПОПУЛЯРНЫЕ ТОВАРЫ',
        href: 'https://apteka.ru/category/proficosmetics/',
        items: [
            {
                name: 'OLLIN Professional Perfect Hair несмываемый крем-спрей 15 в 1, 250 мл',
                photo: '1.png',
                href: 'https://apteka.ru/category/proficosmetics/',
            },
            {
                name: 'OLLIN Professional Bionika Флюид реконструктор для волос, 100 мл',
                photo: '2.png',
                href: 'https://apteka.ru/category/proficosmetics/',
            },
            {
                name: 'CONSTANT DELIGHT ЭЛИКСИР ДЛЯ ВОЛОС 12В1 200МЛ',
                photo: '3.png',
                href: 'https://apteka.ru/category/proficosmetics/',
            },
            {
                name: 'ARAVIA PROFESSIONAL КРЕМ ДЛЯ ЛИЦА СУПЕРУВЛАЖНЕНИЕ И РЕГЕНЕРАЦИЯ С МОЧЕВИНОЙ (10%) И МУЦИНОМ УЛИТКИ 150МЛ',
                photo: '2.png',
                href: 'https://apteka.ru/category/proficosmetics/',
            },
        ],
    },
    {
        url: 'discuss',
        title: 'САМЫЕ ОБСУЖДАЕМЫЕ ТОВАРЫ',
        href: 'https://apteka.ru/category/proficosmetics/',
        items: [
            {
                name: 'ARAVIA PROFESSIONAL КРЕМ ДЛЯ ЛИЦА ИНТЕНСИВНО УВЛАЖНЯЮЩИЙ С МОЧЕВИНОЙ (10%) 100МЛ',
                photo: '1.png',
                href: 'https://apteka.ru/category/proficosmetics/',
            },
            {
                name: 'OLLIN PERFECT HAIR FRESH MIX ФРУКТОВАЯ СЫВОРОТКА ДЛЯ ВОЛОС 120МЛ',
                photo: '2.png',
                href: 'https://apteka.ru/category/proficosmetics/',
            },
            {
                name: 'LOREAL PROFESSIONNEL SERIE EXPERT INFORCER МАСКА УКРЕПЛЯЮЩАЯ ДЛЯ ВОЛОС 250МЛ',
                photo: '3.png',
                href: 'https://apteka.ru/category/proficosmetics/',
            },
            {
                name: 'ADD-PLEX ПОЛИМЕРНЫЙ ВОССТАНОВИТЕЛЬ REBUILDER 7МЛ+БУСТЕР BOOSTER ДЛЯ ВОЛОС 15МЛ',
                photo: '4.png',
                href: 'https://apteka.ru/category/proficosmetics/',
            },
        ],
    },
    {
        lines: 2,
        url: 'profcosm',
        title: 'ПРОФЕССИОНАЛЬНАЯ КОСМЕТИКА',
        href: 'https://apteka.ru/category/proficosmetics/profiface/',
        items: [
            {
                name: 'BIOMIALVEL СЫВОРОТКА УВЛАЖНЯЮЩАЯ НА ОСНОВЕ ГИАЛУРОНОВОЙ КИСЛОТЫ ДЛЯ УХОДА ЗА КОЖЕЙ ЛИЦА И ШЕИ 7МЛ N10',
                photo: '1.jpg',
                href: 'https://apteka.ru/category/proficosmetics/',
            },
            {
                name: 'ESTEL PROFESSIONAL ENIGMA КРАСКА ДЛЯ БРОВЕЙ И РЕСНИЦ В НАБОРЕ ТОН ЧЕРНЫЙ 20МЛ',
                photo: '2.jpg',
                href: 'https://apteka.ru/category/proficosmetics/',
            },
            {
                name: 'AMPLEN GOLD SHOT 24K ОМОЛАЖИВАЮЩАЯ АМПУЛА С ЗОЛОТОМ 24К 100МЛ',
                photo: '3.jpg',
                href: 'https://apteka.ru/category/proficosmetics/',
            },
            {
                name: 'BIOMIALVEL МАСКА ВОССТАНАВЛИВАЮЩАЯ НА ОСНОВЕ ЭССЕНЦИИ ГИАЛУРОНОВОЙ КИСЛОТЫ С ТЕХНОЛОГИЕЙ 3D-МОДЕЛИРОВАНИЯ ДЛЯ ЛИЦА И ШЕИ N5',
                photo: '4.jfif',
                href: 'https://apteka.ru/category/proficosmetics/',
            },
            {
                name: 'AMPLEN PEPTIDE SHOT АМПУЛА ОМОЛАЖИВАЮЩАЯ С ДВОЙНОЙ КОНЦЕТРАЦИЕЙ ПЕПТИДОВ 100МЛ',
                photo: '5.jpg',
                href: 'https://apteka.ru/category/proficosmetics/',
            },
            {
                name: 'ESTEL PROFESSIONAL ENIGMA КРАСКА ДЛЯ БРОВЕЙ И РЕСНИЦ В НАБОРЕ ТОН КЛАССИЧЕСКИЙ КОРИЧНЕВЫЙ 20МЛ',
                photo: '6.png',
                href: 'https://apteka.ru/category/proficosmetics/',
            },
            {
                name: 'BIOMIALVEL КОНЦЕНТРАТ ЭССЕНЦИИ ГИАЛУРОНОВОЙ КИСЛОТЫ Д/ЕЖЕД УХОДА ЗА КОЖЕЙ ЛИЦА И ШЕИ 1МЛ N5',
                photo: '7.jpg',
                href: 'https://apteka.ru/category/proficosmetics/',
            },
            {
                name: 'AMPLEN CENTEL CALMING SHOT AMPOULE SOS-АМПУЛА СО СТВОЛОВЫМИ КЛЕТКАМИ ЦЕНТЕЛЛЫ 30МЛ',
                photo: '8.jpg',
                href: 'https://apteka.ru/category/proficosmetics/',
            },
        ],
    },
];
export {groups};