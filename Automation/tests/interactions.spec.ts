import { test, expect, request } from '@playwright/test';
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
//     await page.locator('//span[text()="Sortable"]').click();
//     await expect(page).toHaveURL(/sortable/);
// })

// test('Testing Sortable', async ({ page }) => {
//     await page.goto('https://demoqa.com/sortable');
//     await page.waitForLoadState();
//     const box = await page.locator('.list-group-item').first().boundingBox();
//     console.log('here', box);
//     await page.mouse.move(box!.x + 10, box!.y + 10);
//     await page.mouse.down();
//     await page.mouse.move(
//         box!.x,
//         box!.y + box!.height * 1.5,
//         { steps: 50 }
//     );
//     await page.waitForTimeout(500);
//     await page.mouse.up();
//     await expect(page.locator('.list-group-item').nth(1)).toHaveText('One');
//     await page.reload();
//     await expect(page.locator('.list-group-item').nth(0)).toHaveText('One');
// })

// test('Navigate Selectable', async ({ page }) => {
//     const ad = await PlaywrightBlocker.fromPrebuiltAdsAndTracking(fetch);
//     await ad.enableBlockingInPage(page);
//     await page.goto('https://demoqa.com/interaction');
//     await page.waitForLoadState();
//     await page.locator('//span[@class="text" and text()="Selectable"]').click();
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
//     await page.locator('//span[@class="text" and text()="Resizable"]').click();
//     await expect(page).toHaveURL(/resizable/);
// })

// test('Testing Resizable', async ({ page }) => {
//     await page.goto('https://demoqa.com/resizable');
//     const first = await page.locator('.react-resizable-handle').first();
//     const box = await page.locator('#resizableBoxWithRestriction').boundingBox();
//     await first.hover()
//     await page.mouse.down();
//     await page.mouse.move(
//         box!.width + box!.x + 100,
//         box!.height + box!.y + 10
//     )
//     await page.mouse.up();
//     const afterbox = await page.locator('#resizableBoxWithRestriction').boundingBox();
//     console.log('here', afterbox, box)
//     await expect(box!.width).toBeLessThan(afterbox!.width);
// })

// test('Navigate Droppable', async({page})=>{
//     const ad = await PlaywrightBlocker.fromPrebuiltAdsAndTracking(fetch);
//     await ad.enableBlockingInPage(page);
//     await page.goto('https://demoqa.com/interaction');
//     await page.waitForLoadState();
//     await page.locator('//span[@class="text" and text()="Droppable"]').click();
//     await expect(page).toHaveURL(/droppable/);
// })

// test('Testing Droppable', async ({ page }) => {
//     await page.goto('https://demoqa.com/droppable');
//     await page.waitForLoadState()
//     const box1 = await page.locator('#draggable').boundingBox();
//     const box2 = await page.locator('#droppable').first().boundingBox();
//     await page.mouse.move(box1!.x + box1!.width / 2, box1!.y + box1!.height / 2);
//     console.log(box1, box2);
//     await page.mouse.down();
//     await page.waitForTimeout(5000);
//     await page.mouse.move(
//         box2!.x + box1!.width + 20,
//         box1!.y + 20,
//         { steps: 50 }
//     )
//     console.log(
//         box2!.x + box1!.width * 0.5 + 20,
//         box1!.y + 20
//     );
//     await page.waitForTimeout(4000);
//     await page.mouse.up();
//     await expect(page.locator('#droppable').first()).toHaveText('Dropped!');
// })

// test('Navigate Dragabble', async({page})=>{
//     const ad = await PlaywrightBlocker.fromPrebuiltAdsAndTracking(fetch);
//     await ad.enableBlockingInPage(page);
//     await page.goto('https://demoqa.com/interaction');
//     await page.waitForLoadState();
//     await page.locator('//span[@class="text" and text()="Dragabble"]').click();
//     await expect(page).toHaveURL(/dragabble/);
// })

test('Testing Dragabble', async ({ page }) => {
    const ad = await PlaywrightBlocker.fromPrebuiltAdsAndTracking(fetch);
    await ad.enableBlockingInPage(page);
    await page.goto('https://demoqa.com/dragabble');
    const beforeBox = await page.locator('#dragBox').boundingBox();
    console.log(await page.locator('#dragBox').isVisible());
    await page.mouse.move(
        beforeBox!.x + beforeBox!.width / 2,
        beforeBox!.y + beforeBox!.height / 2
    );
    await page.mouse.down();
    await page.mouse.move(
        beforeBox!.x + beforeBox!.width + 100,
        beforeBox!.y + beforeBox!.height + 100,
        { steps: 50 }
    )
    await page.waitForTimeout(500);
    await page.mouse.up();
    const afterBox = await page.locator('#dragBox').boundingBox();
    await expect(afterBox!.x).toBeGreaterThan(beforeBox!.x);
})