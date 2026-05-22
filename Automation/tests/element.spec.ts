import { expect, test } from '@playwright/test'
import { PlaywrightBlocker } from '@cliqz/adblocker-playwright';
import fetch from 'cross-fetch';
test('Navigate Element', async ({ page }) => {
    await page.goto('https://demoqa.com/');
    await page.locator('//a[@href="/elements"]').click();
    await expect(page).toHaveURL(/elements/)
})

// idea is go to elements check if the menu is open if not then open menu and click text box
test('Naviagte TextBox', async ({ page }) => {
    const blocker = await PlaywrightBlocker.fromPrebuiltAdsAndTracking(fetch);
    await blocker.enableBlockingInPage(page);
    await page.goto('https://demoqa.com/elements')
    const isVisible = await page.locator('//*[@class="text" and text()="Text Box"]').isVisible();
    console.log('here', isVisible);
    if (!isVisible) {
        await page.locator('//*[text()="Elements"]').click();
    }
    // await expect(page.locator('//*[@class="text" and text()="Text Box"]'));
    await page.locator('//*[@class="text" and text()="Text Box"]').click();
    await expect(page).toHaveURL(/text-box/)
})

// test for goto fill name email address permanent add submit btn
test('Fill TextBox', async ({ page }) => {
    await page.goto('https://demoqa.com/text-box');
    await page.fill('#userName', 'Simran');
    await page.fill('#userEmail', 'simran@gmail.com');
    await page.fill('#currentAddress', 'Delhi');
    await page.fill('#permanentAddress', 'Delhi');
    await page.locator('#submit').click();
    await expect(page.locator('#email')).toBeVisible();
})

// go to checkbox from element
test('Navigate CheckBox', async ({ page }) => {
    // find checkbox click naviagte check
    const block = await PlaywrightBlocker.fromPrebuiltAdsAndTracking(fetch);
    await block.enableBlockingInPage(page);
    await page.goto('https://demoqa.com/elements');
    await page.locator('//*[@class="text" and text()="Check Box"]').click();
    await expect(page).toHaveURL(/checkbox/)
})

// // checkbox click commands (in progress)
test('Checkbox Home', async ({ page }) => {
    await page.goto('https://demoqa.com/checkbox');
    const check = await page.locator('//*[@role="checkbox" and @aria-label="Select Home"]').getAttribute('aria-checked');
    console.log('check', check)
    if (!check) {
        await page.locator('//*[@role="checkbox" and @aria-label="Select Home"]').click();
    }
    await expect(page.locator('//*[@role="checkbox" and @aria-label="Select Home"]')).toBeChecked();

});

// test('CheckBox Command', async ({ page }) => {
//     // role is treeitem , aria-expended get attribute
//     // if !open then open then same for next
//     // checkbox click then expect(that box).ischecked()
// })