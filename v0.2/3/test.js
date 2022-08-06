import fetch from "node-fetch"

const getFakePerson = async () => {
    const res = await fetch("https://api.randomuser.me/?nat=US?results=1");
    const { results } = await res.json();
    console.log(results);
}

getFakePerson();