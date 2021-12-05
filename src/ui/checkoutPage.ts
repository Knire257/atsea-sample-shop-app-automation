import { $, ElementFinder } from 'protractor';

export class CheckoutPage {
    private btnCompleteOrder: ElementFinder;

    constructor(){
        this.btnCompleteOrder = $('.infoButton > button');
    }

    public async clickBtnCompleteOrder (){
        await this.btnCompleteOrder.click();
    }
}