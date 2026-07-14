import { Page, Locator } from "playwright/test";

export class mainSelectors {
    page: Page
    pageLoad: Locator
    saveBtn: Locator
    confirmBtn: Locator
    numberOfRecords: Locator
    inputField: Locator
    addBtn: Locator
    constructor(page: Page) {
        this.page = page
        this.addBtn = page.locator('.oxd-button--medium');
        this.numberOfRecords = page.locator('.orangehrm-vertical-padding')
        this.confirmBtn = page.locator('.oxd-button--label-danger')
        this.pageLoad = page.locator('.oxd-table-loader')
        this.saveBtn = page.locator('.orangehrm-left-space')
        this.inputField = page.locator('.oxd-form-row .oxd-input')

    }
    row(name: string): Locator {
        return this.page.locator('.oxd-table-row').filter({ hasText: name });
    }

    deleteBtn(name: string): Locator {
        return this.row(name).locator('.bi-trash');
    }

    editBtn(name: string): Locator {
        return this.row(name).locator('.bi-pencil-fill');
    }
}