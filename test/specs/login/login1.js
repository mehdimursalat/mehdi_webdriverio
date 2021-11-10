const LoginPageTokped = require('../../pageobjects/loginTokped.page');

describe('Positive Case Login', () => {
    it('Login with valid credential', async () => {
        await LoginPageTokped.open();
        await LoginPageTokped.login('tuserinterface@gmail.com', 'test1234');
    });
});