import { browser, ExpectedConditions } from 'protractor';
import { MainPage, SignInFormModalPage, CheckoutPage, SuccessPage } from '../../src/ui/index'

describe('When buying an item', () => {
    const expectedConditions = ExpectedConditions;

    const mainPage = new MainPage();
    const signInFormModalPage = new SignInFormModalPage();
    const checkoutPage = new CheckoutPage();
    const successPage = new SuccessPage();

    describe('Before buying an item', ()=> {
        it ('it should get the page', async () => {
            await browser.get('http://host.docker.internal:8080');
            expect(await browser.getTitle()).toEqual('Atsea Shop');
        });
        it('then it should log in', async () => {
            await browser.wait(expectedConditions.elementToBeClickable(mainPage.getBtnSignIn()));
            await mainPage.getBtnSignIn();
            await browser.wait(expectedConditions.presenceOf(mainPage.getSigInForm()));
            await browser.wait(expectedConditions.elementToBeClickable(signInFormModalPage.getUsernameField()));
            await signInFormModalPage.fillUsernameField("user");
            await browser.wait(expectedConditions.elementToBeClickable(signInFormModalPage.getPasswordField()));
            await signInFormModalPage.fillPasswordField("pas");
            await browser.wait(expectedConditions.elementToBeClickable(signInFormModalPage.getBtnSubmitUserData()), 3000)
            await signInFormModalPage.submitUserData();
            await browser.wait(expectedConditions.presenceOf(mainPage.getWelcomeMessage()));
            expect(mainPage.getWelcomeMessage()).toEqual('Welcome!');
        })
        it('then it should add an item to the cart and proceed to checkout', async() => {
            await browser.wait(expectedConditions.elementToBeClickable(mainPage.getAddProductBtn()));
            await mainPage.ClickAddBtn();
            await browser.wait(expectedConditions.presenceOf(checkoutPage.getCheckouPageTitle()));
            expect(checkoutPage.getCheckouPageTitle().innerHTML).toEqual('Checkout');
        })
        it('then it should finish the order', async ()=> {
            await browser.wait(expectedConditions.elementToBeClickable(checkoutPage.getBtnCompleteOrder()));
            await checkoutPage.clickBtnCompleteOrder();
            await browser.wait(expectedConditions.presenceOf(successPage.getSuccessMessage()));
            expect(successPage.getSuccessMessage().innerHTML).toEqual('You have successfully placed an order!');
        })
        it('after, it should go back to the main page', async()=>{
            await browser.wait(expectedConditions.elementToBeClickable(successPage.getContinueShoppingBtn()));
            await successPage.clickContinueShoppingBtn();
            await browser.wait(expectedConditions.presenceOf(mainPage.getPageTitle()));
            expect(mainPage.getPageTitle()).toEqual('Atsea Shop');
        })
        it('it should log out', async () => {
            await browser.wait(expectedConditions.presenceOf(mainPage.getWelcomeMessage()));
            await browser.wait(expectedConditions.elementToBeClickable(mainPage.getBtnSignOut()));
            await mainPage.clickBtnSignOut();
            await browser.wait(expectedConditions.presenceOf(mainPage.getBtnCreateUser()));
            expect(mainPage.getBtnCreateUser().innerText).toEqual('Create User');
        })
    });
});
