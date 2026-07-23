import { Locator, Page } from "playwright/test";

export class leaveSelectors {
    applyAndSearchBtn: Locator
    openSelect: Locator
    date: Locator
    comment: Locator
    toastMsg: Locator
    pageLoad:Locator
    constructor(private page: Page) {
        // idea is to add 3 things and 1 save btn
        this.applyAndSearchBtn = page.locator('.orangehrm-left-space')
        this.openSelect = page.locator('.oxd-select-text')
        this.date = page.locator('.oxd-grid-item .oxd-input')
        this.comment = page.locator('.oxd-textarea')
        this.toastMsg = page.locator('#oxd-toaster_1 .oxd-text--toast-message');
        this.pageLoad = page.locator('.oxd-table-loader')
    }

    leaveType(name: string): Locator {
        return this.page.getByRole('option').filter({ hasText: name })
    }
    row(name: string): Locator {
        return this.page.getByRole('row', { name }).filter({ hasText: name })
    }
}