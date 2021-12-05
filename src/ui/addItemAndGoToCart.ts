import { $, ElementFinder } from 'protractor';

export class AddItemAndGoToCart {
    private addProductBtn: ElementFinder;
    private checkoutBtn: ElementFinder;

    constructor (){
        this.addProductBtn = $('.tileAdd > button')[0];
        this.checkoutBtn = $('.checkout-button > a');
    }

    public async ClickAddBtn (){
        await this.addProductBtn.click();
    }
    public async ClickCheckoutBtn (){
        await this.checkoutBtn.click();
    }
}

