const Page = require('./tokpedPages');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPageTokped extends Page {
    /**
     * define selectors using getter methods
     */
    get inputEmailOrPhone () { return $('#email-phone') }
    get inputPassword () { return $('#password-input') }
    get btnNext () { return $('#email-phone-submit') }
    get btnMasuk () { return $('.css-ow4jg3-unf-btn') }
    get validationMessage () { return $('.js__password-form-err') }
    get registerModal () { return $('.js__dialog-auto-register')}

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (emailorphone, password) {
        await this.inputEmailOrPhone.setValue(emailorphone);
        await this.btnNext.click();
        await this.inputPassword.setValue(password);
        await this.btnMasuk.click();
    }

    async invalidLogin (emailorphone, password) {
        await this.inputEmailOrPhone.setValue(emailorphone);
        await this.btnNext.click();
        await this.inputPassword.setValue(password);
        await this.btnMasuk.click();
        await this.validationMessage.isDisplayed();
    }

    async unregisteredEmail (emailorphone) {
        await this.inputEmailOrPhone.setValue(emailorphone);
        await this.btnNext.click();
        await this.registerModal.isDisplayed();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPageTokped();
