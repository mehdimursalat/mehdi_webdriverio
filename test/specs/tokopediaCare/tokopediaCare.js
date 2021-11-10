const TokpedCarePage = require('../../pageobjects/tokpedCare.page');
const HomepageTokped = require('../../pageobjects/homeTokped.page');

describe('Tokped Care', () => {
    it('Verify Tokped Care page', async () => {
        await HomepageTokped.open();
        await HomepageTokped.openTokpedCarePage();
        await TokpedCarePage.verifyPage();
    });
});