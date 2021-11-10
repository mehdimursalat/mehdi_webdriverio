const Page = require('./tokpedPages');

class PromoPageTokped extends Page {

    get logoPromoTokped () { return $('.logo > a:nth-child(1) > img') };
    get btnBelanja () { return $('.cat-list__icon-belanja')};
    get btnPaymentAndTopUp () { return $('.cat-list__icon-produk-digital')};
    get btnProdukKeuangan () { return $('.cat-list__icon-produk-keuangan')};
    get btnTravelAndEntertainment () { return $('.cat-list__icon-tiket')};
    get promoContainer () { return $('div.container:nth-child(4)')};

    async verifyPage () {
        await this.logoPromoTokped.isDisplayed();
        await this.btnBelanja.isDisplayed();
        await this.btnPaymentAndTopUp.isDisplayed();
        await this.btnProdukKeuangan.isDisplayed();
        await this.btnTravelAndEntertainment.isDisplayed();
        await this.promoContainer.isDisplayed();
    }
}

module.exports = new PromoPageTokped();
