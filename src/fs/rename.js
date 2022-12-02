import fs from 'fs';

const rename = async () => {
    // Write your code here

    fs.exists('src/fs/files/properFilename.md', (exist) => {
        if (exist) {
            throw 'FS operation failed';
        } 
    })

    fs.exists('src/fs/files/wrongFilename.txt', (exist) => {
        if (!exist) {
            throw 'FS operation failed';
        } 
    })

    fs.rename( 'src/fs/files/wrongFilename.txt', 'src/fs/files/properFilename.md', (error) => {
        if (error) {
            
          console.log(error);
        }
    })

};

await rename();