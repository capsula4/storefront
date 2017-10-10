export default /*@ngInject*/ function($state, bcCartService) {
    /**
     * Loads the "product view" page
     */
    this.go = () => {
        $state.go('view', {
            product: this.product
        });
    };

    /**
     * Adds one quantity of the current product to the cart.
     */
    this.add = () => {
        bcCartService.addItem(this.product, 1);
    };
}
