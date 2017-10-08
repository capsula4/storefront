import 'jquery';
import angular from 'angular';
import 'angular-resource';
import 'angular-modal-service';
import 'angular-ui-router';
import 'angular-sanitize';
import 'styles/styles.scss';

import mainRoutes from 'routes';
import headerComponent from 'components/header/header';
import productListItem from 'components/product-list/item/item';
import productsResource from 'components/product-list/list.resource';
import cartService from 'components/cart/cart.service';

angular.module('BigCommerceTest', [
    'ngResource',
    'ui.router',
    'ngSanitize',
    'angularModalService'
])
.service('bcProductsResource', productsResource)
.service('bcCartService', cartService)
.component('bcHeader', headerComponent)
.component('bcProductListItem', productListItem)
.config(mainRoutes);
