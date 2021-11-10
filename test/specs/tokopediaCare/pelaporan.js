const TokpedCarePage = require('../../pageobjects/tokpedCare.page');

describe('Pelaporan Topic', () => {
    it('Verify Pelaporan topic page', async () => {
        await TokpedCarePage.openPelaporan();
        await TokpedCarePage.verifyPelaporan();
    });
});