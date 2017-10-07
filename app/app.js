import 'jquery';
import angular from 'angular';
import 'angular-resource';
import 'angular-modal-service';
import 'angular-ui-router';
import 'angular-sanitize';
import 'styles/styles.scss';

import 'services/services';

import headerComponent from 'components/header/header';
import productListItem from 'components/product-list/item/item';
import mainRoutes from 'routes';

angular.module('BigCommerceTest', [
    'ngResource',
    'ui.router',
    'services',
    'ngSanitize',
    'angularModalService'
])
.component('bcHeader', headerComponent)
.component('bcProductListItem', productListItem)
.config(mainRoutes);
