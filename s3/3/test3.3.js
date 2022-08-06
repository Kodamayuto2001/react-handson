const frederick = {
    name: "Frederick Douglass",
    canRead: false,
    canWrite: false
};

const selefEducate = person => ({
    ...person,
    canRead: true,
    canWrite: true
});

console.log(selefEducate(frederick));
console.log(frederick);