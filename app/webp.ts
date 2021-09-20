import sharp, { Sharp, SharpOptions, ResizeOptions } from 'sharp';
import glob from 'glob';
import path from 'path';

const rootDir = path.resolve(__dirname, '../');
const distDir = path.resolve(rootDir, 'dist/html/data');
const dataDir = path.resolve(rootDir, 'data');

const imageExt = /\.(png|gif|jpe?g|jfif)$/;
let images:string[] = [];
images = images.concat(glob.sync(`${distDir}/+(photo|article)/**/*`));
images = images.concat(glob.sync(`${dataDir}/+(photo|article)/**/*`));
images = images.filter(filePath => imageExt.test(filePath));
// console.log(images); throw 'done';

const trace = 1;
const promises:Promise<any>[] = images.map(async (filePath:string) => {
    const webpPath = filePath.replace(imageExt, '.webp');

    const options:SharpOptions = {animated: false};
    const sharpey:Sharp = sharp(filePath, options);
    const metadata = await sharpey.metadata();
    const width = metadata.width || 0;

    const resize:ResizeOptions = {};
    const type:'photo'|'image' = filePath.indexOf('/photo/') >= 0 ? 'photo' : 'image';

    if (type === 'photo' && width > 400) resize.width = 400;
    if (type === 'image' && width > 760) resize.width = 760;
    return sharpey
        .webp({quality: 80})
        .resize(resize)
        .toFile(webpPath)
        .then((info) => !trace ? 1 : console.log(`${webpPath} (${Math.round(info.size/1024)}kb)`))
        .catch((err) => !trace ? 0 : console.log(`ERROR sharp: ${filePath}`, err));
});
Promise.all(promises).then(() => console.log('webp: success'));
/**/