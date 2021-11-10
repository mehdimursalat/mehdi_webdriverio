const HomepageTokped = require('../../pageobjects/homeTokped.page');

describe('Homepage Header', () => {
    it('Verify homepage menu in header', async () => {
        await HomepageTokped.open();
        await HomepageTokped.verifyHomepageHeader();
    });
});