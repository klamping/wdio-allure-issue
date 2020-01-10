const assert = require('assert');

describe('The Test', function () {
    beforeEach(function () {
        browser.url('./');
    });

    it('shall pass', function () {
        console.log($('.findme').getText());
        assert(true);
    });

    it('shall not pass', function () {
        console.log($('.findme').getText());
        assert(false);
    });
})