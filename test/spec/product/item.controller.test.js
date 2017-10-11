// Test for an angular controller, spying on dependencies (could have also mocked).

import itemCtrl from 'components/product-list/item/item.controller';

describe('Product Item controller', () => {
    let createController;
    let scope;
    let $state;
    let bcCartService;
    let item = {foo: 'bar'};
    let ctrl;

    beforeEach(angular.mock.module('BigCommerceTest'));

    beforeEach(inject(($controller, $injector) => {
        $state = $injector.get('$state');
        bcCartService = $injector.get('bcCartService');

        createController = () => {
          return $controller(itemCtrl, {
              $scope: {}
          }, {
              product: item
          });
        }
    }));

    describe('#go', () => {
        beforeEach(() => {
            ctrl = createController();
        });

        it('should go to product view page passing product information', () => {
            spyOn($state,'go');
            ctrl.go();
            expect($state.go).toHaveBeenCalledWith('view', {product: item});
        });
    });

    describe('#add', () => {
        beforeEach(() => {
            ctrl = createController();
        });

        it('should call the cart service with the active product and quantity of 1', () => {
            spyOn(bcCartService,'addItem');
            ctrl.add();
            expect(bcCartService.addItem).toHaveBeenCalledWith(item, 1);
        });
    });
});
