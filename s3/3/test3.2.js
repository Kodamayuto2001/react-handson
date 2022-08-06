//  純粋関数ではない関数

const frederick = {
    name: "Frederick Douglass",
    canRead: false,
    canWrite: false
};

const selfEducate = person => {
    person.canRead = true;
    person.canWrite = true;
    return person;
}

console.log(selfEducate(frederick));
console.log(frederick);