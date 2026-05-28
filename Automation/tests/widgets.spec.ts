import { test, expect } from '@playwright/test';
import { PlaywrightBlocker } from '@cliqz/adblocker-playwright'
import fetch from 'cross-fetch';

// test('Navigate Widgets', async ({ page }) => {
//     await page.goto('https://demoqa.com/');
//     await page.locator('//*[@class="card-body"]/h5[text()="Widgets"]').click();
//     await expect(page).toHaveURL(/widgets/);
// })

// test('Navigate Accordian', async ({ page }) => {
//     const ad = await PlaywrightBlocker.fromPrebuiltAdsAndTracking(fetch);
//     await ad.enableBlockingInPage(page);
//     await page.goto('https://demoqa.com/widgets');
//     await page.locator('//*[@class="text" and text()="Accordian"]').click();
//     await expect(page).toHaveURL(/accordian/)
// })

test('Testing Accordian', async ({ page }) => {
    await page.goto('https://demoqa.com/accordian');
    const show = await page.locator('.accordion-item .accordion-collapse').nth(0).getAttribute('class');
    // console.log(show);
    console.log('before', show?.includes('show'))
    await page.locator('.accordion-item .accordion-header').nth(1).click();
    const show1 = await page.locator('.accordion-item .accordion-collapse').nth(0).getAttribute('class');
    console.log('after', show1?.includes('show'));
    await expect(page.locator('.accordion-item .accordion-collapse').nth(0)).not.toHaveAttribute('class', 'show');
})