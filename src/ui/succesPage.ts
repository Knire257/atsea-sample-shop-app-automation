import { $, ElementFinder } from 'protractor';

export class SuccessPage {
    private continueShoppingBtn: ElementFinder;

    constructor () {
        this.continueShoppingBtn = $('.successButton > a');
    }

    public async clickContinueShoppingBtn () {
        await this.continueShoppingBtn.click();
    }
}