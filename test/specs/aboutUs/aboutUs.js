const AboutUsPageTokped = require('../../pageobjects/aboutUsTokped.page');
const HomepageTokped = require('../../pageobjects/homeTokped.page');

describe('About Us', () => {
    it('Verify Tentang Tokopedia page', async () => {
        await HomepageTokped.open();
        await HomepageTokped.openAboutUsPage();
        await AboutUsPageTokped.verifyPage();
    });
});