import { Locator, Page } from "playwright/test";

export class employeeSelectors {
    saveAndSearchBtn: Locator
    resetBtn: Locator
    toastMsg: Locator
    tableValue: Locator
    option: Locator
    constructor(private page: Page) {
        this.saveAndSearchBtn = page.locator('.orangehrm-left-space')
        this.resetBtn = page.locator('.oxd-button--ghost');
        this.toastMsg = page.locator('#oxd-toaster_1');
        this.tableValue = page.locator('.oxd-table-body .oxd-table-row--with-border')
        this.option = page.getByRole('option');
    }
    inputFullName(type: string): Locator {
        return this.page.getByPlaceholder(`${type} Name`)
    }
    filterGroup(name: string): Locator {
        return this.page.locator('.oxd-input-group').filter({ hasText: name })
    }
}