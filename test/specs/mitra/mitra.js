const MitraPageTokped = require('../../pageobjects/mitraTokped.page');
const HomepageTokped = require('../../pageobjects/homeTokped.page');

describe('Mitra', () => {
    it('Verify Mitra page', async () => {
        await HomepageTokped.open();
        await HomepageTokped.openMitraPage();
        await MitraPageTokped.verifyPage();
    });
});