import { expect, Page } from "playwright/test";
import { jobSelectors } from "../../selectors/admin/jobSelectors";

export class jobPage {
    page: Page
    jobs: jobSelectors
    constructor(page: Page) {
        this.page = page;
        this.jobs = new jobSelectors(page);
    }

    async addNewJobTitleAndVerify(name: string, url: string) {
        const before = await this.jobs.numberOfRecords.textContent();
        const beforeNum = before?.match(/\d+/)![0]
        await this.jobs.addBtn.click();
        await this.jobs.inputField.fill(name);
        await this.jobs.saveBtn.click();
        await expect(this.page).toHaveURL(new RegExp(url), { timeout: 15_000 });
        const after = await this.jobs.numberOfRecords.textContent()
        const afterNum = after?.match(/\d+/)![0]
        console.log('here', beforeNum, afterNum);
        expect(Number(afterNum)).toBeGreaterThan(Number(beforeNum));
    }

    async addNewPayGrades(name: string, url: string) {
        const before = await this.jobs.numberOfRecords.textContent();
        const beforeNum = before?.match(/\d+/)![0]
        await this.jobs.addBtn.click();
        await this.jobs.inputField.fill(name);
        await this.jobs.saveBtn.click();
        await expect(this.page).toHaveURL(new RegExp(url), { timeout: 15_000 });
        const after = await this.jobs.numberOfRecords.textContent()
        const afterNum = after?.match(/\d+/)![0]
        console.log('here', beforeNum, afterNum);
        expect(Number(afterNum)).toBeGreaterThan(Number(beforeNum));
    }

    async addNewEmployementStatus(name: string, url: string) {
        const before = await this.jobs.numberOfRecords.textContent();
        const beforeNum = before?.match(/\d+/)![0]
        await this.jobs.addBtn.click();
        await this.jobs.inputField.fill(name);
        await this.jobs.saveBtn.click();
        await expect(this.page).toHaveURL(new RegExp(url), { timeout: 15_000 });
        const after = await this.jobs.numberOfRecords.textContent()
        const afterNum = after?.match(/\d+/)![0]
        console.log('here', beforeNum, afterNum);
        expect(Number(afterNum)).toBeGreaterThan(Number(beforeNum));
    }

}