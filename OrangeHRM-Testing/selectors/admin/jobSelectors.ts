import { Locator, Page } from "playwright/test"

export class jobSelectors {
    btn: Locator
    constructor(page: Page) {
        this.btn = page.locator('');
    }
}