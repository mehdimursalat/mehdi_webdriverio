const Page = require('./tokpedPages');

class AboutPageTokped extends Page {

    get aboutHeader () { return $('.css-z1tvno') };
    get menuBeranda () { return $('.css-t5xwa3 > ul:nth-child(1) > li:nth-child(1) > a')}
    get menuTentangKami () { return $('.css-t5xwa3 > ul:nth-child(1) > li:nth-child(1) > a')}
    get menuBisnisKami () { return $('.css-t5xwa3 > ul:nth-child(1) > li:nth-child(1) > a')}
    get menuNewsroom () { return $('.css-t5xwa3 > ul:nth-child(1) > li:nth-child(1) > a')}
    get menuGabung () { return $('.css-t5xwa3 > ul:nth-child(1) > li:nth-child(1) > a')}
    get menuKontak () { return $('.css-t5xwa3 > ul:nth-child(1) > li:nth-child(1) > a')}


    async verifyPage () {
        await this.aboutHeader.isDisplayed();
        await this.menuBeranda.isDisplayed();
        await this.menuTentangKami.isDisplayed();
        await this.menuBisnisKami.isDisplayed();
        await this.menuNewsroom.isDisplayed();
        await this.menuGabung.isDisplayed();
        await this.menuKontak.isDisplayed();
    }

    open () {
        return super.open('about');
    }
}

module.exports = new AboutPageTokped();
