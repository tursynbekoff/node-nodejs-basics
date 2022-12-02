import fs from 'fs';

const read = async () => {
    // Write your code here
    fs.createReadStream('src/streams/files/fileToRead.txt', 'utf-8')
        .pipe(process.stdout);

};

await read();