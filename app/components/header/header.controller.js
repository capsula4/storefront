export default /*@ngInject*/ function(ModalService, $state, bcCartService) {
    /**
     * Loads the homepage.
     */
    this.loadHomepage = () => {
        $state.go('list');
    };

    /**
     * Get total quantity of items in cart.
     *
     * @return {Number}
     */
    this.getTotal = () => {
        return bcCartService.getTotalQuantity();
    };
}
