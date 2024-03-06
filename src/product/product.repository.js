const Product = require('./product');

class ProductRepository {

    constructor() {
        this.products = new Map([
            ["09", new Product("09", "CREDIT_CARD", "v1")],
            ["10", new Product("10", "CREDIT_CARD", "v1")],
            ["11", new Product("11", "PERSONAL_LOAN", "v2")],
        ]);
    }

    async fetchAll() {
        return [...this.products.values()]
    }

    async getById(id) {
        return this.products.get(id);
    }
}

module.exports = ProductRepository;
