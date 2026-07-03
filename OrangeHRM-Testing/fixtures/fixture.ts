import { test as base } from '@playwright/test'
import { loginPage } from '../pages/login/loginPage';
import { navbarPage } from '../pages/navbar/navbarPage';
type myFixture = {
    login: loginPage,
    navbar: navbarPage
}
export const test = base.extend<myFixture>({
    login: async ({ page }, use) => {
        await use(new loginPage(page));
    },
    navbar: async ({ page }, use) => {
        await use(new navbarPage(page));
    },
})