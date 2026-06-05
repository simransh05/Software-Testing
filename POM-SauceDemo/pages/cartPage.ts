// nevigate to cart check cart item 
// check cart have item 
// remove btn 
// proceed fill data and confirm show show the confirm
import { Page, expect, Locator } from '@playwright/test';
import demoSelectors from '../selectors/demoSelectors';
export class cartPage {
    page: Page
    cartLink: Locator
    totalCartItem: Locator
    checkout: Locator
    firstName: Locator
    lastName: Locator
    postalCode: Locator
    continue: Locator
    constructor(page: Page) {
        this.page = page
        this.cartLink = page.locator(demoSelectors.cartLink);
        this.totalCartItem = page.locator(demoSelectors.cartItems);
        this.checkout = page.locator(demoSelectors.checkout);
        this.firstName = page.locator(demoSelectors.checkoutFirstName);
        this.lastName = page.locator(demoSelectors.checkoutLastName);
        this.postalCode = page.locator(demoSelectors.postalCode)
        this.continue = page.locator(demoSelectors.checkoutContinue);
    }

    async gotoCartAndVerifyReach() {
        await this.cartLink.click();
        await expect(this.page).toHaveURL(/cart/)
    }
    // cart count and cart item length same 
    // checkout 
    async doCheckoutAndVerifyPage() {
        await this.checkout.click();
        await expect(this.page).toHaveURL(/checkout-step-one/)
    }
    // fill form 
    async fillCheckoutInfoAndVerifyReach(name: string, surname: string, code: number) {
        await this.firstName.fill(name);
        await this.lastName.fill(surname);
        await this.postalCode.fill(String(code));
        await this.continue.click();
        await expect(this.page).toHaveURL(/checkout-step-two/)
    }
    // continue 
    // confirm message 
}