// n should be received from main thread
import { parentPort } from 'worker_threads';

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    // This function sends result of nthFibonacci computations to main thread
    parentPort.on('message', data => {
        parentPort.postMessage({num: data.num, fib: nthFibonacci(data.num)});
    });
};
sendResult();