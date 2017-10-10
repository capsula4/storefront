import './cart.scss';

export default /*@ngInject*/ function(bcCartService) {
    this.quantity = this.button ? 1 : (this.product.quantity || 0);

    /**
     * Increases the quantity of this product.
     * If button is not present, apply directly to cart.
     */
    this.increase = () => {
        if (!this.button) {
            bcCartService.addItem(this.product, 1);
            return;
        }

        this.quantity += 1;
    };

    /**
     * Decreases the quantity of this product.
     * If button is not present, apply directly to cart.
     */
    this.decrease = () => {
        if (!this.button) {
            bcCartService.addItem(this.product, -1);
            return;
        }

        if (this.quantity <= 0) {
            return;
        }

        this.quantity -= 1;
    };

    /**
     * Returns the quantity for the current product.
     *
     * @return {Number}
     */
    this.getQuantity = () => {
        if (this.button) {
            return this.quantity;
        }

        const productCart = bcCartService.getItem(this.product) || {};

        return productCart.quantity || 0;
    };

    /**
     * Adds the current product to the cart, using the current quantity.
     */
    this.addToCart = () => {
        bcCartService.addItem(this.product, this.quantity);
        this.quantity = 1;
    };
}
