export default /*@ngInject*/ function($state, bcCartService) {
    this.go = () => {
        $state.go('view', {
            product: this.product
        });
    };

    this.add = () => {
        bcCartService.addItem(this.product, 1);
    };
}
