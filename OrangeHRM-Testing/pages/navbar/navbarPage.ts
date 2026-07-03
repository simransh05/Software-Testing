import { expect, Page } from '@playwright/test'
import { navbarSelector } from '../../selectors/navbarSelector'

export class navbarPage {
    page: Page
    navbar: navbarSelector
    constructor(page: Page) {
        this.page = page
        this.navbar = new navbarSelector(page);
    }

    async searchAndVerifyFilter() { }

    async navToAdminAndVerify() {
        this.navbar.allMenuItem.nth(0).click();
        await expect(this.page).toHaveURL(/view/);
    }
    async navToPIMAndVerify() {
        this.navbar.allMenuItem.nth(1).click();
        await expect(this.page).toHaveURL(/view/);
    }
    async navToLeaveAndVerify() {
        this.navbar.allMenuItem.nth(2).click();
        await expect(this.page).toHaveURL(/view/);
    }
    async navToTimeAndVerify() {
        this.navbar.allMenuItem.nth(3).click();
        await expect(this.page).toHaveURL(/view/);
    }
    async navToRecruiteAndVerify() {
        this.navbar.allMenuItem.nth(4).click();
        await expect(this.page).toHaveURL(/view/);
    }
    async navToUserInfoAndVerify() {
        this.navbar.allMenuItem.nth(5).click();
        await expect(this.page).toHaveURL(/view/);
    }
    async navToPerformanceAndVerify() {
        this.navbar.allMenuItem.nth(6).click();
        await expect(this.page).toHaveURL(/view/);
    }
    async navToDashboardAndVerify() {
        this.navbar.allMenuItem.nth(7).click();
        await expect(this.page).toHaveURL(/view/);
    }
    async navToDirectoryAndVerify() {
        this.navbar.allMenuItem.nth(8).click();
        await expect(this.page).toHaveURL(/view/);
    }
    async navToMaintenanceAndVerify() {
        this.navbar.allMenuItem.nth(9).click();
        await expect(this.page).toHaveURL(/view/);
    }
    async navToClaimAndVerify() {
        this.navbar.allMenuItem.nth(10).click();
        await expect(this.page).toHaveURL(/view/);
    }
    async navToBuzzAndVerify() {
        this.navbar.allMenuItem.nth(11).click();
        await expect(this.page).toHaveURL(/view/);
    }

}