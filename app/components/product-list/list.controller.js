import './list.scss';

export default /*@ngInject*/ function(bcProductsResource, $timeout) {
    this.loading = true;

    /**
     * Inits list of available items.
     */
    this.init = () => {
        bcProductsResource.query()
            .then(response => {
                this.items = response.data;
            }, () => {
                this.error = 'Failed to retrieve products.';
            }).finally(() => {
                this.loading = false;
            });
    };

    // use timeout to simulate loading effect from API.
    this.init();
}
