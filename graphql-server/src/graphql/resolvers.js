var data = require("../../restData")();
module.exports = {
	products: () => data.products,
	product: (args) => data.products.find(p => p.id === parseInt(args.id)),
	suppliers: () => data.suppliers.map(s => ({
		...s, products: () => s.products.map(id =>
			data.products.find(p => p.id === Number(id)))
	})),
	supplier: (args) => {
		const result = data.suppliers.find(s => s.id === parseInt(args.id));
		if (result) {
			return {
				...result,
				products: () => result.products.map(id =>
					data.products.find(p => p.id === Number(id)))
			}
		}
	}
}
