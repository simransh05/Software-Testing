import { Page, Locator } from "playwright/test";

export class adminSelectors {
    page: Page
    container: Locator
    constructor(page: Page) {
        this.page = page
        this.container = page.locator('.orangehrm-container')
    }
}