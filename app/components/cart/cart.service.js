import forIn from 'lodash/forIn';

/**
 * Cart class works as a singleton service. It keeps in memory
 * all the information about the active cart.
 *
 * @type {Object}
 */
export default class Cart {
    constructor() {
        this.items = {};
    }

    /**
     * Adds a product with the specified quantity.
     *
     * @param {Object} product The product from the json payload.
     * @param {Number} quantity
     */
    addItem(product, quantity) {
        if (!this.items.hasOwnProperty(product.title)) {
            this.items[product.title] = product;
            this.items[product.title].quantity = 0;
        }

        this.items[product.title].quantity += quantity;

        if (this.items[product.title].quantity < 1) {
            this.removeItem(product);
        }
    }

    /**
     * Returns all the cart items.
     *
     * @return {Object} An object with all items, indexed by title.
     */
    getItems() {
        return this.items;
    }

    /**
     * Removes an entire item (product) from the cart.
     *
     * @param  {Object} product
     */
    removeItem(product) {
        delete this.items[product.title];
    }

    /**
     * Returns a specific item from the cart, given the product.
     *
     * @param  {Object} product
     * @return {Object} cart item
     */
    getItem(product) {
        if (!product || !product.title) {
            return null;
        }

        if (!this.items.hasOwnProperty(product.title)) {
            return null;
        }

        return this.items[product.title];
    }

    /**
     * Returns the total quantity of items in the cart.
     *
     * @return {Number}
     */
    getTotalQuantity() {
        let total = 0;

        forIn(this.items, item => {
            total += item.quantity;
        });

        return total;
    }

    /**
     * Returns the total price of all the items in the cart.
     *
     * @return {Number}
     */
    getTotalPrice() {
        let total = 0;

        forIn(this.items, item => {
            total += item.quantity * item.price;
        });

        return total;
    }
}
