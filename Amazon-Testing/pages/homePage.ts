import { expect, Page, Locator } from "@playwright/test"
import amazon from "../selectors/amazonSelectors"
export class homePage {
    page: Page
    searchBox: Locator
    searchItem: Locator
    TextContent: Locator
    addToCartBtn: Locator
    addBtn: Locator
    menuCount: Locator
    confirmModal: Locator
    constructor(page: Page) {
        this.page = page
        this.searchBox = page.locator(amazon.searchBox);
        this.searchItem = page.getByRole("row");
        this.TextContent = page.locator(amazon.verifySearchOutputText);
        this.addToCartBtn = page.getByLabel('Add to cart')
        this.addBtn = page.locator('.a-row.a-size-medium button')
        this.menuCount = page.locator('#nav-cart-count')
        this.confirmModal = page.locator('.a-popover-modal');
    }
    async goToHome() {
        await this.page.goto('https://www.amazon.in/')
    }
    async searchAndFilterCheck(value: string) {
        await this.page.waitForLoadState()
        await this.searchBox.first().click();
        await expect(this.searchBox.first()).toHaveAttribute('aria-expanded', 'true', { timeout: 10000 });
        await this.searchBox.pressSequentially(value);
        await this.searchItem.first().click();
        await this.page.waitForLoadState();
        await expect(this.page).toHaveURL(/shoes/)
        await expect(this.TextContent).toContainText('1-48 of over');
    }

    async addToCart() {
        await this.addToCartBtn.click();
        expect(this.confirmModal).toHaveAttribute('aria-modal', 'true');
        await this.addBtn.first().click();
    }

    async cartCountMoreThan0() {
        const count = await this.menuCount.textContent();
        console.log(count);
        expect(count).toBeGreaterThan(0);
    }
}