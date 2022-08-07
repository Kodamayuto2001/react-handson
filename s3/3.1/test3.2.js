const dan = {
    type: "person",
    data: {
        gender: "male",
        info: {
            id: 22,
            fullname: {
                first: "Dan",
                last: "Deacon"
            }
        }
    }
};

const deepPick = (fields, object = {}) => {
    const [first, ...remaininig] = fields.split(".");
    return remaininig.length
        ? deepPick(remaininig.join("."), object[first])
        : object[first];
};

console.log(deepPick("type", dan));
console.log(deepPick("data.info.fullname.first", dan));
