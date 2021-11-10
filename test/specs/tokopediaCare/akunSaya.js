const TokpedCarePage = require('../../pageobjects/tokpedCare.page');
// const HomepageTokped = require('../../pageobjects/homeTokped.page');

describe('Akun Saya Topic', () => {
    it('Verify Akun Saya topic page', async () => {
        await TokpedCarePage.openAkunSaya();
        await TokpedCarePage.verifyPageAkunSaya();
    });
});