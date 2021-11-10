const TokpedCarePage = require('../../pageobjects/tokpedCare.page');

describe('Pembayaran Topic', () => {
    it('Verify Pembayaran topic page', async () => {
        await TokpedCarePage.openPembayaran();
        await TokpedCarePage.verifyPagePembayaran();
    });
});