import { Locator, Page } from "playwright/test";

export class homeSelector {
    page: Page
    card: Locator
    addBtn: Locator
    constructor(page: Page) {
        this.page = page
        this.card = page.locator('.card');
        this.addBtn = page.locator('.row .btn')
    }

}