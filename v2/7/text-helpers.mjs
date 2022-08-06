export const print = message => log(message, date());

export const log = (message, timestamp) => 
    console.log(`${timestamp}: ${message}`);

const date = () => new Date();