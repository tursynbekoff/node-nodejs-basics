import fs from 'fs';

const write = async () => {
    // Write your code here
    let writer = fs.createWriteStream('src/streams/files/fileToWrite.txt', {
        flags: 'w'
    });
    process.stdin.pipe(writer)
};

await write();