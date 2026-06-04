import selectors from "../selectors/selectors";
import { Page, Locator, expect } from '@playwright/test'
export class loginPage {
    page: Page
    userName: Locator
    password: Locator
    loginBtn: Locator

    constructor(page: Page) {
        this.page = page;
        this.userName = page.locator(selectors.userName);
        this.password = page.locator(selectors.password);
        this.loginBtn = page.locator(selectors.loginBtn)
    }

    async login(name: string, password: string) {
        await this.page.goto('https://demoqa.com/login');
        await this.userName.fill(name);
        await this.password.fill(password);
        await this.loginBtn.click();
        await expect(this.page).toHaveURL(/profile/);
    }
}

