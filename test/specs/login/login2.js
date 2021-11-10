const LoginPageTokped = require('../../pageobjects/loginTokped.page');

describe('Negative Case Login', () => {
    it('Login with invalid credential', async () => {
        await LoginPageTokped.open();
        await LoginPageTokped.invalidLogin('tuserinterface@gmail.com', 'test12345');
    });
});