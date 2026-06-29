import { Page, Locator } from "playwright/test"

export class signupSelector {
    page: Page
    signupModalOpen: Locator
    signupModal: Locator
    username: Locator
    password: Locator
    signupBtn: Locator
    constructor(page: Page) {
        this.page = page
        this.signupModalOpen = page.locator('#signin2');
        this.signupModal = page.locator('#signInModal');
        this.username = page.locator('#sign-username')
        this.password = page.locator('#sign-password')
        this.signupBtn = page.locator('.btn.btn-primary')
    }
}