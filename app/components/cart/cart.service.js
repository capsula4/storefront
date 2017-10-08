import forIn from 'lodash';
import values from 'lodash';

export default class Cart {
    constructor() {
        this.items = {};
    }

    addItem(product, quantity) {
        if (!this.items.hasOwnProperty(product.title)) {
            this.items[product.title] = product;
        }

        this.items[product.title].quantity += quantity;
    }

    getItems() {
        return values(this.items);
    }

    getTotal() {
        let total = 0;

        forIn(this.items, item => {
            total += item.quantity * item.price;
        });

        return total;
    }
}
