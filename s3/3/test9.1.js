const colors = ["red", "red", "green", "blue", "green"];

const uniqueColors = colors.reduce(
    (unique, color) =>
        unique.indexOf(color) !== -1 ? unique : [...unique, color],
    []
);

console.log(uniqueColors);