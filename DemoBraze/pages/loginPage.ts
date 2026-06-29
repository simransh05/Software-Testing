import { expect, Page } from "playwright/test";
import { loginSelector } from "../selectors/loginSelector";
import { messages, userInfo } from "../Data/demoBrazeData";

export class loginPage {
    page: Page
    loginSelector: loginSelector
    constructor(page: Page) {
        this.page = page;
        this.loginSelector = new loginSelector(page);
    }

    async validUserLoginAndVerify() {
        // #logInModal -> modal open -> show class 
        this.page.on('dialog', async dialog => {
            await dialog.accept();
        })
        await this.loginSelector.loginModalOpen.click();
        expect(this.loginSelector.loginModal).toContainClass('show', { timeout: 15_000 });
        console.log(userInfo.validLoginUser.username, userInfo.validLoginUser.password)
        console.log(await this.loginSelector.username.getAttribute('type'))
        await this.loginSelector.username.fill(userInfo.validLoginUser.username);
        await this.loginSelector.password.fill(userInfo.validLoginUser.password);
        await this.loginSelector.loginBtn.nth(2).click();
        await expect(this.loginSelector.logoutBtn).toBeVisible({ timeout: 15_000 });
    }

    async invalidUserLoginAndVerify() {
        for (let user of userInfo.invalidLoginUser) {
            await this.loginSelector.username.fill(user.username);
            await this.loginSelector.password.fill(user.password);
        }
    }

}