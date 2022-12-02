import fs from 'fs';

const remove = async () => {
    // Write your code here
    fs.exists('src/fs/files/fileToRemove.txt', (exist) => {
        if (!exist) {
            throw 'FS operation failed';
        } 
    })

    fs.unlink('src/fs/files/' + 'fileToRemove.txt', (err) => {
        if (err) {
            throw err;
        }
    });
};

await remove();