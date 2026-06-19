import { test as base, chromium, firefox, Page } from "@playwright/test";
import { homePage } from "../pages/homePage"; 
import dotenv from 'dotenv';
dotenv.config();

type myFixture = {
    homePage: homePage
    page: Page
}

export const test = base.extend<myFixture>({
    page: async ({ }, use) => {
        let browser;
        console.log(process.env.browserName);
        if (process.env.browserName === 'firefox') {
            browser = await firefox.launch();
        } else {
            browser = await chromium.launch();
        }

        const context = await browser.newContext();
        const page = await context.newPage();
        await use(page);
        await browser.close();
    },
    homePage: async ({ page }, use) => {
        await use(new homePage(page));
    }
})