import fs from 'fs';

const rename = async () => {
    // Write your code here 
    
    if (fs.existsSync('src/fs/files/properFilename.md')) {
        throw 'FS operation failed';
    } else if (!fs.existsSync('src/fs/files/wrongFilename.txt')) {
        throw 'FS operation failed';
    }

    fs.rename( 'src/fs/files/wrongFilename.txt', 'src/fs/files/properFilename.md', (error) => {
        if (error) {
            
          console.log(error);
        }
    })

};

await rename();