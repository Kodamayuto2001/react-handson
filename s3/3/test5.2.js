const schools = [
    { name: "Yorktown" },
    { name: "Stratford" },
    { name: "Washington & Liberty" },
    { name: "Wakefield" }
];

const editName = (oldName, name, arr) => 
    arr.map(item => {
        if (item.name === oldName) {
            return {
                ...item,
                name
            };
        } else {
            return item;
        }
    });

const updatedSchools = editName("Stratford", "HB Woodlawn", schools);

console.log(updatedSchools[1]);
console.log(schools[1]);

