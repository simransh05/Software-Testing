import { expect, Page } from '@playwright/test'
import { navbarSelector } from '../../selectors/navbarSelector'
import { logger } from '../../logs/logger'

export class navbarPage {
    page: Page
    navbar: navbarSelector
    constructor(page: Page) {
        this.page = page
        this.navbar = new navbarSelector(page);
    }

    async searchAndVerifyFilter(value: string) {
        await this.page.waitForLoadState('load', { timeout: 60_000 })
        await expect(this.navbar.allMenuItem.first()).toBeVisible({ timeout: 10_000 })
        const beforeCount = await this.navbar.allMenuItem.count();
        logger.info(`${await this.navbar.allMenuItem.allInnerTexts()}`)
        await this.navbar.searchInput.fill(value);
        const afterCount = await this.navbar.allMenuItem.count();
        expect(beforeCount).toBeGreaterThan(afterCount)
    }

    async navToAdminAndVerify() {
        await this.page.waitForLoadState('load', { timeout: 60_000 })
        await this.navbar.allMenuItem.nth(0).click();
        this.page.waitForLoadState('load', { timeout: 60_000 })
        await expect(this.page).toHaveURL(/admin/);
    }
    async navToPIMAndVerify() {
        await this.navbar.allMenuItem.nth(1).click();
        this.page.waitForLoadState('load', { timeout: 60_000 })
        await expect(this.page).toHaveURL(/pim/);
    }
    async navToLeaveAndVerify() {
        await this.navbar.allMenuItem.nth(2).click();
        this.page.waitForLoadState('load', { timeout: 60_000 })
        await expect(this.page).toHaveURL(/leave/);
    }
    async navToTimeAndVerify() {
        await this.navbar.allMenuItem.nth(3).click();
        this.page.waitForLoadState('load', { timeout: 60_000 })
        await expect(this.page).toHaveURL(/time/);
    }
    async navToRecruiteAndVerify() {
        await this.navbar.allMenuItem.nth(4).click();
        this.page.waitForLoadState('load', { timeout: 60_000 })
        await expect(this.page).toHaveURL(/recruitment/);
    }
    async navToUserInfoAndVerify() {
        await this.navbar.allMenuItem.nth(5).click();
        this.page.waitForLoadState('load', { timeout: 60_000 })
        await expect(this.page).toHaveURL(/viewPersonalDetails/);
    }
    async navToPerformanceAndVerify() {
        await this.navbar.allMenuItem.nth(6).click();
        this.page.waitForLoadState('load', { timeout: 60_000 })
        await expect(this.page).toHaveURL(/performance/);
    }
    async navToDashboardAndVerify() {
        await this.navbar.allMenuItem.nth(7).click();
        this.page.waitForLoadState('load', { timeout: 60_000 })
        await expect(this.page).toHaveURL(/dashboard/);
    }
    async navToDirectoryAndVerify() {
        await this.navbar.allMenuItem.nth(8).click();
        this.page.waitForLoadState('load', { timeout: 60_000 })
        await expect(this.page).toHaveURL(/directory/);
    }
    async navToMaintenanceAndVerify() {
        await this.navbar.allMenuItem.nth(9).click();
        this.page.waitForLoadState('load', { timeout: 60_000 })
        await expect(this.page).toHaveURL(/maintenance/);
    }
    async navToClaimAndVerify() {
        await this.navbar.allMenuItem.nth(10).click();
        this.page.waitForLoadState('load', { timeout: 60_000 })
        await expect(this.page).toHaveURL(/claim/);
    }
    async navToBuzzAndVerify() {
        await this.navbar.allMenuItem.nth(11).click();
        this.page.waitForLoadState('load', { timeout: 60_000 })
        await expect(this.page).toHaveURL(/buzz/);
    }

}