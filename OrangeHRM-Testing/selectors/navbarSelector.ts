import { Page, Locator } from "playwright/test"

export class navbarSelector {
    page: Page
    menu: Locator
    allMenuItem: Locator
    searchInput :Locator
    constructor(page: Page) {
        this.page = page
        this.menu = page.locator('ul.oxd-main-menu');
        this.allMenuItem = page.locator('li.oxd-main-menu-item-wrapper')
        this.searchInput = page.getByPlaceholder('Search')
    }
}