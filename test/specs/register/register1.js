const RegisterPageTokped = require('../../pageobjects/registerTokped.page');

describe('Positive Case Register', () => {
    it('Register with valid email', async () => {
        await RegisterPageTokped.open();
        await RegisterPageTokped.register('tue@gmail.com');
    });
});