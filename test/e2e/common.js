const WAIT_TIMEOUT = 10000
const EC = protractor.ExpectedConditions

module.exports = {
    waitForElementVisible: function(elementFinder) {
        return browser.wait(
            EC.presenceOf(elementFinder),
            WAIT_TIMEOUT,
            `Element (${elementFinder.locator()}) not visible after 10 seconds`
        );
    },

    loadPage: function(page) {
        if (typeof page === 'undefined') {
            page = '';
        }

        browser.get(`http://127.0.0.1:9001/#/${page}`);
    }
};
