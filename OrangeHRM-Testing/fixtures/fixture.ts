import { test as base } from '@playwright/test'
import { basePage } from '../pages/base/basePage';
type myFixture = {
    basePage: basePage
}
export const test = base.extend<myFixture>({
    basePage: async ({ page }, use) => {
        await use(new basePage(page));
    }
})