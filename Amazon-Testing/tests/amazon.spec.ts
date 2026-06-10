import { test, expect } from '@playwright/test';
import { homePage } from '../pages/homePage';

test('Amazon Home', async ({ page }) => {
    const home = new homePage(page);
    await home.goToHome();
    await home.searchAndFilterCheck()
});
