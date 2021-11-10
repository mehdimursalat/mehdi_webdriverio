const Page = require('./tokpedPages');

class TokpedCarePage extends Page {

    get logoTokpedCare () { return $('.css-1czdnou > a') };
    get topicContainer () { return $('#categoryListHelp') };
    get btnAkunSaya () { return $('.css-1nd90bc:nth-child(1)')};
    get btnPesananSaya () { return $('.css-1nd90bc:nth-child(2)')};
    get btnPembayaran () { return $('.css-1nd90bc:nth-child(3)')};
    get btnPengiriman () { return $('.css-1nd90bc:nth-child(4)')};
    get btnRefund () { return $('.css-1nd90bc:nth-child(5)')};
    get btnKomplainPesanan () { return $('.css-1nd90bc:nth-child(6)')};
    get btnPromosi () { return $('.css-1nd90bc:nth-child(7)')};
    get btnLainnya () { return $('.css-1nd90bc:nth-child(8)')};
    get modalSemuaTopik () { return $('.css-f304s0-unf-modal')};
    get btnSaldoTarikDana () { return $('.css-1nd90bc:nth-child(8)')};
    get logo () { return $('.css-1pi91tw > img')};
    get titlePage () { return $('.css-1jc8vh8-unf-heading-unf-heading')};
    get btnNext () { return $('.unf-coachmark__next-button')}


    //Tokped Care Page
    async verifyPage () {
        await this.logoTokpedCare.isDisplayed();
        await this.topicContainer.isDisplayed();
        await this.btnAkunSaya.isDisplayed();
        await this.btnPesananSaya.isDisplayed();
        await this.btnPembayaran.isDisplayed();
        await this.btnPengiriman.isDisplayed();
        await this.btnRefund.isDisplayed();
        await this.btnKomplainPesanan.isDisplayed();
        await this.btnPromosi.isDisplayed();
        await this.btnLainnya.isDisplayed();
    }

    //Tokped Care Akun Saya Topic
    async openAkunSayaTopic () {
        await this.btnNext.click();
        await this.btnNext.click();
        await this.btnNext.click();
        await this.btnAkunSaya.click();
    }

    async verifyPageAkunSaya () {
        await this.logo.isDisplayed();
        expect(this.titlePage).toHaveValue('Akun Saya')
    }

    async verifyPagePesananSaya () {
        await this.logo.isDisplayed();
        expect(this.titlePage).toHaveValue('Pesanan Saya')
    }

    async verifyPagePembayaran () {
        await this.logo.isDisplayed();
        expect(this.titlePage).toHaveValue('Pembayaran')
    }

    async verifyPagePengiriman () {
        await this.logo.isDisplayed();
        expect(this.titlePage).toHaveValue('Pengiriman')
    }

    async verifyPengembalianDana () {
        await this.logo.isDisplayed();
        expect(this.titlePage).toHaveValue('Pengembalian Dana')
    }

    async verifyKomplainPesanan () {
        await this.logo.isDisplayed();
        expect(this.titlePage).toHaveValue('Komplain Pesanan')
    }

    async verifyPromosi () {
        await this.logo.isDisplayed();
        expect(this.titlePage).toHaveValue('Promosi')
    }

    async verifySaldoDanTarikDana  () {
        await this.logo.isDisplayed();
        expect(this.titlePage).toHaveValue('Saldo & Tarik Dana')
    }

    async verifyPelaporan () {
        await this.logo.isDisplayed();
        expect(this.titlePage).toHaveValue('Pelaporan Masalah Keamanan')
    }

    async verifySeputarPembelian () {
        await this.logo.isDisplayed();
        expect(this.titlePage).toHaveValue('Seputar Pembelian')
    }

    // async  () {
    //     await this.logo.isDisplayed();
    //     expect(this.titlePage).toHaveValue('')
    // }

    openAkunSaya () {
        return super.open('help/browse/t-0054-akun-saya');
    }

    openPesananSaya () {
        return super.open('help/browse/t-0060-pesanan-saya');
    }

    openPembayaran () {
        return super.open('help/browse/t-0055-pembayaran');
    }

    openPengiriman () {
        return super.open('help/browse/t-0061-pengiriman')
    }

    openPengembalianDana () {
        return super.open('help/browse/t-0085-pengembalian-dana')
    }

    openKomplainPesanan () {
        return super.open('help/browse/t-0122-komplain-pesanan')
    }

    openPromosi () {
        return super.open('help/browse/t-0056-promosi')
    }

    openSaldoDanTarikDana () {
        return super.open('help/browse/t-0057-saldo-tarik-dana')
    }

    openPelaporan () {
        return super.open('help/browse/t-0058-pelaporan-masalah-keamanan')
    }

    openSeputarPembelian () {
        return super.open('help/browse/t-0121-fitur-belanja')
    }

    // open () {
    //     return super.open('')
    // }
}

module.exports = new TokpedCarePage();
