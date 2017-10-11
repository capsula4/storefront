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
        const index = this._getIndex(product);

        if (!index) {
            return;
        }

        if (!this._hasProduct(product)) {
            this.items[index] = product;
            this.items[index].quantity = 0;
        }

        this.items[index].quantity += quantity;

        if (this.items[index].quantity < 1) {
            this.removeItem(product);
        }
    }

    /**
     * Checks whether the given product is in the cart.
     *
     * @param  {Object} product
     * @return {Boolean}
     */
    _hasProduct(product) {
        const index = this._getIndex(product);

        if (index && this.items.hasOwnProperty(index)) {
            return true;
        }

        return false;
    }

    /**
     * Gets the index provided a product.
     *
     * @param  {Object} product
     * @return {String}
     */
    _getIndex(product) {
        const index = product ? product.title : '';

        return index;
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
        const index = this._getIndex(product);

        if (index) {
            delete this.items[index];
        }
    }

    /**
     * Returns a specific item from the cart, given the product.
     *
     * @param  {Object} product
     * @return {Object} cart item
     */
    getItem(product) {
        if (!this._hasProduct(product)) {
            return null;
        }

        const index = this._getIndex(product);

        return this.items[index];
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
