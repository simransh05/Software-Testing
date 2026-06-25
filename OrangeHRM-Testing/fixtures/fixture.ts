import { test as base } from '@playwright/test'
import { loginPage } from '../pages/login/loginPage';
type myFixture = {
    login: loginPage
}
export const test = base.extend<myFixture>({
    login: async ({ page }, use) => {
        await use(new loginPage(page));
    }
})