const TokpedCarePage = require('../../pageobjects/tokpedCare.page');
// const HomepageTokped = require('../../pageobjects/homeTokped.page');

describe('Pesanan Saya Topic', () => {
    it('Verify Pesanan Saya topic page', async () => {
        await TokpedCarePage.openAkunSaya();
        await TokpedCarePage.verifyPagePesananSaya();
    });
});