import { Page, Locator } from '@playwright/test';

export class navAdminSelectors {
    page: Page
    constructor(page: Page) {
        this.page = page
    }

    openMenu(name: string): Locator {
        return this.page.locator('.oxd-topbar-body-nav-tab-item').filter({ hasText: name });
    }

    menuItem(name: string): Locator {
        return this.page.locator('.oxd-topbar-body-nav-tab-link', { hasText: name });
    }
}