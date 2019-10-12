/*var tahoe = {
    resorts: ["Kirkwood", "Squaw", "Alpine", "Heavenly", "Northstar"],
    print: (delay = 1000) => {
        setTimeout(() => {
            console.log(this.resorts.join(", "))
        }, delay);
    }
};

tahoe.print()*/

const getFakeMembers = count => new Promise((resolve, reject) => {
    const api = `https://api.randomuser.me/?natUS&results=${count}`;
    const request = new XMLHttpRequest();
    request.open("GET", api);
    request.onload = () =>
        (request.status === 200) ?
            resolve(JSON.parse(request.response).results) :
            reject(Error(request.statusText));
    request.onerror = (err) => reject(err);
    request.send();
});


getFakeMembers(5).then(
    members => console.log(members),
    err => console.error(
        new Error("cannot load members from randomuser.me")))





