import { expect, Page, Locator } from "@playwright/test"
import { homeSelector } from "../selectors/homeSelector"
export class homePage {
    page: Page
    homeSelector: homeSelector
    constructor(page: Page) {
        this.page = page
        this.homeSelector = new homeSelector(page);
    }
    async goToHomeAndLoad() {
        await this.page.goto('https://www.amazon.in/');
        await expect(this.page).toHaveURL(/amazon/)
    }

    async searchAndNavigateCheck(value: string) {
        await this.homeSelector.searchBox.first().click();
        await expect(this.homeSelector.searchBox.first()).toHaveAttribute('aria-expanded', 'true', { timeout: 10000 });
        await this.homeSelector.searchBox.pressSequentially(value);
        await this.page.keyboard.down('Enter');
        // await this.homeSelector.searchItem.first().click();
        await expect(this.page).toHaveURL(/shoes/);
        await expect(this.homeSelector.TextContent).toContainText('results for', { timeout: 10000 });
    }

    async addToCart() {
        await this.page.waitForLoadState('load', { timeout: 120000 });
        // console.log(await this.homeSelector.addToCartBtn.first().getAttribute('type'))
        await this.homeSelector.addToCartBtn.nth(0).click({ timeout: 10000 });
        // console.log(await this.homeSelector.addToCartBtn.first().textContent())
        await expect(this.homeSelector.confirmModal).toBeVisible();
        await this.homeSelector.addBtn.first().click();
        await expect(this.homeSelector.confirmModal).not.toBeVisible();
    }

    async cartCountMoreThan0() {
        await expect(this.homeSelector.menuCount).toHaveText('1');
    }

    async gotoCartAndVerifyReach() {
        await this.homeSelector.navCart.click();
        await expect(this.page).toHaveURL(/cart/);
    }

    async verifyCartItem() {
        // console.log(await this.homeSelector.cartItem.textContent())
        await expect(this.homeSelector.cartItem).toBeVisible();
    }
}