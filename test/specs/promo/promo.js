const PromoPageTokped = require('../../pageobjects/promoTokped.page');
const HomepageTokped = require('../../pageobjects/homeTokped.page');

describe('Promo', () => {
    it('Verify Promo page', async () => {
        await HomepageTokped.open();
        await HomepageTokped.openPromoPage();
        await PromoPageTokped.verifyPage();
    });
});