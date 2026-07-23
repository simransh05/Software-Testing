import { expect, Page } from "playwright/test";
import { employeeSelectors } from "../../selectors/employeeSelectors";
import { msg } from "../../data/userData";

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

    async conditionForSearch(name:string) {
        const toast = await this.emp.toastMsg.first().isVisible();
        console.log(toast);
        if (toast) {
            // await this.page.pause()
            console.log('msg', await this.emp.toastMsg.count())
            expect(await this.emp.toastMsg.first().innerText()).toBe(msg.toastMsg)
        }
        else {
            await expect(this.emp.tableValue(name)).toBeVisible();
        }
    }

    async filterBasedOnTypeAndVerify(type: string, value: string) {
        await this.page.waitForLoadState('load', { timeout: 40_000 })
        await expect(this.emp.resetBtn).toBeVisible({ timeout: 20_000 })
        const typeOf = await this.emp.getFilterType(type);
        // console.log(typeOf)
        if (typeOf === 'input') {
            await this.emp.inputField(type).fill(value);
        } else {
            await this.emp.select(type).click();
            await this.emp.option(value).click();
        }
        await this.emp.saveAndSearchBtn.click();
        await expect(this.emp.pageLoad).toBeHidden({ timeout: 20_000 })
        await this.conditionForSearch(value);
        await this.emp.resetBtn.click();
    }
}