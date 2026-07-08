import { expect, Page } from "playwright/test";
import { userManagementSelectors } from "../../selectors/admin/userManagementSelectors";
import { logger } from "../../logs/logger";
import { data, msg } from "../../data/userData";

export class userManagementPage {
    page: Page
    userMgt: userManagementSelectors
    constructor(page: Page) {
        this.page = page;
        this.userMgt = new userManagementSelectors(page);
    }

    async addNewUserAndVerify() {
        // add click then fill data
        // save
        // search filter and get the value
    }

    async conditionForSearch() {
        const toast = await this.userMgt.toastMsg.isVisible();
        console.log('toast', toast);
        if (toast) {
            expect(this.userMgt.toastMsg.innerText()).toBe(msg.toastMsg)
        }
        else {
            await expect(this.userMgt.tableValue.first()).toBeVisible();
        }
    }

    async filterSystemUserByUsernameAndVerify() {
        await this.userMgt.username.fill(data.AddUser.validUserInfo.username);
        await this.userMgt.searchBtn.click();
        await this.conditionForSearch();
    }

    async filterSystemUserByRoleAndVerify() {
        await this.userMgt.openSelect.first().click();
        await this.userMgt.option1.nth(1).click();
        await this.userMgt.searchBtn.click();
        await this.conditionForSearch();
    }
    async filterSystemUserByEmpNameAndVerify() {
        await this.userMgt.employeeName.fill(data.AddUser.validUserInfo.empName);
        await this.userMgt.searchBtn.click();
        await this.conditionForSearch();
    }
    async filterSystemUserByStatus() {
        await this.userMgt.openSelect.nth(1).click();
        await this.userMgt.option1.nth(1).click();
        await this.userMgt.searchBtn.click();
        await this.conditionForSearch();
    }

    async resetFilterAndVerify() {
        await this.userMgt.resetBtn.click();
        expect(await this.userMgt.employeeName.inputValue()).toBe('');
        expect(await this.userMgt.username.inputValue()).toBe('')
    }
}