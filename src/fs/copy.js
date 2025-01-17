import fs from 'fs';

const copy = async () => {

    fs.exists('src/fs/files_copy', (exist) => {
        if (exist) {
            throw 'FS operation failed';
        } 
    })
    

    fs.mkdir('src/fs/files_copy', (err) => {
        if (err) {
            return console.error(err);
        }
    });

    fs.readdir('src/fs/files', (err, files) => {
        if (err) {
            throw err
        }
        
        files.forEach(file => {
            fs.copyFile(`src/fs/files/${file}`, `src/fs/files_copy/${file}`, (err) => {
                if (err) {
                    console.log("Error Found:", err);
                }
            })
        })
    })

};

copy();