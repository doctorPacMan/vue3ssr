const fs = require('fs');
const express = require('express');

const {createBundleRenderer} = require('vue-server-renderer');
const dirStatic = './static';
const dirBundle = './dist';

const template = fs.readFileSync(`${dirStatic}/index.template.html`, 'utf-8');
const serverBundle = require(`${dirBundle}/vue-ssr-server-bundle.json`);
const clientManifest = require(`${dirBundle}/vue-ssr-client-manifest.json`);
const renderer = createBundleRenderer(serverBundle, {
    runInNewContext: false,
    template,
    clientManifest
});

const server = express();
server.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', req.get('Origin') || '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
    return req.method === 'OPTIONS' ? res.send(200) : next();
});

server.use('/dist', express.static(dirBundle));
server.use('/site', express.static(dirBundle));
server.use('/static', express.static(dirStatic));
server.use('/static/favicon.ico?v=3', express.static(`${dirStatic}/favicon.ico`));
server.use('/site/svg', express.static(`${dirBundle}/svg`));
server.use('/robots.txt', express.static(`${dirStatic}/robots.txt`));
server.use('/favicon.ico', express.static(`${dirStatic}/favicon.ico`));
server.get('/pipeline-id', ((req, res) => res.end('100500')));
server.use('/storybook', express.static(dirStorybook));

server.get('*', async (req, res) => {
    if (/\.(png|jpg|gif|svg|woff|woff2|ttf|eot|js.map)$/.test(req.url)) {
        res.set('Content-Type', 'text/plain; charset=utf-8');
        res.end(`нет такого файла: ${req.url}`);
    } else {
// =================================================================
        const startRendering = new Date().getTime();

        const userAgent = req.headers['user-agent'] || null;
        const provinceUrl = req.params?.[0] ? req.params[0].replaceAll("/","") : null;
        const province = provinceUrl ? await getCityByUrl(provinceUrl, userAgent) : null;

        const context = {
            userAgent,
            province: province?.city || null,
            url: req.url,
            host: req.headers.host,
            token: getCookieJs('authToken', req.headers.cookie),
            session: getCookieJs('sessionId', req.headers.cookie),
            selectedTown: getCookieJs('selectedTown', req.headers.cookie),
            selectedStore: getCookieJs('selectedStore', req.headers.cookie),
            metaTitle: 'Сервис заказа лекарств в аптеку – купить лекарства недорого, описания сертифицированных лекарств и инструкции к препаратам на Apteka.ru',
            metaDescription: 'В интернет-аптеке на Apteka.ru можно заказать любые лекарства недорого по выгодным ценам. Удобный каталог лекарств, инструкций и советы врачей!',
            metaKeywords: '',
            metaImageUrl: 'https://storage.yandexcloud.net/image/a_meta-logo.png',
            metaRobots: '',
            metaCanonical: '',
            robot: false,
        };
        renderer.renderToString(context, (err, html) => {
            const stopRendering = (Date.now() - startRendering) / 1e3;
            console.log(`SSR(${stopRendering}s) ${context.url}`);
            if (err) {
                console.log(`[rendering error] ${err}`);
                res.end('500');
            } else {
                const status = /^\/404/.test(req.url) ? 404 : 200;
                res.status(status).end(html);
            }
        });
// =================================================================
    }
});

server.use(function (err, req, res, next) {// Обработка ошибок запроса
    res.redirect(`/404/?code=${err.statusCode}`);
    return next();
});

const port = process.env.PORT || 8080;
const host = process.env.HOST || 'localhost';

server.listen(port, host, function () {
    console.log(`Server listening ${dirBundle} on ${host}:${port}`);
});
