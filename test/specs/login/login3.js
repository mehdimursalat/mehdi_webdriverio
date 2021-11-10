const LoginPageTokped = require('../../pageobjects/loginTokped.page');

describe('Negative Case Login', () => {
    it('Login with unregistered email', async () => {
        await LoginPageTokped.open();
        await LoginPageTokped.unregisteredEmail('tuserinterfaces@gmail.com');
    });
});