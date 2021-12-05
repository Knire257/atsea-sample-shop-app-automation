import { browser } from 'protractor';
import { SignInBtnMainStore, SignInFormModalPage, AddItemAndGoToCart, CheckoutPage, SuccessPage } from '../../src/ui/index'

describe('Buy an item', () => {
    const signInBtnMainStore: SignInBtnMainStore = new SignInBtnMainStore();
    const signInFormModalPage: SignInFormModalPage = new SignInFormModalPage();
    const addItemAndGoToCart: AddItemAndGoToCart = new AddItemAndGoToCart();
    const checkoutPage: CheckoutPage = new CheckoutPage();
    const succesPage: SuccessPage = new SuccessPage();

    describe('then should be bought an item', async () => {
        describe('then should get the page', () => {
            browser.get('http://localhost:8080/');
        });
        describe('then should access to the sign in menu', () => {
            signInBtnMainStore.clickSignInBtn();
        });
        describe('then should fill the sign in form', () => {
            signInFormModalPage.sendUserData('a','a');
        });
        describe('then should add an item and go to checkout', () => {
            addItemAndGoToCart.ClickAddBtn();
            addItemAndGoToCart.ClickCheckoutBtn();
        });
        describe('then should click button to complete order', () => {
            checkoutPage.clickBtnCompleteOrder();
        });
        describe('then should go back to the main page after success', () => {
            succesPage.clickContinueShoppingBtn();
        });
    });
});