import { Locator, Page } from "playwright/test";

export class loginSelector {
    page: Page
    username: Locator
    password: Locator
    loginBtn: Locator
    alertMessage: Locator
    requiredField: Locator
    constructor(page: Page) {
        this.page = page
        this.username = page.getByPlaceholder('Username');
        this.password = page.getByPlaceholder('Password');
        this.loginBtn = page.locator('.oxd-button');
        this.alertMessage = page.locator('.oxd-alert-content')
        this.requiredField = page.locator('.oxd-input-field-error-message')
    }
}