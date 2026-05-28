import { test, expect } from '@playwright/test'
import { PlaywrightBlocker } from '@cliqz/adblocker-playwright'
import fetch from 'cross-fetch';

// test('Navigate alertWindow', async ({ page }) => {
//     await page.goto('https://demoqa.com/');
//     await page.locator('//*[text()="Alerts, Frame & Windows"]').click();
//     await expect(page).toHaveURL(/alertsWindows/);
// })

// test('Navigate Browser Windows', async ({ page }) => {
//     const ad = await PlaywrightBlocker.fromPrebuiltAdsAndTracking(fetch);
//     await ad.enableBlockingInPage(page);
//     await page.goto('https://demoqa.com/alertsWindows')
//     await page.locator('//*[@class="text" and text()="Browser Windows"]').click();
//     await expect(page).toHaveURL(/browser-windows/);
// })

// test('Test Browser Windows', async ({ page }) => {
//     await page.goto('https://demoqa.com/browser-windows');
//     const page2 = page.waitForEvent('popup'); // listen for new tab
//     await page.locator('#tabButton').click(); // clicked now trigger popup
//     const newpage = await page2; // object of new tab is in newpage now
//     await newpage.waitForLoadState(); // wait for page to load
//     await expect(newpage).toHaveURL(/sample/);
//     await newpage.close();
//     const windows = page.waitForEvent('popup');
//     await page.locator('#windowButton').click();
//     const objWindow = await windows;
//     await objWindow.waitForLoadState();
//     await expect(objWindow).toHaveURL(/sample/);
//     await objWindow.close();
//     const newWindow = page.waitForEvent('popup');
//     await page.locator('#messageWindowButton').click();
//     const tab = await newWindow;
//     await tab.waitForLoadState();
//     await expect(tab.locator('//*[text()="Knowledge increases by sharing but not by saving. Please share this website with your friends and in your organization."]')).toBeVisible();
// })

// test('Navigate Alerts', async ({ page }) => {
//     const ad = await PlaywrightBlocker.fromPrebuiltAdsAndTracking(fetch);
//     await ad.enableBlockingInPage(page);
//     await page.goto('https://demoqa.com/alertsWindows')
//     await page.locator('//*[@class="text" and text()="Alerts"]').click();
//     await expect(page).toHaveURL(/alerts/);
// })

// test('Testing Alerts', async ({ page }) => {
//     await page.goto('https://demoqa.com/alerts');
//     page.once('dialog', async dialog => {
//         const message = dialog.message();
//         console.log('message', message)
//         await dialog.accept();
//         expect(message).toBe('You clicked a button');
//     })
//     await page.locator('#alertButton').click();
//     page.once('dialog', async dialog => {
//         const message = dialog.message();
//         console.log('message', message)
//         await dialog.accept();
//         expect(message).toBe('This alert appeared after 5 seconds');
//     })
//     await page.locator('#timerAlertButton').click();
//     await page.waitForTimeout(5000);
//     page.once('dialog', async dialog => {
//         const message = dialog.message();
//         console.log('message', message)
//         await dialog.accept();
//         expect(message).toBe('Do you confirm action?');
//     })
//     await page.locator('#confirmButton').click();
//     await expect(page.locator('//*[@id="confirmResult" and @class="text-success"]')).toBeVisible();
//     page.once('dialog', async dialog => {
//         const message = dialog.message();
//         console.log('message', message);
//         await dialog.accept('Simran');
//         expect(message).toBe('Please enter your name');
//     })
//     await page.locator('#promtButton').click();
//     await expect(page.locator('//*[@id="promptResult" and @class="text-success"]')).toBeVisible();
// })

// test('Navigate Frame', async ({page})=> {
//     let ad = await PlaywrightBlocker.fromPrebuiltAdsAndTracking(fetch);
//     await ad.enableBlockingInPage(page);
//     await page.goto('https://demoqa.com/alertsWindows')
//     await page.locator('//*[@class="text" and text()="Frames"]').click();
//     await expect(page).toHaveURL(/frames/);
// })

// test('Testing Frames', async ({page})=>{
//     await page.goto('https://demoqa.com/frames');
//     await expect(page.frameLocator('#frame1').locator('#sampleHeading')).toHaveText('This is a sample page')
//     await expect(page.frameLocator('#frame2').locator('#sampleHeading')).toHaveText('This is a sample page')
// })

// test('Navigate Nested Frame', async ({ page }) => {
//     let ad = await PlaywrightBlocker.fromPrebuiltAdsAndTracking(fetch);
//     await ad.enableBlockingInPage(page);
//     await page.goto('https://demoqa.com/alertsWindows')
//     await page.locator('//*[@class="text" and text()="Nested Frames"]').click();
//     await expect(page).toHaveURL(/nestedframes/);
// })

// test('Testing Nested Frames', async ({ page }) => {
//     await page.goto('https://demoqa.com/nestedframes');
//     await expect(page.frameLocator('#frame1').locator('//body')).toContainText('Parent frame')
//     await expect(page.frameLocator('#frame1').frameLocator('//*[@srcdoc="<p>Child Iframe</p>"]').locator('//p')).toHaveText('Child Iframe')
// })

// test('Navigate Dialogs', async ({ page }) => {
//     let ad = await PlaywrightBlocker.fromPrebuiltAdsAndTracking(fetch);
//     await ad.enableBlockingInPage(page);
//     await page.goto('https://demoqa.com/alertsWindows')
//     await page.locator('//*[@class="text" and text()="Modal Dialogs"]').click();
//     await expect(page).toHaveURL(/modal-dialogs/);
// })

test('Testing Dialogs', async ({ page }) => {
    await page.goto('https://demoqa.com/modal-dialogs');
    await page.locator('#showSmallModal').click();
    await expect(page.locator('//*[@role="dialog"]')).toBeVisible();
    await expect(page.locator('//*[@role="dialog"]')).toHaveAttribute('aria-modal', 'true');
    const smallModal = await page.locator('//*[@class="modal-content"]').boundingBox();
    await page.locator('#closeSmallModal').click();
    await page.locator('#showLargeModal').click();
    await expect(page.locator('//*[@role="dialog"]')).toBeVisible();
    await expect(page.locator('//*[@role="dialog"]')).toHaveAttribute('aria-modal', 'true')
    const largeModal = await page.locator('//*[@class="modal-content"]').boundingBox();
    // console.log('box size', smallModal, largeModal);
    await expect(largeModal?.width).toBeGreaterThan(smallModal?.width!);
})