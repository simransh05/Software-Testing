import { Page } from "playwright/test";
import { loginSelector } from "../selectors/loginSelector";

export class loginPage {
    page: Page
    loginSelector: loginSelector
    constructor(page: Page) {
        this.page = page;
        this.loginSelector = new loginSelector(page);
    }

    async validUserLoginAndVerify() { }

    async invalidUserLoginAndVerify() { }

}