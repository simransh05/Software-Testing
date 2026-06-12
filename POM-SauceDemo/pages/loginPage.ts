import { Page, Locator, expect } from "@playwright/test";

export class loginPage {
    page: Page
    username: Locator
    password: Locator
    loginBtn : Locator

    constructor(page: Page) {
        this.page = page
        this.username = page.locator('#user-name');
        this.password = page.locator("#password");
        this.loginBtn = page.locator('#login-button')
    }
    async loginUser(username: string, password: string) {
        await this.page.goto('https://www.saucedemo.com/')
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginBtn.click();
    }
    async loginVerify() {
        await expect(this.page).toHaveURL(/inventory.html/)
    }
}