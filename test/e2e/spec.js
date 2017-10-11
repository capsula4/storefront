const helper = require('./common');

const LIST = {
    list: by.css('.po-list'),
    items: by.css('.po-list-item'),
    add: by.css('.bc-product-item__actions .po-view'),
    view: by.css('.bc-product-item__actions .po-add')
};

const PRODUCT = {
    header: by.css('.bc-product__content h2'),
    content: by.css('.bc-product__content'),
    add: by.css('.bc-button__cart'),
    quantity: by.css('.bc-product-cart__quantity'),
    increase: by.css('.bc-product-cart__control .po-inc'),
    decrease: by.css('.bc-product-cart__control .po-dec')
};

const HEADER = {
    cart: by.css('.bc-nav-item')
};

describe('When loading listing page', function() {
    beforeEach(() => {
        helper.loadPage();
    });

    it('should have a title', function() {
      expect(browser.getTitle()).toEqual('BigCommerce capsula4');
    });

    it('should have an initial empty cart', function() {
      expect(element(HEADER.cart).getText()).toMatch("(0)");
    });

    it('should load the 6 products', function() {
      helper.waitForElementVisible(element(LIST.list));
      expect(element.all(LIST.items).count()).toEqual(6);
    });

    it('should update cart total when adding a product', function() {
      helper.waitForElementVisible(element(LIST.list));
      element.all(LIST.add).first().click();
      expect(element(HEADER.cart).getText()).toMatch("(1)");
    });

    it('should open product view when clicking on product', function() {
      helper.waitForElementVisible(element(LIST.list));
      element.all(LIST.view).first().click();
      expect(browser.getCurrentUrl()).toMatch("product");
    });
});

describe('When loading product page', function() {
    beforeEach(() => {
        helper.loadPage();
        helper.waitForElementVisible(element(LIST.list));
        element.all(LIST.view).first().click();
        helper.waitForElementVisible(element(PRODUCT.content));
    });

    it('should display the product name', function() {
      expect(element(PRODUCT.header).getText()).toMatch("Blue Stripe Stoneware Plate");
    });

    it('should have default quantity of 1', function() {
      expect(element(PRODUCT.quantity).getText()).toMatch("1");
    });

    it('should be able to change quantity and add it to cart', function() {
        expect(element(HEADER.cart).getText()).toMatch("(0)");
        element(PRODUCT.increase).click();
        expect(element(PRODUCT.quantity).getText()).toMatch("2");
        element(PRODUCT.increase).click();
        expect(element(PRODUCT.quantity).getText()).toMatch("3");
        element(PRODUCT.decrease).click();
        expect(element(PRODUCT.quantity).getText()).toMatch("2");
        element(PRODUCT.add).click();
        expect(element(HEADER.cart).getText()).toMatch("(2)");
    });
});
