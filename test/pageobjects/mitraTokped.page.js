const Page = require('./tokpedPages');

class MitraPageTokped extends Page {

    get logoMitraTokped () { return $('.css-1oazjfe > div:nth-child(1) > img') };
    get btnDownload () { return $('.css-ypvgha-unf-btn > span')};
    get mitraBenefit () { return $('div.css-79elbk:nth-child(2)')};
    get mitraHowTo () { return $('div.css-79elbk:nth-child(3)')};
    get mitraTestimony () {return $('div.css-79elbk:nth-child(6)')};

    async verifyPage () {
        await this.logoMitraTokped.isDisplayed();
        await this.btnDownload.isDisplayed();
        await this.mitraBenefit.isDisplayed();
        await this.mitraHowTo.isDisplayed();
        await this.mitraTestimony.isDisplayed();
    }
}

module.exports = new MitraPageTokped();
