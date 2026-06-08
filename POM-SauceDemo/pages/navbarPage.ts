// check for logout reset and cart count 
import { Page, Locator, expect } from '@playwright/test'
import demoSelectors from '../selectors/demoSelectors';
export class navbarPage {
    page: Page
    cartCount: Locator
    drawer: Locator
    logoutBtn: Locator
    resetBtn : Locator
    constructor(page: Page) {
        this.page = page;
        this.cartCount = page.locator(demoSelectors.cartCount)
        this.drawer = page.locator(demoSelectors.drawer)
        this.logoutBtn = page.locator(demoSelectors.logoutBtn);
        this.resetBtn = page.locator(demoSelectors.resetBtn);
    }

    async openDrawer() {
        const area = await this.drawer.getAttribute('aria-hidden');
        if (area) {
            this.drawer.click();
        }
    }
    async logoutAndverify() {
        await this.openDrawer();
        await this.logoutBtn.click();
        await expect(this.page).toHaveURL('https://www.saucedemo.com/')
        // open drawer check drawer open then click and check if navigate to 
    }

    async checkCartCountToBe0() {
        // console.log(this.cartCount)
        await expect(this.cartCount).not.toBeVisible()
    }

    async checkCartCountMoreThan0() {
        const value = await this.cartCount.textContent()
        // console.log('value.', value)
        await expect(Number(value)).toBeGreaterThan(0);
        // check for cart count more than 0
    }

    async checkResetAppState() {
        // add func call then count check then call this function now check is count 0
        await this.resetBtn.click();
        await this.checkCartCountToBe0();
    }
}