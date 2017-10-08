export default /*@ngInject*/ function($http) {
    /**
     * Query all the products.
     *
     * @return {Promise<Array>}
     */
    this.query = () => {
        return $http({
            method: 'GET',
            url: '/data/products.json'
        });
    };
}
