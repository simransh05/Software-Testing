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
        await this.jobs.jobTitle.fill(name);
        await this.jobs.saveBtn.click();
        await expect(this.page).toHaveURL(new RegExp(url));
        const after = await this.jobs.numberOfRecords.textContent()
        const afterNum = after?.match(/\d+/)![0]
        console.log('here', beforeNum, afterNum);
        expect(Number(afterNum)).toBeGreaterThan(Number(beforeNum));
    }

    async updateJobTitleAndVerify(des: string) {
        await this.jobs.editBtn.first().click();
        await this.jobs.description.fill(des);
        await this.jobs.saveBtn.click();
        await expect(this.jobs.pageLoad).toBeHidden({ timeout: 15_000 })
        await expect(this.page).toHaveURL(/viewJobTitleList/, { timeout: 20000 })
    }

    async deleteJobAndVerify() {
        const before = await this.jobs.numberOfRecords.textContent();
        const beforeNum = before?.match(/\d+/)![0]
        await this.jobs.deleteBtn.first().click();
        await expect(this.jobs.confirmBtn).toBeVisible();
        await this.jobs.confirmBtn.click();
        await expect(this.jobs.pageLoad).toBeHidden({ timeout: 15_000 })
        const after = await this.jobs.numberOfRecords.textContent()
        const afterNum = after?.match(/\d+/)![0]
        console.log('here', beforeNum, afterNum);
        expect(Number(beforeNum)).toBeGreaterThan(Number(afterNum));
    }
}