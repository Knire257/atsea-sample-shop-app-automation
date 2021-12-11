import { $, ElementFinder } from 'protractor';

export class CreateUserPage {
    
    private usernameInput: ElementFinder;
    private passwordInput: ElementFinder;
    private createUserForm: ElementFinder;
    private submitBtn: ElementFinder;
    private successMessage: ElementFinder;
    private successBtn: ElementFinder;

    

    constructor() {
        
        this.usernameInput = $('input[name=username]');
        this.passwordInput = $('input[name=password]');
        this.createUserForm = $('.formContainer');
        this.submitBtn = $('form button');
        this.successMessage = $('.successMessage').innerHTML;
        this.successBtn = $('.successButton > button');

    }
    
    public getCreateUserForm(): ElementFinder {
        return this.createUserForm;
    }
    public getUsernameInput(): ElementFinder {
        return this.usernameInput;
    }
    public getPasswordInput(): ElementFinder {
        return this.passwordInput;
    }
    public getSubmitBtn(): ElementFinder {
        return this.submitBtn;
    }
    public getSuccessMessage():ElementFinder {
        return this.successMessage;
    }
    public getSuccessBtn(): ElementFinder {
        return this.successBtn;
    }
    public async fillUsernameField(email: string) {
        await this.usernameInput.sendKeys(email);
    }
    public async fillPasswordField(password: string) {
        await this.passwordInput.sendKeys(password);
    }
    public async clickSubmitBtn() {
        await this.submitBtn.click();
    }
    public async clickSuccessBtn(){
        await this.successBtn.click();
    }
}