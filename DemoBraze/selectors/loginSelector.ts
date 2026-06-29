import { Page, Locator } from "playwright/test"

export class loginSelector {
    page: Page
    loginModalOpen: Locator
    loginModal: Locator
    username: Locator
    password: Locator
    loginBtn: Locator
    logoutBtn: Locator
    constructor(page: Page) {
        this.page = page
        this.loginModalOpen = page.locator('#login2');
        this.loginModal = page.locator('#logInModal');
        this.username = page.locator('#loginusername')
        this.password = page.locator('#loginpassword')
        this.loginBtn = page.locator('.btn.btn-primary')
        this.logoutBtn = page.locator('#logout2')
    }
}