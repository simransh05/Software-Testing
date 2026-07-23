import { expect, Page } from "playwright/test";
import { leaveSelectors } from "../../selectors/leaveSelectors";

export class leavePage {
    leave: leaveSelectors
    constructor(page: Page) {
        this.leave = new leaveSelectors(page);
    }
    async addNewLeaveAndVerify(name: string, from: string, comment: string, to?: string) {
        await this.leave.openSelect.first().click();
        await this.leave.leaveType(name).click();
        await this.leave.date.first().fill(from);
        if (to) {
            await this.leave.date.nth(1).clear();
            await this.leave.date.nth(1).fill(to);
        }
        await this.leave.comment.fill(comment);
        await this.leave.applyAndSearchBtn.click();
        await expect(this.leave.toastMsg.first()).toBeVisible({ timeout: 20_000 })
    }

    async VerifyAdd(name: string, comment: string) {
        await this.leave.openSelect.nth(1).click();
        await this.leave.leaveType(name).click();
        await this.leave.applyAndSearchBtn.click();
        await expect(this.leave.pageLoad).toBeHidden({timeout:40_000})
        await expect(this.leave.row(comment)).toBeVisible({ timeout: 20_000 })
    }
}