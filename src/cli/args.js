const parseArgs = () => {

    const args = process.argv;

    const startIndex = args.findIndex((e) => {
        return e.includes('--');
    })
    
    const arr = args.slice(startIndex, args.length);

    arr.forEach(function(item, index) {
        if(index % 2 === 0) {
           console.log(arr[index].replace('--', ''), 'is', arr[index + 1]);
        }
    });

};

parseArgs();