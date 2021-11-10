const Page = require('./tokpedPages');

class HomepageTokped extends Page {

    get btnAboutUs () { return $('a.css-f0xez1:nth-child(1)')}
    get btnMitra () { return $('a.css-f0xez1:nth-child(2)')}
    get btnPromo () { return $('a.css-f0xez1:nth-child(4)')}
    get btnTokpedCare () { return $('a.css-f0xez1:nth-child(5)')}
    get btnMulaiBerjualan () { return $('a.css-f0xez1:nth-child(3)')}
    get logoTokped () { return $('.css-1ays7ve > img:nth-child(1)')}
   
    async verifyHomepageHeader () {
        await this.btnAboutUs.isDisplayed();
        await this.btnMitra.isDisplayed();
        await this.btnMulaiBerjualan.isDisplayed();
        await this.btnPromo.isDisplayed();
        await this.btnTokpedCare.isDisplayed();
        await this.logoTokped.isDisplayed();
    }

    async openAboutUsPage () {
        await this.btnAboutUs.click();
    };

    async openMitraPage () {
        await this.btnMitra.click();
    }

    async openPromoPage () {
        await this.btnPromo.click();
    }

    async openTokpedCarePage () {
        await this.btnTokpedCare.click();
    }
    
    open () {
        return super.open('');
    }
}



module.exports = new HomepageTokped();
