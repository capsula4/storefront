export default /*@ngInject*/ function(ModalService, $state, bcCartService) {
    /**
     * Loads the homepage.
     */
    this.loadHomepage = () => {
        $state.go('list');
    };

    this.cart = bcCartService;
}
