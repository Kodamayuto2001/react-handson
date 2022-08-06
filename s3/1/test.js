const log = message => {
    console.log(message);
}

log("In JavaScript, functions are variables");

const obj = {
    message: "They can be added to objects like variables",
    log(message) {
        console.log(message);
    }
};

obj.log(obj.message);

const messages = [
    "They can be inserted into arrays",
    message => console.log(message),
    "like variables",
    message => console.log(message)
];

messages[1](messages[0]);
messages[3](messages[2]);

const insideFn = logger => {
    logger("They can be sent to other functions as arguments");
};

insideFn(message => console.log(message));