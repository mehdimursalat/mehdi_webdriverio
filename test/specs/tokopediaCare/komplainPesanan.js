const TokpedCarePage = require('../../pageobjects/tokpedCare.page');

describe('Komplain Pesanan Topic', () => {
    it('Verify Komplain Pesanan topic page', async () => {
        await TokpedCarePage.openKomplainPesanan();
        await TokpedCarePage.verifyKomplainPesanan();
    });
});