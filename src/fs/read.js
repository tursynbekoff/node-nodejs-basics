import fs from 'fs';

const read = async () => {

    if (!fs.existsSync('src/fs/files/fileToRead.txt')) {
        throw 'FS operation failed'
    } 

    fs.readFile( 'src/fs/files/fileToRead.txt' , 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(data);
    });
};

await read();