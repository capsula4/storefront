import forIn from 'lodash/forIn';

export default class Cart {
    constructor() {
        this.items = {};
    }

    addItem(product, quantity) {
        if (!this.items.hasOwnProperty(product.title)) {
            this.items[product.title] = product;
            this.items[product.title].quantity = 0;
        }

        this.items[product.title].quantity += quantity;
    }

    getItems() {
        return this.items;
    }

    removeItem(product) {
        delete this.items[product.title];
    }

    getTotalQuantity() {
        let total = 0;

        forIn(this.items, item => {
            total += item.quantity;
        });

        return total;
    }

    getTotalPrice() {
        let total = 0;

        forIn(this.items, item => {
            total += item.quantity * item.price;
        });

        return total;
    }
}
