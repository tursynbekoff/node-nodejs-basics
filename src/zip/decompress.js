import fs from 'fs';
import zlib from 'zlib';

const decompress = async () => {
    // Write your code here
    const read = fs.createReadStream('src/zip/files/archive.gz');
    const unzip = zlib.createUnzip();
    const out = fs.createWriteStream('src/zip/files/fileToUnCompress.txt');
    read.pipe(unzip).pipe(out);
};

await decompress();