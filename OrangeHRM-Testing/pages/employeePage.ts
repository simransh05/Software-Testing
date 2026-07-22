import { expect, Page } from "playwright/test";
import { employeeSelectors } from "../selectors/employeeSelectors";
import { msg } from "../data/userData";

export class employeePage {
    emp: employeeSelectors
    constructor(private page: Page) {
        this.emp = new employeeSelectors(page);
    }

    async addEmployeeAndVerify(url: string, first: string, middle?: string, last?: string) {
        if (first) await this.emp.inputFullName('First').fill(first);
        if (middle) await this.emp.inputFullName('Middle').fill(middle);
        if (last) await this.emp.inputFullName('Last').fill(last);
        await this.emp.saveAndSearchBtn.click();
        await expect(this.page).toHaveURL(new RegExp(url), { timeout: 30_000 })
    }

    async conditionForSearch() {
        const toast = await this.emp.toastMsg.isVisible();
        if (toast) {
            expect(await this.emp.toastMsg.innerText()).toBe(msg.toastMsg)
        }
        else {
            await expect(this.emp.tableValue.first()).toBeVisible();
        }
    }

    async filterBasedOnTypeAndVerify(type: string, value: string) {
        await this.page.waitForLoadState('load', { timeout: 40_000 })
        const typeOf = await this.emp.getFilterType(type);
        console.log(typeOf)
        if (typeOf === 'input') {
            await this.emp.inputField(type).fill(value);
        } else {
            await this.emp.select(type).click();
            await this.emp.option(value).click();
        }
        await this.emp.saveAndSearchBtn.click();
        await this.conditionForSearch();
        await this.emp.resetBtn.click();
    }
}