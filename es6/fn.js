const sirwan = {
	name: "Sirwan Afifi",
	canRead: false,
	canWrite: false
};

const selfEducate = person => ({
	...sirwan,
	canRead: true,
	canWrite: true
});

console.log(selfEducate(sirwan));
console.log(sirwan);

// {name: "Sirwan Afifi", canRead: true, canWrite: true}
// {name: "Sirwan Afifi", canRead: false, canWrite: false}