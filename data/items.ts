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
                photo: '3.jpg',
                href: 'https://apteka.ru/category/proficosmetics/',
            },
            {
                name: 'ARAVIA PROFESSIONAL КРЕМ ДЛЯ ЛИЦА СУПЕРУВЛАЖНЕНИЕ И РЕГЕНЕРАЦИЯ С МОЧЕВИНОЙ (10%) И МУЦИНОМ УЛИТКИ 150МЛ',
                photo: '4.jpeg',
                href: 'https://apteka.ru/category/proficosmetics/',
            },
        ],
    },
    {
        lines: 1,
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
    {
        lines: 2,
        url: 'decorcosm',
        title: 'ДЕКОРАТИВНАЯ КОСМЕТИКА ',
        href: 'https://apteka.ru/category/basic_care/makiyazh/',
        items: [
            {
                name: 'VIVIENNE SABO НАБОР /ТУШЬ ДЛЯ РЕСНИЦ CABARET PREMIERE ТОН 1 9МЛ+ТУШЬ ДЛЯ РЕСНИЦ FEMME FATALE ОБЪЕМНАЯ ТОН 01 9МЛ',
                photo: '1.jpg',
            },
            {
                name: '7 DAYS IM YUMMY ПИГМЕНТ ДЛЯ ГУБ 01 MAY ROSE 3,2',
                photo: '2.png',
            },
            {
                name: '7 DAYS IM YUMMY ПИГМЕНТ ДЛЯ ГУБ 02 MIRACLE PINK 3,2',
                photo: '3.png',
            },
            {
                name: 'VIVIENNE SABO ПОДВОДКА ДЛЯ ГЛАЗ ЖИДКАЯ CHARBON ТОН 01 6МЛ',
                photo: '4.jpg',
            },
            {
                name: 'EVA MOSAIC ТОНАЛЬНЫЙ КРЕМ ДЛЯ КОРРЕКЦИИ ЦВЕТА КОЖИ СС COLOR CORRECTION CREAM 20МЛ/ТОН 02 ЗОЛОТИСТО-БЕЖЕВЫЙ',
                photo: '5.png',
            },
            {
                name: 'EVA MOSAIC ТОНАЛЬНЫЙ КРЕМ-УХОД BB BLEMISH BALM 20МЛ/ТОН 01 СЛОНОВАЯ КОСТЬ',
                photo: '6.png',
            },
            {
                name: 'EVA MOSAIC ТУШЬ ДЛЯ РЕСНИЦ СУПЕРОБЪЕМ WOW 10МЛ/ЧЕРНАЯ',
                photo: '7.png',
            },
            {
                name: 'VIVIENNE SABO МАСЛО ДЛЯ ГУБ DESSERT A LEVRES ТОН 02 3МЛ',
                photo: '8.png',
            },
        ],
    },
    {
        lines: 2,
        url: 'head',
        title: 'УХОД ЗА ВОЛОСАМИ И КОЖЕЙ ГОЛОВЫ',
        href: 'https://apteka.ru/category/basic_care/head/',
        items: [
            {
                name: 'ESTEL CUREX BRILLIANCE ЖИДКИЙ ШЕЛК БЛЕСК-ЭФФЕКТ ДЛЯ ВСЕХ ТИПОВ ВОЛОС 100МЛ',
                photo: '1.png',
            },
            {
                name: 'KLORANE СВЕРХМЯГКИЙ ШАМПУНЬ С МОЛОЧКОМ ОВСА 400МЛ',
                photo: '2.png',
            },
            {
                name: 'ESTEL BEAUTY CUREX THERAPY МАСКА ДЛЯ ПОВРЕЖДЕННЫХ ВОЛОС VITA-ТЕРАПИЯ 500МЛ',
                photo: '3.png',
            },
            {
                name: 'AUSSIE 3 MINUTE MIRACLE РЕКОНСТРУКТОР ВОЛОС 250МЛ',
                photo: '4.png',
            },
            {
                name: 'NATURA SIBERICA ТОНИК-ГИДРОЛАТ ДЛЯ ОКРАШЕННЫХ И ПОВРЕЖДЕННЫХ ВОЛОС OIL-PLEX 125МЛ',
                photo: '5.png',
            },
            {
                name: 'NATURA SIBERICA ТОНИК-ГИДРОЛАТ ДЛЯ ТОНКИХ ВОЛОС И СЕКУЩИХСЯ КОНЧИКОВ ANTI-POLLUTION 125МЛ',
                photo: '6.png',
            },
            {
                name: 'OBLEPIKHA SIBERICA ОБЛЕПИХОВЫЙ КОМПЛЕКС МАСЕЛ ДЛЯ УХОДА ЗА ПОВРЕЖДЕННЫМИ ВОЛОСАМИ 50МЛ',
                photo: '7.jpg',
            },
            {
                name: 'NATURA SIBERICA HAIR EVOLUTION СПРЕЙ-КОНДИЦИОНЕР ДЛЯ ВОЛОС ЗАЩИТНЫЙ BE-COLOR ЯРКОСТЬ & ЗАЩИТА ЦВЕТА 120МЛ',
                photo: '8.png',
            },
        ]
    },
    {
        lines: 2,
        url: 'body',
        title: 'УХОД ЗА ТЕЛОМ',
        href: 'https://apteka.ru/category/basic_care/body/',
        items: [
            {
                name: 'BIOTEQ FRUIT NATURAL НАБОР N5 ЭНЕРГИЯ И ДЕТОКС/ГЕЛЬ ДЛЯ ДУША 180МЛ+КРЕМ ДЛЯ ТЕЛА 150МЛ',
                photo: '1.png',
            },
            {
                name: 'VEET ТЁПЛЫЙ ВОСК ДЛЯ ДЕПИЛЯЦИИ С ЭФИРНЫМИ МАСЛАМИ 250МЛ',
                photo: '2.png',
            },
            {
                name: 'PLANETA ORGANICA SKIN SUPER FOOD МОЛОЧКО ДЛЯ ТЕЛА УВЛАЖНЕНИЕ И СИЯНИЕ 250МЛ',
                photo: '3.png',
            },
            {
                name: 'DR AQUA СОЛЬ МОРСКАЯ ПРИРОДНАЯ ДЛЯ ВАНН МЯТА 700,0',
                photo: '4.png',
            },
            {
                name: 'ЛИПОБЕЙЗ ЭМУЛЬСИЯ ДЛЯ ТЕЛА 400МЛ',
                photo: '5.png',
            },
            {
                name: 'ORANGE SLIM АНТИЦЕЛЛЮЛИТНАЯ ГОРЯЧАЯ МАСКА-СКРАБ 3В1 280МЛ',
                photo: '6.png',
            },
            {
                name: 'PLANETA ORGANICA SKIN SUPER FOOD НАБОР MANGO MANIA',
                photo: '7.png',
            },
            {
                name: 'VELVET КРЕМ- ДЕПИЛЯТОР ДЛЯ ЧУВСТВИТЕЛЬНОЙ КОЖИ ДЕЛИКАТНЫХ ЗОН 100МЛ',
                photo: '8.png',
            },
        ]
    },
];
export {groups};