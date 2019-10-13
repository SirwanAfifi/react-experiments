// var log = function (message) {
//     console.log(message);
// }

// var log = message => console.log(message);

const obj = {
    message: "They can be added to objects like variables",
    log(message) {
        console.log(message)
    }
};

obj.log(obj.message)