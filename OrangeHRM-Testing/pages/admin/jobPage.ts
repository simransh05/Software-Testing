import { expect, Page } from "playwright/test";
import { jobSelectors } from "../../selectors/admin/jobSelectors";

export class jobPage {
    page: Page
    jobs: jobSelectors
    constructor(page: Page) {
        this.page = page;
        this.jobs = new jobSelectors(page);
    }

    async addNewPayGradesAndVerify(name: string, url: string) {
        const before = await this.jobs.numberOfRecords.textContent();
        const beforeNum = before?.match(/\d+/)![0]
        await this.jobs.addBtn.click();
        await expect(this.jobs.pageLoad).toBeHidden({ timeout: 20_000 })
        await this.jobs.inputField.fill(name);
        await this.jobs.saveBtn.click();
        console.log(await this.jobs.inputField.inputValue())
        expect(await this.jobs.inputField.inputValue()).toBe(name);
        await this.page.waitForLoadState('load', { timeout: 60_000 })
        await expect(this.jobs.pageLoad).toBeHidden({ timeout: 20_000 })
        console.log('visible', await this.jobs.pageLoad.isVisible())
        await this.page.goto(url);
        await expect(this.jobs.pageLoad).toBeHidden({ timeout: 20_000 })
        await this.page.waitForLoadState();
        const after = await this.jobs.numberOfRecords.textContent()
        const afterNum = after?.match(/\d+/)![0]
        console.log('here', beforeNum, afterNum);
        expect(Number(afterNum)).toBeGreaterThan(Number(beforeNum));
    }

    async updatePayGradesAndVerify(name: string, update: string, url: string) {
        // find by name in the list click the edit btn either name update or price 
        this.page.waitForLoadState('load', { timeout: 60_000 })
        await expect(this.jobs.pageLoad).toBeHidden({ timeout: 20_000 })
        await this.jobs.editBtn(name).click();
        await expect(this.jobs.pageLoad).toBeHidden({ timeout: 20_000 })
        await expect(this.jobs.inputField.first()).toBeVisible({ timeout: 20_000 })
        await this.page.waitForTimeout(1000);
        await this.jobs.inputField.first().fill(update);
        expect(await this.jobs.inputField.first().inputValue()).toBe(update);
        await this.jobs.saveBtn.click();
        await expect(this.jobs.pageLoad).toBeHidden({ timeout: 15_000 })
        await this.page.goto(url);
    }

}