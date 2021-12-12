import { $, ElementFinder } from 'protractor';

export class SignInFormModalPage {
    private userUsername: ElementFinder;
    private userPassword: ElementFinder;
    private btnSubmitUserData: ElementFinder;
    private signInUserForm: ElementFinder;

    constructor() {
        this.userUsername = $("input[name=username]");
        this.userPassword = $("input[name=password]");
        this.btnSubmitUserData = $('form button');
        this.signInUserForm = $('.formContainer');
    }
    public getUsernameField(): ElementFinder {
        return this.userUsername;
    }
    public getPasswordField(): ElementFinder {
        return this.userPassword;
    }
    public getBtnSubmitUserData(): ElementFinder {
        return this.btnSubmitUserData;
    }
    public async fillUsernameField(email: string) {
        await this.userUsername.sendKeys(email);
    }
    public async fillPasswordField(password: string) {
        await this.userPassword.sendKeys(password);
    }
    public async submitUserData() {
        await this.btnSubmitUserData.click();
    }
    public getCreateUserForm(): ElementFinder {
        return this.signInUserForm;
    }
}