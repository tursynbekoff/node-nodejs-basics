import { Worker } from 'worker_threads';

const performCalculations = async () => {
    // Write your code here

    const worker = new Worker('./src/wt/worker.js');

    worker.on('message', result => {
        console.log(`status - resolved, data - ${result.fib}`);
    })

    worker.on('error', error => {
        console.log('error', error);
    })
    worker.postMessage({num: 10});
    worker.postMessage({num: 11});
    worker.postMessage({num: 12});
    worker.postMessage({num: 13});

};

await performCalculations();