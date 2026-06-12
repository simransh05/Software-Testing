import { expect, Page, Locator } from "@playwright/test"
import { homeSelector } from "../selectors/homeSelector"
export class homePage {
    page: Page
    homeSelector: homeSelector
    constructor(page: Page) {
        this.page = page
        this.homeSelector = new homeSelector(page);
    }
    async goToHome() {
        await this.page.goto('https://www.amazon.in/')
    }

    async searchAndNavigateCheck(value: string) {
        await this.homeSelector.searchBox.first().click();
        await expect(this.homeSelector.searchBox.first()).toHaveAttribute('aria-expanded', 'true', { timeout: 10000 });
        await this.homeSelector.searchBox.pressSequentially(value);
        await this.homeSelector.searchItem.first().click();
        await expect(this.page).toHaveURL(/shoes/)
        await expect(this.homeSelector.TextContent).toContainText('1-48 of over');
    }

    async addToCart() {
        await this.page.waitForLoadState();
        await this.page.waitForTimeout(2000);
        await this.homeSelector.addToCartBtn.click();
        console.log(await this.homeSelector.addToCartBtn.textContent())
        await expect(this.homeSelector.confirmModal).toBeVisible({ timeout: 10000 });
        await this.homeSelector.addBtn.first().click();
    }

    async cartCountMoreThan0() {
        await expect(this.homeSelector.menuCount).toHaveText('1');
    }

    async gotoCartAndVerifyReach() {
        await this.homeSelector.navCart.click();
        await this.page.waitForTimeout(2000);
        await expect(this.page).toHaveURL(/cart/);
    }

    async verifyCartItem() {
        console.log(await this.homeSelector.cartItem.textContent())
        await this.page.waitForTimeout(2000)
        await expect(this.homeSelector.cartItem).toBeVisible();
    }
}