import sharp from 'sharp';
import glob from 'glob';
import path from 'path';

const rootDir = path.resolve(__dirname, '../');
const dataDir = path.resolve(rootDir, 'dist/html/data');

const imageExt = /\.(png|gif|jpe?g|jfif)$/;
let images:string[] = [];
images = images.concat(glob.sync(`${dataDir}/+(photo|article)/**/*`));
images = images.filter(filePath => imageExt.test(filePath));
// console.log(images); throw 'done';

const trace = false;
const promises:Promise<any>[] = images.map(filePath => {
    const webpPath = filePath.replace(imageExt, '.webp');
    return sharp(filePath).webp().toFile(webpPath)
        .then((info) => !trace ? 1 : console.log(`${webpPath} (${Math.round(info.size/1024)}kb)`))
        .catch((err) => !trace ? 0 : console.log(`ERROR sharp: ${filePath}`, err));
});
Promise.all(promises).then(() => console.log('webp: success'));
/**/