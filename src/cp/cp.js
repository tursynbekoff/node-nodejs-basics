import fs from 'fs';

const spawnChildProcess = async (args) => {
    // Write your code here
    if (fs.existsSync('src/cp/files/fresh.txt')) {
        throw 'FS operation failed'
    } 

    fs.writeFileSync('src/cp/files/fresh.txt','I am fresh and young', (err) => {
        if(err) throw err;
    });

};

spawnChildProcess();