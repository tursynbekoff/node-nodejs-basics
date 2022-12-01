import fs from 'fs';

const remove = async () => {
    // Write your code here
    if (!fs.existsSync('src/fs/files/fileToRemove.txt')) {
        throw 'FS operation failed';
    }

    fs.unlink('src/fs/files/' + 'fileToRemove.txt', (err) => {
        if (err) {
            throw err;
        }
    });
};

await remove();