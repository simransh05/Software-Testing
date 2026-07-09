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
        await this.userMgt.addBtn.click();
        await expect(this.page).toHaveURL(/saveSystemUser/)
        await this.userMgt.select.nth(0).click();
        await this.userMgt.option1.nth(1).click();
        await this.userMgt.employeeName.fill(data.AddUser.validUserInfo.empName);
        await this.page.waitForTimeout(5000)
        await expect(this.userMgt.selectempName).toBeVisible({ timeout: 15_000 })
        await this.userMgt.selectempName.click();
        await this.userMgt.select.nth(1).click();
        await this.userMgt.option1.nth(1).click();
        await this.userMgt.addInputFields.nth(2).fill(data.AddUser.validUserInfo.username);
        await this.userMgt.addInputFields.nth(3).fill(data.AddUser.validUserInfo.password);
        await this.userMgt.addInputFields.nth(4).fill(data.AddUser.validUserInfo.confirmPass);
        await this.userMgt.saveBtn.click();
        await expect(this.page).toHaveURL(/viewSystemUsers/)
    }

    async updateTheInfoAndVerify() {
        // find then update any field then check if updated 
        await this.filterSystemUserByEmpNameAndVerify();
        await this.userMgt.editBtn.click();
        await expect(this.page).toHaveURL(/saveSystemUser/);
        await this.userMgt.select.nth(1).click();
        await this.userMgt.option1.nth(2).click();
        await this.userMgt.saveBtn.click();
        await expect(this.page).toHaveURL(/viewSystemUsers/)
    }

    async deleteSysetmUserAndVerify() {
        await this.filterSystemUserByEmpNameAndVerify();
        await this.userMgt.deleteBtn.click();
        await expect(this.userMgt.confirmBtn).toBeVisible();
        await this.userMgt.confirmBtn.click();
        await expect(this.userMgt.confirmBtn).not.toBeVisible();
        // find deleyte modal dlete should have a modal
    }
    async conditionForSearch() {
        const toast = await this.userMgt.toastMsg.isVisible();
        // console.log('toast', toast);
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
        await expect(this.userMgt.pageLoad).toBeHidden({ timeout: 20_000 });
        await this.conditionForSearch();
    }

    async filterSystemUserByRoleAndVerify() {
        await this.userMgt.openSelect.first().click();
        await this.userMgt.option1.nth(1).click();
        await this.userMgt.searchBtn.click();
        await expect(this.userMgt.pageLoad).toBeHidden({ timeout: 20_000 });
        await this.conditionForSearch();
    }
    async filterSystemUserByEmpNameAndVerify() {
        await this.userMgt.employeeName.fill(data.AddUser.validUserInfo.empName);
        await this.page.waitForTimeout(2000)
        await expect(this.userMgt.selectempName).toBeVisible({ timeout: 15_000 })
        await this.userMgt.selectempName.click();
        await this.userMgt.searchBtn.click();
        await expect(this.userMgt.pageLoad).toBeHidden({ timeout: 20_000 });
        await this.conditionForSearch();
    }
    async filterSystemUserByStatus() {
        await this.userMgt.openSelect.nth(1).click();
        await this.userMgt.option1.nth(1).click();
        await this.userMgt.searchBtn.click();
        await expect(this.userMgt.pageLoad).toBeHidden({ timeout: 20_000 });
        await this.conditionForSearch();
    }

    async resetFilterAndVerify() {
        await this.userMgt.resetBtn.click();
        expect(await this.userMgt.employeeName.inputValue()).toBe('');
        expect(await this.userMgt.username.inputValue()).toBe('')
    }
}