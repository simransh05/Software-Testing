import { Locator, Page } from "playwright/test"

export class jobSelectors {
    page: Page
    addBtn: Locator
    numberOfRecords: Locator
    inputField: Locator
    saveBtn: Locator
    description: Locator
    pageLoad: Locator
    constructor(page: Page) {
        this.page = page
        this.addBtn = page.locator('.oxd-button--medium');
        this.numberOfRecords = page.locator('.orangehrm-vertical-padding')
        this.inputField = page.locator('.oxd-form-row .oxd-input')
        this.saveBtn = page.locator('.orangehrm-left-space')
        this.description = page.getByPlaceholder('Type description here')
        this.pageLoad = page.locator('.oxd-table-loader')
    }

    row(name: string): Locator {
        return this.page.locator('.oxd-table-row').filter({ hasText: name });
    }

    editBtn(name: string): Locator {
        return this.row(name).locator('.bi-pencil-fill');
    }
}