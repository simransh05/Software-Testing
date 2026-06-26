import { Page, Locator } from "playwright/test"

export class loginSelector {
    page: Page
    username: Locator
    password: Locator
    loginBtn: Locator
    constructor(page: Page) {
        this.page = page
        this.username = page.locator('')
        this.password = page.locator('')
        this.loginBtn = page.locator('')
    }
}