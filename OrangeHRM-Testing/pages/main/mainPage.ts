import { Page, expect } from "playwright/test";
import { mainSelectors } from "../../selectors/mainSelectors";

// for common function like update delete
export class mainPage {
    page: Page
    main: mainSelectors
    constructor(page: Page) {
        this.page = page
        this.main = new mainSelectors(page);
    }

    async add(name: string, url: string) {
        const before = await this.main.numberOfRecords.textContent();
        const beforeNum = before?.match(/\d+/)![0]
        await this.main.addBtn.click();
        await this.main.inputField.first().fill(name);
        await this.main.saveBtn.click();
        await expect(this.main.pageLoad).toBeHidden({ timeout: 20_000 })
        await expect(this.page).toHaveURL(new RegExp(url), { timeout: 15_000 });
        const after = await this.main.numberOfRecords.textContent()
        const afterNum = after?.match(/\d+/)![0]
        console.log('here', beforeNum, afterNum);
        expect(Number(afterNum)).toBeGreaterThan(Number(beforeNum));
    }

    async update(name: string, url: string, update: string) {
        // name is the filter name
        this.page.waitForLoadState('load', { timeout: 60_000 })
        await expect(this.main.pageLoad).toBeHidden({ timeout: 20_000 })
        await this.main.editBtn(name).click();
        await expect(this.main.pageLoad).toBeHidden({ timeout: 20_000 })
        await expect(this.main.inputField.first()).toBeVisible({ timeout: 20_000 })
        await this.page.waitForTimeout(2000);
        await this.main.inputField.first().fill(update);
        console.log(await this.main.inputField.first().inputValue())
        expect(await this.main.inputField.first().inputValue()).toBe(update);
        await this.main.saveBtn.click();
        await expect(this.main.pageLoad).toBeHidden({ timeout: 15_000 })
        await expect(this.page).toHaveURL(new RegExp(url), { timeout: 20000 })
    }

    async delete(name: string) {
        const before = await this.main.numberOfRecords.textContent();
        const beforeNum = before?.match(/\d+/)![0]
        await this.main.deleteBtn(name).click();
        await expect(this.main.confirmBtn).toBeVisible();
        await this.main.confirmBtn.click();
        await expect(this.main.pageLoad).toBeHidden({ timeout: 15_000 })
        const after = await this.main.numberOfRecords.textContent()
        const afterNum = after?.match(/\d+/)![0]
        console.log('here', beforeNum, afterNum);
        expect(Number(beforeNum)).toBeGreaterThan(Number(afterNum));
    }
}