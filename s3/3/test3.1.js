//  純粋関数ではない関数

const frederick = {
    name: "Frederick Douglass",
    canRead: false,
    canWrite: false
};

function selfEducate() {
    frederick.canRead = true;
    frederick.canWrite = true;
    return frederick;
}

selfEducate();
console.log(frederick);