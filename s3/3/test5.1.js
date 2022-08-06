const schools = ["Yorktown", "Washington & Liberty", "Wakefield"];

console.log(schools.join(", "));

const wSchools = schools.filter(school => school[0] === "W");

console.log(wSchools);

const cutSchool = (cut, list) => list.filter(school => school !== cut);

console.log(cutSchool("Washington & Liberty", schools).join(", "));

console.log(schools.join("\n"));

const highSchools = schools.map(school => `${school} High School`);

console.log(highSchools.join("\n"));

console.log(schools.join("\n"));

const highSchoolsJson = schools.map(school => ({ name: school }));

console.log(highSchoolsJson);