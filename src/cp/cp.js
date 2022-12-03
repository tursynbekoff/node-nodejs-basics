// cp.js - implement function spawnChildProcess that receives array of arguments 
// args and creates child process from file script.js, passing these args to it. 
// This function should create IPC-channel between stdin and stdout of 
// master process and child process:
// child process stdin should receive input from master process stdin
// child process stdout should send data to master process stdout


import { fork } from 'child_process';

const spawnChildProcess = async (args) => {
    // Write your code here
    const cp = fork('./src/cp/files/script.js', [4, 5, 6,7])
    

};

spawnChildProcess();