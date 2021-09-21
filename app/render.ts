import fs from 'fs';
import fsx from 'fs-extra';
import path from 'path';
import rimraf from 'rimraf';

const rootDir = path.resolve(__dirname, '../');
const dataDir = path.resolve(rootDir, './data');
const distDir = path.resolve(rootDir, './dist/client/');
const htmlDir = path.resolve(rootDir, './dist/html/');

// cleanup /dist/html/
rimraf.sync(htmlDir);
fs.mkdirSync(htmlDir);

/* ==================================== */
function writeToFile(html:string) {
    const file = path.join(htmlDir, 'index.html');

    // remove bundle.js
    html = html.replaceAll(/<link href="\/js\/[^>]*>/gi, '');
    html = html.replaceAll(/<script src="\/js\/[^>]*>/gi, '');

    fs.writeFileSync(file, html, <fs.WriteFileOptions>{
        encoding: 'utf8',
        mode: 0o777,
        flag: 'w',
    });
    // console.log(`html: ${html.substr(0, 48)}...`);
    console.log(`html> ${file}`);
}

/* ==================================== */
import context from './context'
import renderer from './core/renderer';
import { SSR } from './typings';
const ctx: SSR.Context = context(<SSR.Config>{
  port: process.env.PORT || 8080,
  root: __dirname,
  https: process.env.HTTPS === 'true',
  reload: process.env.RELOAD === 'true',
  template: 'index.html',
  manifest: 'ssr-manifest.json',
  entry: {
    dist: '../dist',
    client: 'client',
    server: 'server',
  }
});
renderer(ctx).fetchHTML()
.then((html:string) => writeToFile(html))
.catch((err:any) => console.error('FAIL:', err))
.finally(() => console.log('html: success'));

/* ===================================== copy assets === */
// if (!fs.existsSync(htmlDir)) ;
fsx.copySync(path.join(rootDir, './src/assets'), path.join(htmlDir, './assets'));

fsx.copySync(path.join(dataDir, './photo'), path.join(htmlDir, './data/photo'));
fsx.copySync(path.join(dataDir, './article'), path.join(htmlDir, './data/article'));

const distCss = path.join(distDir, './css');
if (fs.existsSync(distCss)) fsx.copySync(distCss, path.join(htmlDir, './css'));
rimraf.sync(path.join(htmlDir, './assets/css'));

const distFnt = path.join(distDir, './fonts');
if (fs.existsSync(distFnt)) fsx.copySync(distFnt, path.join(htmlDir, './fonts'));
rimraf.sync(path.join(htmlDir, './assets/fonts'));

const distImg = path.join(distDir, './img');
if (fs.existsSync(distImg)) fsx.copySync(distImg, path.join(htmlDir, './img'));

console.log('copy: success');