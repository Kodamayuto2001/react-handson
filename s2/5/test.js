import XMLHttpRequest from 'xhr2';

const getFakeMembers = count => 
    new Promise((resolves, rejects) => {
        const api = `https://api.randomuser.me/?nat=US&results=${count}`;
        const request = new XMLHttpRequest();
        request.open("GET", api);
        request.onload = () =>
            request.status === 200
            ? resolves(JSON.parse(request.response).results)
            : rejects(Error(request.statusText));
        request.onerror = err => rejects(err);
        request.send();
    });

//  then/catchメソッドによるエラー処理
getFakeMembers(5)
    .then(members => console.log(members))
    .catch(error => console.error(`getFakeMembers failed: ${error.message}`));

//  try/catchによるエラー処理
async function testGetFakeMembers() {
    try {
        const members = await getFakeMembers(5);
        console.log(members);
    } catch (error) {
        console.error(`getFakeMembers failed: ${error.message}`);
    }
}

testGetFakeMembers();