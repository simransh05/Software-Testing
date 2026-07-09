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
    select :Locator
    addInputFields : Locator
    saveBtn : Locator
    selectempName : Locator
    deleteBtn  :Locator
    editBtn : Locator
    confirmBtn :Locator
    pageLoad  : Locator
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
        this.select = page.locator('.oxd-select-text--after')
        this.addInputFields = page.getByRole('textbox');
        this.saveBtn = page.locator('.orangehrm-left-space')
        this.selectempName = page.locator('.oxd-autocomplete-option');
        this.deleteBtn = page.locator('.bi-trash');
        this.editBtn = page.locator('.bi-pencil-fill')
        this.confirmBtn = page.locator('.oxd-button--label-danger');
        this.pageLoad = page.locator('.oxd-table-loader')
    }
}