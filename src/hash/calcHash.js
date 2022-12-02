import crypto from 'crypto';
import fs from 'fs';

const calculateHash = async () => {
    // Write your code here

    fs.readFile( 'src/hash/files/fileToCalculateHashFor.txt' , 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(crypto.createHash('sha256').update(data).digest('hex'));
    });
};

await calculateHash();