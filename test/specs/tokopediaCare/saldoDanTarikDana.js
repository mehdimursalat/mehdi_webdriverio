const TokpedCarePage = require('../../pageobjects/tokpedCare.page');

describe('Saldo & Tarik Dana Topic', () => {
    it('Verify Saldo & Tarik Dana topic page', async () => {
        await TokpedCarePage.openSaldoDanTarikDana();
        await TokpedCarePage.verifySaldoDanTarikDana();
    });
});