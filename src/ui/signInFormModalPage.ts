import { $, ElementFinder } from 'protractor';

export class SignInFormModalPage {
    private userUsername: ElementFinder;
    private userPassword: ElementFinder;
    private btnSubmitUserData: ElementFinder;

    constructor() {
        this.userUsername = $('#username-Username-undefined-63820');
        this.userPassword = $('#password-Password-undefined-29962');
        this.btnSubmitUserData = $('.loginFormButton > button');
    }

    public async sendUserData(email: string, password: string) {
        await this.userUsername.sendKeys(email);
        await this.userPassword.sendKeys(password);
        await this.btnSubmitUserData.click();
    }
}