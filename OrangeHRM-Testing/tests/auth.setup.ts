import { test as setup } from "../fixtures/fixture";

setup('authenticate', async ({ basePage, page }) => {
    await basePage.login.gotoOrangeHRMLogin();
    await basePage.login.loginValidUser();
    await page.waitForLoadState('load', { timeout: 120_000 })
    await page.context().storageState({
        path: 'data/user.json',
    });
})