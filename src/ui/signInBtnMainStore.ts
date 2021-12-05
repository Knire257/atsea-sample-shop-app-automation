import { $, ElementFinder } from 'protractor';

export class SignInBtnMainStore {
    private btnSignIn: ElementFinder;

    constructor() {
        this.btnSignIn = $('button')[1];
    }

    public async clickSignInBtn() {
        await this.btnSignIn.click();
    }
}