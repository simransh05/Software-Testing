import { Page, Locator } from '@playwright/test';

export class navAdminSelectors {
    page: Page
    constructor(page: Page) {
        this.page = page
    }

    menuItem(name: string): Locator {
        return this.page.getByRole('menuitem').getByText(name);
    }

    openMenu(name: string): Locator {
        return this.page.locator('.oxd-topbar-body-nav-tab-item', { hasText: name });
    }
}