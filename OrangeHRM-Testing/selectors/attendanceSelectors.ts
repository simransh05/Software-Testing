import { Locator, Page } from "playwright/test";

export class attendanceSelectors {
    punchBtn: Locator
    description: Locator
    pageLoad :Locator
    constructor(private page: Page) {
        this.punchBtn = page.locator('.orangehrm-left-space');
        this.description = page.locator('.oxd-textarea')
        this.pageLoad = page.locator('.oxd-table-loader')
    }

    row(name: string): Locator {
        return this.page.getByRole('row', { name })
    }

    updateBtn(name: string): Locator {
        return this.row(name).locator('.bi-pencil-fill')
    }
}