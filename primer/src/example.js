import { asyncAdd } from "./async";

let values = [10, 20, 30, 40, 50];

addValue(values)

async function addValue(values) {
	const total = await asyncAdd(values);
	console.log(`Main Total: ${total}`)
}