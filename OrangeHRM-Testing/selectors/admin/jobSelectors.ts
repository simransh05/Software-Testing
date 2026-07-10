import { Locator, Page } from "playwright/test"

export class jobSelectors {
    page: Page
    addBtn: Locator
    numberOfRecords: Locator
    jobTitle: Locator
    saveBtn: Locator
    deleteBtn: Locator
    editBtn: Locator
    description: Locator
    pageLoad:Locator
    confirmBtn :Locator
    constructor(page: Page) {
        this.page = page
        this.addBtn = page.locator('.oxd-button--medium');
        this.numberOfRecords = page.locator('.orangehrm-vertical-padding')
        this.jobTitle = page.locator('.oxd-form-row .oxd-input')
        this.saveBtn = page.locator('.orangehrm-left-space')
        this.deleteBtn = page.locator('.oxd-table-card .bi-trash')
        this.editBtn = page.locator('.oxd-table-card .bi-pencil-fill')
        this.description = page.getByPlaceholder('Type description here')
        this.pageLoad = page.locator('.oxd-table-loader')
        this.confirmBtn = page.locator('.oxd-button--label-danger')
    }

    row(name: string): Locator {
        return this.page.getByRole('row').getByText(name)
    }
}