import { Page, Locator } from "playwright/test";

export class userManagementSelectors {
    page: Page
    container: Locator // data container
    resetBtn: Locator
    employeeName: Locator
    username: Locator
    openSelect: Locator
    selectedValue: Locator
    constructor(page: Page) {
        this.page = page
        this.container = page.locator('.orangehrm-container')
        this.resetBtn = page.locator('.oxd-button--ghost');
        this.employeeName = page.getByPlaceholder('Type for hints...')
        this.username = page.locator('.oxd-form-row .oxd-input')
        this.openSelect = page.locator('.oxd-select-text--arrow') // 2
        this.selectedValue = page.locator('.oxd-select-text-input') // 2
    }
}