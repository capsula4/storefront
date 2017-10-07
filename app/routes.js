import 'components/product-list/list.scss';
import productListCtrl from 'components/product-list/list.controller';

export default /*@ngInject*/ function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('main', {
        url: '/',
        views: {
            '@': {
                templateUrl: '/components/product-list/list.html',
                controller: productListCtrl,
                controllerAs: '$ctrl'
            }
        }
    });
}
