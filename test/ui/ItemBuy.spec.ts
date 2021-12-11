import { browser, ExpectedConditions } from 'protractor';
import { MainPage, SignInFormModalPage, CheckoutPage, SuccessPage } from '../../src/ui/index'

describe('When buying an item', () => {
    const expectedConditions = ExpectedConditions;

    const mainPage = new MainPage();
    const signInFormModalPage = new SignInFormModalPage();
    const checkoutPage = new CheckoutPage();
    const successPage = new SuccessPage();

    describe('Before buying an item', ()=> {
        it ('it should get the page', async (done) => {
            await browser.get('http://host.docker.internal:8080');
            expect(await browser.getTitle()).toEqual('Atsea Shop');
            done();
        });
        it('then it should create an user', async (done) => {
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
            done();
        })
        it('then it should add an item to the cart and proceed to checkout', async(done) => {
            await browser.wait(expectedConditions.elementToBeClickable(mainPage.getAddProductBtn()));
            await mainPage.ClickAddBtn();
            await browser.wait(expectedConditions.presenceOf(checkoutPage.getCheckouPageTitle()));
            expect(checkoutPage.getCheckouPageTitle().innerHTML).toEqual('Checkout');
            done();
        })
        it('then it should finish the order', async (done)=> {
            await browser.wait(expectedConditions.elementToBeClickable(checkoutPage.getBtnCompleteOrder()));
            await checkoutPage.clickBtnCompleteOrder();
            await browser.wait(expectedConditions.presenceOf(successPage.getSuccessMessage()));
            expect(successPage.getSuccessMessage().innerHTML).toEqual('You have successfully placed an order!');
            done();
        })
        it('after, it should go back to the main page', async(done)=>{
            await browser.wait(expectedConditions.elementToBeClickable(successPage.getContinueShoppingBtn()));
            await successPage.clickContinueShoppingBtn();
            await browser.wait(expectedConditions.presenceOf(mainPage.getPageTitle()));
            expect(mainPage.getPageTitle()).toEqual('Atsea Shop');
            done();
        })
        it('it should log out', async (done) => {
            await browser.wait(expectedConditions.presenceOf(mainPage.getWelcomeMessage()));
            await browser.wait(expectedConditions.elementToBeClickable(mainPage.getBtnSignOut()));
            await mainPage.clickBtnSignOut();
            await browser.wait(expectedConditions.presenceOf(mainPage.getBtnCreateUser()));
            expect(mainPage.getBtnCreateUser().innerText).toEqual('Create User');
            done();
        })
    });
});
