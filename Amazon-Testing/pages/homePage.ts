import { expect, Page, Locator } from "@playwright/test"
import amazon from "../selectors/amazonSelectors"
export class homePage {
    page: Page
    searchBox: Locator
    searchItem: Locator
    entirePage: Locator
    constructor(page: Page) {
        this.page = page
        this.searchBox = page.locator(amazon.searchBox);
        this.searchItem = page.getByRole("row");
        this.entirePage = page.locator('//*')
    }
    async goToHome() {
        await this.page.goto('https://www.amazon.in/')
    }
    async searchAndFilterCheck() {
        await this.searchBox.first().click();
        expect(this.searchBox.first()).toHaveAttribute('aria-expanded', 'true');
        await this.searchBox.pressSequentially("shoes");
        await this.searchItem.first().click();
        expect(this.entirePage).toHaveText('1-48 of over 100,000 results for');
    }
}