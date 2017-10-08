export default /*@ngInject*/ function(ModalService, $state) {
    /**
     * Loads the homepage.
     */
    this.loadHomepage = () => {
        $state.go('list');
    };
}
