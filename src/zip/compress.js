import fs from 'fs';
import zlib from 'zlib';

const compress = async () => {
    // Write your code here 
    const gzip = zlib.createGzip();
    const read = fs.createReadStream('src/zip/files/fileToCompress.txt');
    const write = fs.createWriteStream('src/zip/files/archive.gz');
    read.pipe(gzip).pipe(write);
};

await compress();