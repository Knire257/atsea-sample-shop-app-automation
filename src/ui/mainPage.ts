import { $, ElementFinder } from 'protractor';

export class MainPage {
    private btnCreateUser: ElementFinder;
    private pageTitle: ElementFinder;
    private welcomeMessage: ElementFinder;
    private btnSignIn: ElementFinder;
    private signInForm: ElementFinder;
    private addProductBtn: ElementFinder;
    private checkoutBtn: ElementFinder;
    private btnSignOut: ElementFinder;
    

    constructor() {
        this.btnCreateUser = $('.buttonSection button:nth-child(1)');
        this.pageTitle = $('.headerTitle');
        this.welcomeMessage = $(".welcomeMessage");
        this.btnSignIn = $('.buttonSection button:nth-child(2)');
        this.signInForm = $('.loginFormContent');
        this.addProductBtn = $('.tileAdd button:nth-child(1)');
        this.checkoutBtn = $('.checkout-button a');
        this.btnSignOut = $('.navUser button');
    }

    public getBtnCreateUser(): ElementFinder {
        return this.btnCreateUser;
    }
    public async clickBtnCreateUser() {
        await this.btnCreateUser.click();
    }
    public getPageTitle(): ElementFinder {
        return this.pageTitle;
    }
    public getWelcomeMessage(): ElementFinder {
        return this.welcomeMessage;
    }
    public getBtnSignIn(): ElementFinder {
        return this.btnSignIn;
    }
    public clickBtnSignIn() {
        this.btnSignIn.click();
    }
    public getSigInForm(): ElementFinder {
        return this.signInForm;
    }
    public getAddProductBtn (): ElementFinder{
        return this.addProductBtn;
    }
    public async ClickAddBtn (){
        await this.addProductBtn.click();
    }
    public getCheckoutBtn (): ElementFinder{
        return this.checkoutBtn;
    }
    public async clickCheckoutBtn (){
        await this.checkoutBtn.click();
    }
    public getBtnSignOut (){
        return this.btnSignOut;
    }
    public async clickBtnSignOut (){
        await this.btnSignOut.click();
    } 

}