export default /*@ngInject*/ function(ModalService, $state, $timeout, bcCartService) {
    /**
     * Loads the homepage.
     */
    this.loadHomepage = () => {
        $state.go('list');
    };

    /**
     * Highlights the "My Cart" link
     */
    this.highlightCart = () => {
        this.highlight = true;

        $timeout(() => {
            this.highlight = false;
        }, 1000);
    };

    /**
     * Get total quantity of items in cart.
     *
     * @return {Number}
     */
    this.getTotal = () => {
        if (this.quantity !== bcCartService.getTotalQuantity()) {
            if (typeof this.quantity !== 'undefined') {
                this.highlightCart();
            }

            this.quantity = bcCartService.getTotalQuantity();
        }

        return this.quantity;
    };
}
