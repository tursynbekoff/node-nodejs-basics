import fs from 'fs';

const create = async () => {
    // Write your code here

    if (fs.existsSync('src/fs/files/fresh.txt')) {
        throw 'FS operation failed'
    } 

    fs.writeFileSync('src/fs/files/fresh.txt','I am fresh and young', (err) => {
        if(err) throw err;
    });
};

await create();