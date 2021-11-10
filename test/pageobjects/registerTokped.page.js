const Page = require('./tokpedPages');

class RegisterPageTokped extends Page {

    get inputEmailOrPhone () { return $('#regis-input') }
    get btnDaftar () { return $('.css-10tzox8-unf-btn') }
    get modalVerifyEmail () { return $('.css-1e16la8-unf-dialog')}
    get btnSubmit () { return $('.css-evb2vf-unf-btn')}
    get pageTitleVerification () { return $('.otp__header-container > h1:nth-child(2)')}
    get emailValidation () { return $('.css-t9c9fq')}

    async register (emailorphone) {
        await this.inputEmailOrPhone.setValue(emailorphone);
        await this.btnDaftar.click();
        await this.modalVerifyEmail.isDisplayed();
        await this.btnSubmit.click();
        await this.pageTitleVerification.isDisplayed();
        expect(this.pageTitleVerification).toHaveValue('Verifikasi')
    }

    async invalidRegister (emailorphone) {
        await this.inputEmailOrPhone.setValue(emailorphone);
        await this.btnDaftar.click();
        await this.emailValidation.isDisplayed();
        expect(this.emailValidation).toHaveValue('Alamat Email tidak dapat digunakan.')
    }

    open () {
        return super.open('register');
    }
}

module.exports = new RegisterPageTokped();
