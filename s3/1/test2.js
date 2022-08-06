const createScream = function (logger) {
    return function (message) {
        logger(message.toUpperCase() + "!!!");
    };
};

const scream = createScream(message => console.log(message));

scream("functions can be returned from other functions");
scream("createScream returns a function");
scream("scream invokes that returned function");