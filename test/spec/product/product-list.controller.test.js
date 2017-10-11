import listCtrl from 'components/product-list/list.controller';

describe('Product List controller', () => {
    let createController;
    let scope;
    let $httpBackend;
    let $timeout;

    beforeEach(angular.mock.module('BigCommerceTest'));

    beforeEach(inject(($controller, $rootScope, $injector) => {
        scope = $rootScope.$new();
        $httpBackend = $injector.get('$httpBackend');
        $timeout = $injector.get('$timeout');

        createController = () => {
          const ctrl = $controller(listCtrl, {
              $scope: scope
          });

          $timeout.flush();
          return ctrl;
        }
    }));

    describe('when API success', () => {
      const apiResponse = [{foo: 'bar'}];
      let ctrl

      beforeEach(() => {
        $httpBackend.expectGET('/data/products.json')
          .respond(200, apiResponse);

        ctrl = createController();
      });

      it('should show a loader while fetching the results from API', () => {
        expect(ctrl.loading).toEqual(true);
        $httpBackend.flush();
        expect(ctrl.loading).toEqual(false);
      });

      it('should have a property items that comes from API items payload', () => {
        $httpBackend.flush();
        expect(ctrl.items).toEqual(apiResponse);
      });

      afterEach(() => {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
      });
    })

    describe('when API fails', () => {
      const apiResponse = "error"
      let ctrl

      beforeEach(() => {
        $httpBackend.expectGET('/data/products.json')
          .respond(500, apiResponse);

        ctrl = createController();
      });

      it('should show a loader while fetching the results from API', () => {
        expect(ctrl.loading).toEqual(true);
        $httpBackend.flush();
        expect(ctrl.loading).toEqual(false);
      });

      it('should have an error property', () => {
        $httpBackend.flush();
        expect(ctrl.error).toEqual('Failed to retrieve products.');
      });

      afterEach(() => {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
      });
    })
});
