export default /*@ngInject*/ function($state) {
    this.go = () => {
        $state.go('view', {
            product: this.product
        });
    };
}
