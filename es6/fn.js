// var log = function (message) {
//     console.log(message);
// }

// var log = message => console.log(message);

// const obj = {
//     message: "They can be added to objects like variables",
//     log(message) {
//         console.log(message)
//     }
// };

// obj.log(obj.message)

// const messages = [
//     "They can be inserted into arrays",
//     message => console.log(message),
//     "like variables",
//     message => console.log(message)
// ];

// messages[1](messages[0]) // They can be inserted into arrays messages[3](messages[2]) // like variables

// const createScream = logger => message => logger(message.toUpperCase() + "!!!");

// var string = "This is the midday show with Cheryl Waters";
// var urlFriendly = "";

// for (var i = 0; i < string.length; i++) {
// 	if (string[i] === " ") {
// 		urlFriendly += "-";
// 	} else {
// 		urlFriendly += string[i];
// 	}
// }

// console.log(string);
// console.log(urlFriendly);

// const string = "This is the mid day show with Cheryl Waters";
// const urlFriendly = string.replace(/ /g, "-");
// console.log(urlFriendly);

const loadAndMapMembers = compose(
	combineWith(sessionStorage, "members"),
	save(sessionStorage, "members"),
	scopeMembers(window),
	logMemberInfoToConsole,
	logFieldsToConsole("name.first"),
	countMembersBy("location.state"),
	prepStatesForMapping,
	save(sessionStorage, "map"),
	renderUSMap
);
getFakeMembers(100).then(loadAndMapMembers);
