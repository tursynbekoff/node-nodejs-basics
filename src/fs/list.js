import fs from 'fs';

const list = async () => {
    // Write your code here

    if (!fs.existsSync('src/fs/files')) {
        throw 'FS operation failed'
    } 

    fs.readdir('src/fs/files', (err, files) => {
        if (err) {
            throw err
        }
        
        files.forEach(file => {
            console.log(file)
        })
    })
};

await list();