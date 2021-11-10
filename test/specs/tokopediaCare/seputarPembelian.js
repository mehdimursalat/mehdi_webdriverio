const TokpedCarePage = require('../../pageobjects/tokpedCare.page');

describe('Seputar Pembelian Topic', () => {
    it('Verify Seputar Pembelian topic page', async () => {
        await TokpedCarePage.openSeputarPembelian();
        await TokpedCarePage.verifySeputarPembelian();
    });
});