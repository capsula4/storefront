import productListCtrl from 'components/product-list/list.controller';
import productViewCtrl from 'components/product/view.controller';

export default /*@ngInject*/ function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('list', {
        url: '/',
        views: {
            '@': {
                templateUrl: '/components/product-list/list.html',
                controller: productListCtrl,
                controllerAs: '$ctrl'
            }
        }
    }).state('view', {
        url: '/product',
        params: { product: null },
        views: {
            '@': {
                templateUrl: '/components/product/view.html',
                controller: productViewCtrl,
                controllerAs: '$ctrl'
            }
        }
    }).state('cart', {
        url: '/cart',
        views: {
            '@': {
                templateUrl: '/components/cart/cart.page.html',
            }
        }
    });
}
