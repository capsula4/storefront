// Test for an angular component.

describe('Product Cart component', () => {
    let $compile
    let $rootScope
    let element

    function compileAndDigest (template) {
        const element = $compile(template)($rootScope);
        $rootScope.$digest();
        return element;
    };

    beforeEach(() => {
        angular.mock.module('BigCommerceTest');

        inject($injector => {
            $compile = $injector.get('$compile');
            $rootScope = $injector.get('$rootScope');
        });
    });

    describe('When the element has button', () => {
        beforeEach(() => {
            element = compileAndDigest(`
                <bc-product-cart
                    product="{}"
                    button="true">
                </bc-product-cart>`);
        });

        it('should have default quantity', () => {
            expect(element.find('.bc-product-cart__quantity').text()).toMatch("1");
        });

        it('should have quantity control elements', () => {
            expect(element.find('.bc-product-cart__qty-control').length).toEqual(1);
            expect(element.find('.bc-product-cart__control').length).toEqual(1);
        });

        it('should have add to cart button', () => {
            expect(element.find('.bc-button__cart').length).toEqual(1);
        });
    });

    describe('When the element has no button', () => {
        beforeEach(() => {
            element = compileAndDigest(`
                <bc-product-cart
                    product="{}"
                    button="false">
                </bc-product-cart>`);
        });

        it('should the quantity of the current product (0)', () => {
            expect(element.find('.bc-product-cart__quantity').text()).toMatch("0");
        });

        it('should have quantity control elements', () => {
            expect(element.find('.bc-product-cart__qty-control').length).toEqual(1);
            expect(element.find('.bc-product-cart__control').length).toEqual(1);
        });

        it('should have not have add cart button', () => {
            expect(element.find('.bc-button__cart').length).toEqual(0);
        });
    });
});
