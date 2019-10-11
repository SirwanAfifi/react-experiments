var data = require("../../restData")();

const mapIdsToProducts = (supplier, nameFilter) =>
	supplier.products.map(id => data.products.find(p => p.id === Number(id)))
		.filter(p => p.name.toLowerCase().includes(nameFilter.toLowerCase()));


let nextId = 100;
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
	},

	storeProduct({ product }) {
		if (product.id == null) {
			product.id = nextId++;
			data.products.push(product);
		} else {
			product = { ...product, id: Number(product.id) };
			data.products = data.products
				.map(p => p.id === product.id ? product : p);
		}
		return product;
	},
	storeSupplier(args) {
		const supp = { ...args, id: Number(args.id) };
		if (args.id == null) {
			supp.id = nextId++;
			data.suppliers.push(supp)
		} else {
			data.suppliers = data.suppliers.map(s => s.id === supp.id ? supp : s);
		}
		let result = data.suppliers.find(s => s.id === supp.id);
		if (result) {
			return {
				...result,
				products: ({ nameFilter }) => mapIdsToProducts(result, nameFilter)
			}
		}
	}
}
