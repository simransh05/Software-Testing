import { Page, Locator, expect } from "@playwright/test";
import demoSelectors from "../selectors/demoSelectors";

export class loginPage {
    page: Page
    username: Locator
    password: Locator
    loginBtn : Locator

    constructor(page: Page) {
        this.page = page
        this.username = page.locator(demoSelectors.username);
        this.password = page.locator(demoSelectors.password);
        this.loginBtn = page.locator(demoSelectors.loginBtn)
    }
    async login(username: string, password: string) {
        await this.page.goto('https://www.saucedemo.com/')
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginBtn.click();
    }
    async loginVerify() {
        await expect(this.page).toHaveURL(/inventory.html/)
    }
}