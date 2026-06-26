import { Page, Locator } from "playwright/test"

export class signupSelector {
    page: Page
    username: Locator
    password: Locator
    singupBtn: Locator
    constructor(page: Page) {
        this.page = page
        this.username = page.locator('')
        this.password = page.locator('')
        this.singupBtn = page.locator('')
    }
}