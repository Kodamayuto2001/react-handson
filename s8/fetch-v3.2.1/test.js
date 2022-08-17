import fetch from "node-fetch";

const test = async () => {
	const login = "Kodamayuto2001";
	const repo = "react-handson";
	const uri = `https://api.github.com/repos/${login}/${repo}/readme`;

	const json = await fetch(uri).then((res) => res.json());

	const { download_url } = json;

	const res = await fetch(download_url);

	const ab = await res.arrayBuffer();

	// console.log(await ab);

	const td = new TextDecoder("utf-16");

	console.log(await td.decode(ab))

	// // console.log(await res.text());

	// const ab = await res.arrayBuffer();

	// console.download_url("ok");
};

test();
