import './cart.scss';

export default /*@ngInject*/ function(bcCartService) {
    if (this.button) {
        this.quantity = 1;
    }

    this.increase = () => {
        this.quantity += 1;

        if (!this.button) {
            this.addToCart();
        }
    };

    this.decrease = () => {
        if (this.quantity <= 0) {
            return;
        }

        this.quantity -= 1;

        if (!this.button) {
            this.addToCart();
        }
    };

    this.addToCart = () => {
        bcCartService.addItem(this.product, this.quantity);

        if (this.button) {
            this.quantity = 1;
        }
    };
}
