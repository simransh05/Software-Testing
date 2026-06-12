// nevigate to cart check cart item 
// check cart have item 
// remove btn 
// proceed fill data and confirm show show the confirm
import { Page, expect, Locator } from '@playwright/test';
import { cartSelector } from '../selectors/cartSelector';
export class cartPage {
    page: Page
    cartSelector: cartSelector
    constructor(page: Page) {
        this.page = page;
        this.cartSelector = new cartSelector(page);

    }

    async gotoCartAndVerifyReach() {
        await this.cartSelector.cartLink.click();
        await expect(this.page).toHaveURL(/cart/)
    }
    // cart count and cart item length same 
    // checkout 
    async doCheckoutAndVerifyPage() {
        await this.cartSelector.checkout.click();
        await expect(this.page).toHaveURL(/checkout-step-one/)
    }
    // fill form 
    async fillCheckoutInfoAndVerifyReach(name: string, surname: string, code: number) {
        await this.cartSelector.firstName.fill(name);
        await this.cartSelector.lastName.fill(surname);
        await this.cartSelector.postalCode.fill(String(code));
        await this.cartSelector.continue.click();
        await expect(this.page).toHaveURL(/checkout-step-two/)
    }
    // continue 
    async finishTheProcessAndVerify() {
        await this.cartSelector.finishBtn.click()
        await expect(this.cartSelector.textVerify).toHaveText('Thank you for your order!')
        await expect(this.page).toHaveURL(/checkout-complete/)
    }
    async goBackHome() {
        await this.cartSelector.backHome.click();
        await expect(this.page).toHaveURL(/inventory/)
    }
}