import { expect, Page } from "playwright/test";
import { loginSelector } from "../../selectors/loginSelectors";
import { data, url } from "../../data/userData";
import { logger } from "../../logs/logger";

export class loginPage {
    page: Page
    loginSelector: loginSelector
    constructor(page: Page) {
        this.page = page
        this.loginSelector = new loginSelector(page);
    }

    async gotoOrangeHRMLogin() {
        await this.page.goto(url.loginPageURL)
    }

    async loginValidUser() {
        logger.info(`Login with ${data.loginInfo.validUser.username} and ${data.loginInfo.validUser.password}`)
        await this.loginSelector.username.pressSequentially(data.loginInfo.validUser.username);
        await this.loginSelector.password.pressSequentially(data.loginInfo.validUser.password);
        await this.loginSelector.loginBtn.click();
        await this.page.waitForLoadState('load', { timeout: 60_000 })
        await expect(this.page).toHaveURL(/dashboard/)
    }

    async loginForInvalidUser() {
        for (let user of data.loginInfo.invalidUser) {
            logger.info(`Login with ${user.username} and ${user.password}`)
            await this.loginSelector.username.pressSequentially(user.username);
            await this.loginSelector.password.pressSequentially(user.password);
            await this.loginSelector.loginBtn.click();
            switch (user.dataType) {
                case 'invalidUsername':
                    await expect(this.loginSelector.alertMessage).toBeVisible();
                    break;
                case 'invalidPassword':
                    await expect(this.loginSelector.alertMessage).toBeVisible();
                    break;
                case 'emptyUsername':
                    await expect(this.loginSelector.requiredField).toBeVisible();
                    break;
                case 'emptyPassword':
                    await expect(this.loginSelector.requiredField).toBeVisible();
                    break;
                case 'bothInvalid':
                    await expect(this.loginSelector.alertMessage).toBeVisible();
                    break;
                case 'bothEmpty':
                    await expect(this.loginSelector.requiredField.first()).toBeVisible();
                    await expect(this.loginSelector.requiredField.last()).toBeVisible();
                    break;
                default:
                    break;
            }
            await this.page.reload();
        }
    }
}