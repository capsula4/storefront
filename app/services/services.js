import angular from 'angular';

import resource from './resource';

angular.module('services', [])
    .service('bcProductsResource', resource);
