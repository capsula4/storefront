describe('Cart Service', () => {
    let cartService;

    beforeEach(angular.mock.module('BigCommerceTest'));

    describe('when its newly created', () => {
        beforeEach(inject(($injector) => {
            cartService = $injector.get('bcCartService');
        }));

        it('should have zero items when its created', () => {
            expect(cartService.getItems()).toEqual({});
        });

        it('should return 0 as total quantity', () => {
            expect(cartService.getTotalQuantity()).toEqual(0);
        });

        it('should return 0 as total price', () => {
            expect(cartService.getTotalPrice()).toEqual(0);
        });

        it('should return null for any product', () => {
            expect(cartService.getItem({})).toEqual(null);
        });
    });

    describe('when adding an item', () => {
        const product = {title: 'x', price: 2};

        beforeEach(inject(($injector) => {
            cartService = $injector.get('bcCartService');
            cartService.addItem(product, 5);
            cartService.addItem(product, 5);
        }));

        it('should return items indexed by title', () => {
            expect(cartService.getItems()).toEqual({
                'x': product,
            });
        });

        it('should return 10 as total quantity', () => {
            expect(cartService.getTotalQuantity()).toEqual(10);
        });

        it('should return 20 as total price', () => {
            expect(cartService.getTotalPrice()).toEqual(20);
        });

        it('should return the expected item when fetching an item', () => {
            expect(cartService.getItem(product)).toEqual(product);
        });
    });

    describe('when adding many items', () => {
        const product = {title: 'x', price: 2};
        const product2 = {title: 'a', price: 3};

        beforeEach(inject(($injector) => {
            cartService = $injector.get('bcCartService');
            cartService.addItem(product, 5);
            cartService.addItem(product2, 5);
            cartService.addItem(product, 1);
            cartService.addItem(product2, 3);
        }));

        it('should return items indexed by title', () => {
            expect(cartService.getItems()).toEqual({
                'x': product,
                'a': product2,
            });
        });

        it('should return 10 as total quantity', () => {
            expect(cartService.getTotalQuantity()).toEqual(14);
        });

        it('should return 20 as total price', () => {
            expect(cartService.getTotalPrice()).toEqual(12 + 24);
        });
    });

    describe('when adding and removing quantities from items', () => {
        const product = {title: 'x', price: 2};
        const product2 = {title: 'a', price: 3};

        beforeEach(inject(($injector) => {
            cartService = $injector.get('bcCartService');
            cartService.addItem(product, 5);
            cartService.addItem(product2, 5);
            cartService.addItem(product, -1);
            cartService.addItem(product2, -2);
        }));

        it('should return items indexed by title', () => {
            expect(cartService.getItems()).toEqual({
                'x': product,
                'a': product2,
            });
        });

        it('should return 10 as total quantity', () => {
            expect(cartService.getTotalQuantity()).toEqual(7);
        });

        it('should return 20 as total price', () => {
            expect(cartService.getTotalPrice()).toEqual(8 + 9);
        });
    });

    describe('when removing more quantities than what was added', () => {
        const product = {title: 'x', price: 2};
        const product2 = {title: 'a', price: 3};

        beforeEach(inject(($injector) => {
            cartService = $injector.get('bcCartService');
            cartService.addItem(product, 5);
            cartService.addItem(product2, 5);
            cartService.addItem(product, -10);
            cartService.addItem(product2, -1);
        }));

        it('should return items indexed by title minus those that are 0', () => {
            expect(cartService.getItems()).toEqual({
                'a': product2,
            });
        });

        it('should return 10 as total quantity', () => {
            expect(cartService.getTotalQuantity()).toEqual(4);
        });

        it('should return 20 as total price', () => {
            expect(cartService.getTotalPrice()).toEqual(12);
        });
    });

    describe('when adding and deleting items', () => {
        const product = {title: 'x', price: 2};
        const product2 = {title: 'a', price: 3};

        beforeEach(inject(($injector) => {
            cartService = $injector.get('bcCartService');
            cartService.addItem(product, 5);
            cartService.addItem(product2, 5);
            cartService.addItem(product, -1);
            cartService.addItem(product2, -2);
            cartService.removeItem(product2);
        }));

        it('should return items indexed by title', () => {
            expect(cartService.getItems()).toEqual({
                'x': product
            });
        });

        it('should return 10 as total quantity', () => {
            expect(cartService.getTotalQuantity()).toEqual(4);
        });

        it('should return 20 as total price', () => {
            expect(cartService.getTotalPrice()).toEqual(8);
        });
    });
});
