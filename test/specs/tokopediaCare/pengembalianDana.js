const TokpedCarePage = require('../../pageobjects/tokpedCare.page');

describe('Pengembalian Dana Topic', () => {
    it('Verify Pengembalian Dana topic page', async () => {
        await TokpedCarePage.openPengembalianDana();
        await TokpedCarePage.verifyPengembalianDana();
    });
});