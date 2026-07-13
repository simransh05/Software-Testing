import { Page, Locator } from "playwright/test";

export class mainSelectors {
    page: Page
    pageLoad: Locator
    saveBtn: Locator
    confirmBtn: Locator
    numberOfRecords: Locator
    constructor(page: Page) {
        this.page = page
        this.numberOfRecords = page.locator('.orangehrm-vertical-padding')
        this.confirmBtn = page.locator('.oxd-button--label-danger')
        this.pageLoad = page.locator('.oxd-table-loader')
        this.saveBtn = page.locator('.orangehrm-left-space')
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