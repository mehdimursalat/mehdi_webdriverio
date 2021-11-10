const TokpedCarePage = require('../../pageobjects/tokpedCare.page');

describe('Pengiriman Topic', () => {
    it('Verify Pengiriman topic page', async () => {
        await TokpedCarePage.openPengiriman();
        await TokpedCarePage.verifyPagePengiriman();
    });
});