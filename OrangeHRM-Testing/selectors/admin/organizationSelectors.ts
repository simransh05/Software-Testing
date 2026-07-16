import { Locator, Page } from "playwright/test";

export class organizationSelectors {
    checkboxEdit: Locator
    saveBtn: Locator
    inputField: Locator
    addBtn: Locator
    pageLoad: Locator
    selectOpen: Locator
    toastMsg: Locator
    searchBtn: Locator
    tableValue: Locator
    constructor(private page: Page) {
        this.checkboxEdit = page.locator('//*[@type="checkbox"]')
        this.saveBtn = page.locator('.orangehrm-left-space')
        this.inputField = page.locator('.oxd-input')
        this.addBtn = page.locator('.orangehrm-header-container .oxd-button--medium')
        this.pageLoad = page.locator('.oxd-table-loader')
        this.selectOpen = page.locator('.oxd-select-text')
        this.toastMsg = page.locator('#oxd-toaster_1');
        this.searchBtn = page.locator('.oxd-form-actions .orangehrm-left-space')
        this.tableValue = page.locator('.oxd-table-body .oxd-table-row--with-border')
    }
    optionCountry(name: string): Locator {
        return this.page.getByRole('option', { name, exact: true });
    }
    row(name: string): Locator {
        return this.page.locator('.oxd-table-row').filter({ hasText: name });
    }
    editBtn(name: string): Locator {
        return this.row(name).locator('.bi-pencil-fill');
    }

}