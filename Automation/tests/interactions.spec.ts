import { test, expect } from '@playwright/test';
import { PlaywrightBlocker } from '@cliqz/adblocker-playwright'
import fetch from 'cross-fetch';

// test('Navigate Interactions', async ({ page }) => {
//     await page.goto('https://demoqa.com/');
//     await page.locator('//a[@href="/interaction"]').click();
//     await expect(page).toHaveURL(/interaction/);
// })

// test('Navigate Sortable', async ({ page }) => {
//     const ad = await PlaywrightBlocker.fromPrebuiltAdsAndTracking(fetch);
//     await ad.enableBlockingInPage(page);
//     await page.goto('https://demoqa.com/interaction');
//     await page.locator('//*[text()="Sortable"]').click();
//     await expect(page).toHaveURL(/sortable/);
// })

test('Testing Sortable', async ({ page }) => {
    await page.goto('https://demoqa.com/sortable');
    const first = page.locator('.list-group-item').nth(0);
    const second = page.locator('.list-group-item').nth(1);
    await first.dragTo(second);
    await expect(page.locator('.list-group-item').nth(1)).toHaveText('One');
    await page.reload();
    await expect(page.locator('.list-group-item').nth(0)).toHaveText('One');
})

// test('Navigate Selectable', async ({ page }) => {
//     const ad = await PlaywrightBlocker.fromPrebuiltAdsAndTracking(fetch);
//     await ad.enableBlockingInPage(page);
//     await page.goto('https://demoqa.com/interaction');
//     await page.waitForLoadState();
//     await page.locator('//*[@class="text" and text()="Selectable"]').click();
//     await expect(page).toHaveURL(/selectable/);
// })

// test('Testing Selectable', async ({ page }) => {
//     await page.goto('https://demoqa.com/selectable');
//     await page.waitForLoadState();
//     await page.locator('.list-group-item').nth(0).click();
//     await expect(page.locator('.list-group-item').nth(0)).toContainClass('active');
//     await page.locator('.list-group-item').nth(0).click();
//     await expect(page.locator('.list-group-item').nth(0)).not.toContainClass('active');
//     await page.locator('#demo-tab-grid').click();
//     await page.locator('.list-group-item').nth(4).click();
//     await expect(page.locator('.list-group-item').nth(4)).toContainClass('active');
//     await page.locator('.list-group-item').nth(4).click();
//     await expect(page.locator('.list-group-item').nth(4)).not.toContainClass('active');
// })

// test('Navigate Resizable', async ({ page }) => {
//     const ad = await PlaywrightBlocker.fromPrebuiltAdsAndTracking(fetch);
//     await ad.enableBlockingInPage(page);
//     await page.goto('https://demoqa.com/interaction');
//     await page.waitForLoadState();
//     await page.locator('//*[@class="text" and text()="Resizable"]').click();
//     await expect(page).toHaveURL(/resizable/);
// })