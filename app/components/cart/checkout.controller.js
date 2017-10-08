import './checkout.scss';

export default /*@ngInject*/ function($state) {
    // This should ideally re-trigger an API call, but we don't really have
    // a great way to handle products by IDs with the provided json
    this.product = $state.params.product;

    if (!this.product) {
        $state.go('list');
    }
}
