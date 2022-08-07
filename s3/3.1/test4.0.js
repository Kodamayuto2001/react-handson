const compose = (...fns) => arg =>
    fns.reduce((composed, f) => f(composed), arg);

const both = compose(
    civilianHours,
    appendAMPM
);

both(new Date());