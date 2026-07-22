import { Locator, Page } from "playwright/test";

export class employeeSelectors {
    saveAndSearchBtn: Locator
    resetBtn: Locator
    toastMsg: Locator
    tableValue: Locator
    constructor(private page: Page) {
        this.saveAndSearchBtn = page.locator('.orangehrm-left-space')
        this.resetBtn = page.locator('.oxd-button--ghost');
        this.toastMsg = page.locator('#oxd-toaster_1');
        this.tableValue = page.locator('.oxd-table-body .oxd-table-row--with-border')
    }
    option(name: string): Locator {
        return this.page.getByRole('option', { name: name });
    }
    inputFullName(type: string): Locator {
        return this.page.getByPlaceholder(`${type} Name`)
    }
    filterGroup(name: string): Locator {
        return this.page.locator('.oxd-input-group', { has: this.page.getByText(name, { exact: true }) });
    }
    async getFilterType(name: string): Promise<'input' | 'select'> {
        const hasInput = await this.filterGroup(name).locator('input').count();
        console.log(await this.filterGroup(name).innerHTML())
        if (hasInput > 0) {
            return 'input';
        }
        return 'select';
    }

    inputField(name: string): Locator {
        return this.filterGroup(name).locator('input')
    }

    select(name: string): Locator {
        return this.filterGroup(name).locator('.oxd-select-text')
    }
}