//  イミュータブルなメソッド

let list = [{ title: "Rad Red" }, { title: "Lawn" }, { title: "Party Pink" }];

const addColor = (title, array) => array.concat({ title });

console.log(addColor("Glam Green", list).length);
console.log(list.length);
