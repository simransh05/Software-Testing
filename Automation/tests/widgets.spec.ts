import { test, expect, chromium } from '@playwright/test';
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

// test('Testing Accordian', async ({ page }) => {
//     await page.goto('https://demoqa.com/accordian');
//     const show = await page.locator('.accordion-item .accordion-collapse').nth(0).getAttribute('class');
//     // console.log(show);
//     // console.log('before', show?.includes('show'))
//     await page.locator('.accordion-item .accordion-header').nth(1).click();
//     const show1 = await page.locator('.accordion-item .accordion-collapse').nth(0).getAttribute('class');
//     // console.log('after', show1?.includes('show'));
//     await expect(page.locator('.accordion-item .accordion-collapse').nth(0)).not.toHaveAttribute('class', 'show');
// })

// test('Navigate Autocomplete', async ({page})=>{
//     const ad = await PlaywrightBlocker.fromPrebuiltAdsAndTracking(fetch);
//     await ad.enableBlockingInPage(page);
//     await page.goto('https://demoqa.com/widgets');
//     await page.locator('//*[@class="text" and text()="Auto Complete"]').click();
//     await expect(page).toHaveURL(/auto-complete/);
// })

// test('Testing Auto-Complete', async ({ page }) => {
//     await page.goto('https://demoqa.com/auto-complete');
//     await page.locator('#autoCompleteMultipleInput').fill('Gre');
//     await page.locator('//*[text()="Green"]').click();
//     await page.locator('#autoCompleteMultipleInput').fill('Blu');
//     await page.locator('//*[text()="Blue"]').click();
//     await expect(page.locator('.auto-complete__multi-value__label').nth(1)).toHaveText('Blue')
//     await page.locator('//*[@aria-label="Remove Blue"]').click();
//     await expect(page.locator('//body')).not.toHaveText('Blue')
//     await page.locator('#autoCompleteSingleInput').fill('Blu');
//     await page.locator('//*[text()="Blue"]').click();
//     await expect(page.locator('.auto-complete__single-value')).toHaveText('Blue')
// })

// test('Navigate Date Picker', async ({ page }) => {
//     const ad = await PlaywrightBlocker.fromPrebuiltAdsAndTracking(fetch);
//     await ad.enableBlockingInPage(page);
//     await page.goto('https://demoqa.com/widgets');
//     await page.locator('//*[@class="text" and text()="Date Picker"]').click();
//     await expect(page).toHaveURL(/date-picker/);
// })

// test('Testing Date Picker', async ({ page }) => {
//     await page.goto('https://demoqa.com/date-picker');
//     await page.locator('#datePickerMonthYearInput').fill('05/26/2026');
//     await expect(page.locator('#datePickerMonthYearInput')).toHaveAttribute('value', '05/26/2026');
//     await page.locator('#dateAndTimePickerInput').fill('May 20, 2026 8:45 AM')
//     await expect(page.locator('#dateAndTimePickerInput')).toHaveAttribute('value', 'May 20, 2026 8:45 AM');
// })

// test('Navigate Slider', async ({ page }) => {
//     const ad = await PlaywrightBlocker.fromPrebuiltAdsAndTracking(fetch);
//     await ad.enableBlockingInPage(page);
//     await page.goto('https://demoqa.com/widgets');
//     await page.locator('//*[@class="text" and text()="Slider"]').click();
//     await expect(page).toHaveURL(/slider/);
// })

// test('Testing Slider', async ({ page }) => {
//     await page.goto('https://demoqa.com/slider');
//     const currVal = await page.locator('#slider').getAttribute('value');
//     console.log(currVal);
//     page.locator('#slider').fill('60');
//     await expect(page.locator('#slider')).toHaveAttribute('value', '60');
// })

// test('Navigate Progress Bar', async ({ page }) => {
//     const ad = await PlaywrightBlocker.fromPrebuiltAdsAndTracking(fetch);
//     await ad.enableBlockingInPage(page);
//     await page.goto('https://demoqa.com/widgets');
//     await page.locator('//*[@class="text" and text()="Progress Bar"]').click();
//     await expect(page).toHaveURL(/progress-bar/);
// })

// idea is to click start then stop should be more than 0 and then start wait till 100 check then reset 
// test('Testing Progress Bar', async ({ page }) => {
//     await page.goto('https://demoqa.com/progress-bar');
//     await page.locator('#startStopButton').click();
//     await page.waitForTimeout(1000);
//     await page.locator('#startStopButton').click();
//     const currValue = await page.locator('//*[@role="progressbar"]').getAttribute('aria-valuenow')
//     // console.log('value', currValue)
//     await expect(Number(currValue)).toBeGreaterThan(0);
//     await page.locator('#startStopButton').click();
//     // await page.waitForTimeout(12000);
//     await page.locator('#resetButton').waitFor({
//         state: 'visible',
//         timeout: 15000
//     })
//     await expect(page.locator('//*[@role="progressbar"]')).toHaveAttribute('aria-valuenow', '100');
//     await page.locator('#resetButton').click();
//     await page.locator('#startStopButton').waitFor({
//         state: 'visible',
//         timeout: 15000
//     })
//     await expect(page.locator('//*[@role="progressbar"]')).toHaveAttribute('aria-valuenow', '0');
// })

// test('Navigate Tabs', async ({ page }) => {
//     const ad = await PlaywrightBlocker.fromPrebuiltAdsAndTracking(fetch);
//     await ad.enableBlockingInPage(page);
//     await page.goto('https://demoqa.com/widgets');
//     await page.locator('//*[@class="text" and text()="Tabs"]').click();
//     await expect(page).toHaveURL(/tabs/);
// })

// test('Testing tabs', async ({ page }) => {
//     await page.goto('https://demoqa.com/tabs');
//     await expect(page.locator('#demo-tab-what')).toHaveAttribute('aria-selected', 'true');
//     await page.locator('#demo-tab-origin').click();
//     await expect(page.locator('#demo-tab-origin')).toHaveAttribute('aria-selected', 'true');
//     await expect(page.locator('#demo-tab-what')).toHaveAttribute('aria-selected', 'false');
// })

// test('Navigate Tool Tips', async({page})=>{
//     const ad = await PlaywrightBlocker.fromPrebuiltAdsAndTracking(fetch);
//     await ad.enableBlockingInPage(page);
//     await page.goto('https://demoqa.com/widgets');
//     await page.locator('//*[@class="text" and text()="Tool Tips"]').click();
//     await expect(page).toHaveURL(/tool-tips/);
// })

// test('Testing Tool Tips', async ({ page }) => {
//     await page.goto('https://demoqa.com/tool-tips');
//     await page.locator('#toolTipButton').hover();
//     await expect(page.locator('#toolTipButton')).toHaveAttribute('aria-describedby', 'buttonToolTip')
// })

// test('Navigate Menu', async ({ page }) => {
//     const ad = await PlaywrightBlocker.fromPrebuiltAdsAndTracking(fetch);
//     await ad.enableBlockingInPage(page);
//     await page.goto('https://demoqa.com/widgets');
//     await page.locator('//*[@class="text" and text()="Menu"]').click();
//     await expect(page).toHaveURL(/menu/);
// })

// test('Testing Menu', async ({ page }) => {
//     await page.goto('https://demoqa.com/menu');
//     await page.waitForLoadState();
//     await page.locator('//a[text()="Main Item 2"]').hover();
//     await expect(page.getByText('SUB SUB LIST »')).toBeVisible();
//     await page.getByText('SUB SUB LIST »').hover();
//     await expect(page.locator('//a[text()="Sub Sub Item 1"]')).toBeVisible();
// })

// test('Navigate Select Menu', async ({ page }) => {
//     const ad = await PlaywrightBlocker.fromPrebuiltAdsAndTracking(fetch);
//     await ad.enableBlockingInPage(page);
//     await page.goto('https://demoqa.com/widgets');
//     await page.locator('//*[@class="text" and text()="Select Menu"]').click();
//     await expect(page).toHaveURL(/select-menu/);
// })

// idea is to select first then another select 
test('Testing Select Menu', async ({ page }) => {
    await page.goto('https://demoqa.com/select-menu');
    await page.waitForLoadState();
    await page.locator('#react-select-2-input').fill('group 1');
    await page.locator('//*[text()="Group 1, option 2"]').click();
    await expect(page.locator(".css-1dimb5e-singleValue").first()).toHaveText('Group 1, option 2');
    await page.locator("#react-select-3-input").click();
    await page.getByText("Mr.").click();
    await expect(page.locator(".css-1dimb5e-singleValue").nth(1)).toHaveText('Mr.');
    await page.locator('#oldSelectMenu').selectOption('3');
    await expect(page.locator('#oldSelectMenu')).toHaveValue('3');
    await page.locator('#react-select-4-input').fill('green');
    await page.locator('//*[text()="Green"]').nth(1).click();
    await expect(page.locator('.css-9jq23d')).toHaveText('Green');
    await page.locator('//*[@aria-label="Remove Green"]').click();
    await expect(page.locator('//body')).not.toHaveText('Green');
    await page.locator('#cars').selectOption('audi');
    await expect(page.locator('#cars')).toHaveValue('audi');
})