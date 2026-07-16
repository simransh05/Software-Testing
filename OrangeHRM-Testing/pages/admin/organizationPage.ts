import { expect, Page } from "playwright/test";
import { organizationSelectors } from "../../selectors/admin/organizationSelectors";
import { msg } from "../../data/userData";

export class organizationPage {
    page: Page
    org: organizationSelectors
    constructor(page: Page) {
        this.page = page
        this.org = new organizationSelectors(page);
    }

    async addGeneralInfoAndVerify(value: string) {
        this.org.checkboxEdit.click();
        await expect(this.org.checkboxEdit).toBeChecked();
        await expect(this.org.inputField.nth(3)).toBeEnabled();
        await this.org.inputField.nth(3).waitFor({ state: 'visible' })
        await this.org.inputField.nth(3).pressSequentially(value);
        expect(await this.org.inputField.nth(3).inputValue()).toBe(value);
        await this.org.saveBtn.click();
        await expect(this.org.checkboxEdit).not.toBeChecked();
        await expect(this.org.inputField.nth(3)).toBeDisabled()
    }

    async addLocationAndVerify(name: string, city: string, ctry: string, url: string) {
        await this.org.addBtn.click();
        await this.page.waitForLoadState('load', { timeout: 60_000 });
        await expect(this.org.pageLoad).toBeHidden();
        await this.org.inputField.nth(1).pressSequentially(name);
        await this.org.inputField.nth(2).pressSequentially(city);
        await this.org.selectOpen.click();
        await expect(this.org.optionCountry(ctry)).toBeVisible();
        await this.org.optionCountry(ctry).click();
        await this.org.saveBtn.click();
        await this.page.waitForLoadState('load', { timeout: 60_000 })
        await expect(this.page).toHaveURL(new RegExp(url), { timeout: 20_000 });
    }

    async conditionForSearch() {
        const toast = await this.org.toastMsg.isVisible();
        if (toast) {
            expect(await this.org.toastMsg.innerText()).toBe(msg.toastMsg)
        }
        else {
            await expect(this.org.tableValue.first()).toBeVisible();
        }
    }

    async filterByNameAndVerify(name: string) {
        await this.page.waitForLoadState('load', { timeout: 60_000 })
        await this.org.inputField.nth(1).pressSequentially(name);
        await this.org.searchBtn.click();
        await expect(this.org.pageLoad).toBeHidden();
        await this.conditionForSearch();
    }

    async filterByCityAndVerify(name: string) {
        await this.page.waitForLoadState('load', { timeout: 60_000 })
        await this.org.inputField.nth(2).pressSequentially(name);
        await this.org.searchBtn.click();
        await expect(this.org.pageLoad).toBeHidden();
        await this.conditionForSearch();
    }

    async editLocationAndVerify(name: string, update: string, url: string) {
        // find and edit click then update field
        await this.page.waitForLoadState('load', { timeout: 60_000 })
        await this.org.editBtn(name).click();
        await this.page.waitForLoadState('load', { timeout: 60_000 })
        await expect(this.org.pageLoad).toBeHidden();
        await expect(this.org.inputField.nth(1)).toBeEditable();
        await this.org.inputField.nth(1).clear();
        await this.org.inputField.nth(1).fill(update);
        await this.org.saveBtn.click();
        await this.page.waitForLoadState('load', { timeout: 60_000 })
        await expect(this.page).toHaveURL(new RegExp(url), { timeout: 20_000 });

    }
}