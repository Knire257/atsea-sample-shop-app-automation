import { $, ElementFinder } from 'protractor';

export class SuccessPage {
    private continueShoppingBtn: ElementFinder;
    private successMessage: ElementFinder;

    constructor () {
        this.continueShoppingBtn = $('.successButton > a');
        this.successMessage = $('.successMessage');
    }
    public getContinueShoppingBtn (): ElementFinder{
        return this.continueShoppingBtn;
    }
    public async clickContinueShoppingBtn () {
        await this.continueShoppingBtn.click();
    }
    public getSuccessMessage (): ElementFinder {
        return this.successMessage;
    }
}