// idea is to clock in first then wait for 2-3 min
// then close out with note then goto the attence log check is it added ro not 

import { expect, Page } from "playwright/test";
import { attendanceSelectors } from "../../selectors/attendanceSelectors";
import { url } from "../../data/userData";

export class attendancePage {
    attend: attendanceSelectors
    constructor(private page: Page) {
        this.attend = new attendanceSelectors(page);
    }

    async clockInAndClockOut(comment: string, propUrl: string) {
        await this.page.waitForLoadState('load', { timeout: 50_000 });
        if (this.page.url() !== url.punchIn) {
            await this.attend.punchBtn.click();
            await expect(this.page).toHaveURL(url.punchIn, { timeout: 40_000 });
            await this.page.waitForLoadState('load', { timeout: 40_000 })
        }
        await expect(this.attend.punchBtn).toBeVisible({ timeout: 30_000 })
        expect(await this.attend.punchBtn.innerText()).toBe('In')
        await expect(this.attend.punchBtn).toBeEnabled()
        await this.attend.punchBtn.click();
        await this.page.waitForLoadState('load', { timeout: 50_000 });
        await expect(this.page).toHaveURL(url.punchOut, { timeout: 40_000 })
        await expect(this.attend.punchBtn).toBeVisible({ timeout: 30_000 })
        expect(await this.attend.punchBtn.innerText()).toBe('Out')
        await this.attend.description.fill(comment);
        await this.attend.punchBtn.click();
        await expect(this.page).toHaveURL(new RegExp(propUrl), { timeout: 30_000 })
    }
    async updateAttendenceAndVerify(name: string, update: string, url: string) {
        await this.attend.updateBtn(name).click();
        await this.page.waitForLoadState('load', { timeout: 50_000 });
        await expect(this.attend.description.nth(1)).toBeEditable({ timeout: 20_000 })
        await expect(this.attend.pageLoad).toBeHidden({ timeout: 20_000 })
        await this.attend.description.nth(1).clear();
        await this.attend.description.nth(1).fill(update);
        console.log(await this.attend.description.nth(1).inputValue())
        await this.attend.punchBtn.click();
        await expect(this.page).toHaveURL(new RegExp(url), { timeout: 40_000 })
    }
}