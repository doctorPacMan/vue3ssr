import fs from 'fs';
import fsx from 'fs-extra';
import path from 'path';

import sharp from 'sharp';
// import imagemin from 'imagemin';
// import imageminWebp from 'imagemin-webp';

const rootDir = path.resolve(__dirname, '../');
const dataDir = path.resolve(rootDir, './data');
const distDir = path.resolve(rootDir, './dist/client/');
const htmlDir = path.resolve(rootDir, './dist/html/');

/* ==================================== */
function writeToFile(html:string) {
    const file = path.join(htmlDir, 'index.html');
    fs.writeFileSync(file, html, <fs.WriteFileOptions>{
        encoding: 'utf8',
        mode: 0o666,
        flag: 'w',
    });

    console.log(`html: ${html.substr(0, 48)}...`);
    console.log(`file: ${file}`);
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
if (!fs.existsSync(htmlDir)) fs.mkdirSync(htmlDir);
fsx.copySync(path.join(rootDir, './static'), path.join(htmlDir, './static'));

fsx.copySync(path.join(dataDir, './photo'), path.join(htmlDir, './data/photo'));
fsx.copySync(path.join(dataDir, './article'), path.join(htmlDir, './data/article'));

fsx.copySync(path.join(distDir, './img'), path.join(htmlDir, './img'));
fsx.copySync(path.join(distDir, './css'), path.join(htmlDir, './css'));
fsx.copySync(path.join(distDir, './fonts'), path.join(htmlDir, './fonts'));
console.log('copy: success');

/*
/*
imagemin([`${imagesPath}/*.{jpg,png}`], {
    destination: imagesPath,
    plugins: [
      imageminWebp({
        //   quality: 90
        //   ,
        //   resize: {
        //     width: 1000,
        //     height: 0
        //   }
      }),
    ],
  }).then(() => {
    console.log("Images Converted Successfully!!!");
  });
/**/
