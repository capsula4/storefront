import './list.scss';

export default /*@ngInject*/ function(bcProductsResource) {
    this.loading = true;

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

    setTimeout(this.init, 1000);
}
