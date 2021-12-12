import { $, ElementFinder } from 'protractor';

export class CheckoutPage {
    private checkoutPageTitle: ElementFinder;
    private btnCompleteOrder: ElementFinder;

    constructor(){
        this.btnCompleteOrder = $('.infoButton > button');
        this.checkoutPageTitle = $('.checkoutTitle');
    }
    public getBtnCompleteOrder(): ElementFinder{
        return this.btnCompleteOrder;
    }
    public async clickBtnCompleteOrder (){
        await this.btnCompleteOrder.click();
    }
    public getCheckouPageTitle(): ElementFinder{
        return this.checkoutPageTitle;
    }
    
}