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

import fs from 'fs';
import path from 'path';
function writeToFile(html:string) {
    const dir = path.resolve(__dirname, '../dist/html/');
    if (!fs.existsSync(dir)) fs.mkdirSync(dir);
    const file = path.join(dir, 'index.html');

    fs.writeFileSync(file, html, <fs.WriteFileOptions>{
        encoding: 'utf8',
        mode: 0o666,
        flag: 'w',
    });

    console.log(`html: ${html.substr(0, 48)}...`);
    console.log(`file: ${file}`);
}

renderer(ctx).fetchHTML()
.then((html:string) => writeToFile(html))
.catch((err:any) => console.error('FAIL:', err))
.finally(() => console.log('done: success'));
