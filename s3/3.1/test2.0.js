import XMLHttpRequest from 'xhr2';

const userLogs = userName => message => console.log(`${userName} -> ${message}`);

const log = userLogs("grandpa23");

log("attempted to load 20 fake members");

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

getFakeMembers(20).then(
    members => log(`successfully loaded ${members.length} members`)
).catch(
    error => log("encountered an error loading members")
);
