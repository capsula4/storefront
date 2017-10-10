import './cart.scss';

export default /*@ngInject*/ function(bcCartService) {
    this.quantity = this.button ? 1 : (this.product.quantity || 0);

    this.increase = () => {
        if (!this.button) {
            bcCartService.addItem(this.product, 1);
            return;
        }

        this.quantity += 1;
    };

    this.getQuantity = () => {
        if (this.button) {
            return this.quantity;
        }

        const productCart = bcCartService.getItem(this.product) || {};

        return productCart.quantity || 0;
    };

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

    this.addToCart = () => {
        bcCartService.addItem(this.product, this.quantity);
        this.quantity = 1;
    };
}
