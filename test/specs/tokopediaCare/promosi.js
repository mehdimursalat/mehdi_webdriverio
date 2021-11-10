const TokpedCarePage = require('../../pageobjects/tokpedCare.page');

describe('Promosi Topic', () => {
    it('Verify Promosi topic page', async () => {
        await TokpedCarePage.openPromosi();
        await TokpedCarePage.verifyPromosi();
    });
});