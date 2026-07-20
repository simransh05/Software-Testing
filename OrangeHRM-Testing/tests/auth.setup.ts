import { expect } from "playwright/test";
import { test as setup } from "../fixtures/fixture";
import { logger } from "../logs/logger";
import { writeFile } from 'fs/promises'
setup('authenticate', async ({ basePage, page }) => {
    await basePage.login.gotoOrangeHRMLogin();
    await writeFile('logs/app-logs.logs', '')
    await expect(page).toHaveScreenshot('login-page.png')
    await basePage.login.loginValidUser();
    await page.waitForLoadState('load', { timeout: 120_000 })
    logger.info('Authenticate')
    await page.context().storageState({
        path: 'data/user.json',
    });
})