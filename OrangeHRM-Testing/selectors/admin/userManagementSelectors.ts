import { Page, Locator } from "playwright/test";

export class userManagementSelectors {
    page: Page
    container: Locator // data container
    resetBtn: Locator
    employeeName: Locator
    username: Locator
    openSelect: Locator
    selectedValue: Locator
    toastMsg: Locator
    tableValue: Locator
    searchBtn: Locator
    addBtn: Locator
    option1:Locator
    constructor(page: Page) {
        this.page = page
        this.container = page.locator('oxd-table-body')
        this.resetBtn = page.locator('.oxd-button--ghost');
        this.employeeName = page.getByPlaceholder('Type for hints...')
        this.username = page.locator('.oxd-form-row .oxd-input')
        this.openSelect = page.locator('.oxd-select-text--arrow') // 2
        this.selectedValue = page.locator('.oxd-select-text-input') // 2
        this.toastMsg = page.locator('#oxd-toaster_1');
        this.tableValue = page.locator('.oxd-table-cell'); // cell values
        this.searchBtn = page.locator('.orangehrm-left-space')
        this.addBtn = page.locator('.oxd-button-icon');
        this.option1 = page.locator('.oxd-select-option')
    }
}