for(const key in statistics){
    if(key.startsWith('r') || statistics[key] % 2 == 1){
        console.log(`${statistics[key]}`);
    }
}