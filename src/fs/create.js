import fs from 'fs';

const create = async () => {
    // Write your code here
    fs.exists('src/fs/files/fresh.txt', (exist) => {
        if (exist) {
            throw 'FS operation failed';
        } 
    })

    fs.writeFileSync('src/fs/files/fresh.txt','I am fresh and young', (err) => {
        if(err) throw err;
    });
};

await create();