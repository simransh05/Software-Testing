import { expect, Page } from '@playwright/test'
import { navbarSelector } from '../../selectors/navbarSelector'

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
        console.log(await this.navbar.allMenuItem.allInnerTexts());
        await this.navbar.searchInput.fill(value);
        const afterCount = await this.navbar.allMenuItem.count();
        console.log(beforeCount, afterCount);
        expect(beforeCount).toBeGreaterThan(afterCount)
    }

    async navToAdminAndVerify() {
        await this.navbar.allMenuItem.nth(0).click();
        this.page.waitForLoadState('load', { timeout: 60_000 })
        console.log(await this.navbar.allMenuItem.count())
        await expect(this.page).toHaveURL(/view/);
    }
    async navToPIMAndVerify() {
        await this.navbar.allMenuItem.nth(1).click();
        this.page.waitForLoadState('load', { timeout: 60_000 })
        await expect(this.page).toHaveURL(/view/);
    }
    async navToLeaveAndVerify() {
        await this.navbar.allMenuItem.nth(2).click();
        this.page.waitForLoadState('load', { timeout: 60_000 })
        await expect(this.page).toHaveURL(/view/);
    }
    async navToTimeAndVerify() {
        await this.navbar.allMenuItem.nth(3).click();
        this.page.waitForLoadState('load', { timeout: 60_000 })
        await expect(this.page).toHaveURL(/view/);
    }
    async navToRecruiteAndVerify() {
        await this.navbar.allMenuItem.nth(4).click();
        this.page.waitForLoadState('load', { timeout: 60_000 })
        await expect(this.page).toHaveURL(/view/);
    }
    async navToUserInfoAndVerify() {
        await this.navbar.allMenuItem.nth(5).click();
        this.page.waitForLoadState('load', { timeout: 60_000 })
        await expect(this.page).toHaveURL(/view/);
    }
    async navToPerformanceAndVerify() {
        await this.navbar.allMenuItem.nth(6).click();
        this.page.waitForLoadState('load', { timeout: 60_000 })
        await expect(this.page).toHaveURL(/view/);
    }
    async navToDashboardAndVerify() {
        await this.navbar.allMenuItem.nth(7).click();
        this.page.waitForLoadState('load', { timeout: 60_000 })
        await expect(this.page).toHaveURL(/index/);
    }
    async navToDirectoryAndVerify() {
        await this.navbar.allMenuItem.nth(8).click();
        this.page.waitForLoadState('load', { timeout: 60_000 })
        await expect(this.page).toHaveURL(/view/);
    }
    async navToMaintenanceAndVerify() {
        await this.navbar.allMenuItem.nth(9).click();
        this.page.waitForLoadState('load', { timeout: 60_000 })
        await expect(this.page).toHaveURL(/Employee/);
    }
    async navToClaimAndVerify() {
        await this.navbar.allMenuItem.nth(10).click();
        this.page.waitForLoadState('load', { timeout: 60_000 })
        await expect(this.page).toHaveURL(/view/);
    }
    async navToBuzzAndVerify() {
        await this.navbar.allMenuItem.nth(11).click();
        this.page.waitForLoadState('load', { timeout: 60_000 })
        await expect(this.page).toHaveURL(/view/);
    }

}