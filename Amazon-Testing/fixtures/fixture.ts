import { test as base } from "@playwright/test";
import { homePage } from "../pages/homePage";

type myFixture = {
    homePage: homePage
}

export const test = base.extend<myFixture>({
    homePage: async ({ page }, use) => {
        use(new homePage(page));
    }
})