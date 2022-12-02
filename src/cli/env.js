const parseEnv = () => {

    let no_env = 0;

    const env = process.env;

    for (let key in env) {
        if (key.includes('RSS_')) {
            console.log(key + "=" + env[key]);
        }   
        no_env++;
    }

};

parseEnv();