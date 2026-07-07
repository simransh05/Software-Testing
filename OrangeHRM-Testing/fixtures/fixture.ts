import { test as base } from '@playwright/test'
import { loginPage } from '../pages/login/loginPage';
import { navbarPage } from '../pages/navbar/navbarPage';
import { userManagementPage } from '../pages/admin/userManagementPage';
type myFixture = {
    login: loginPage,
    navbar: navbarPage,
    userMgt: userManagementPage
}
export const test = base.extend<myFixture>({
    login: async ({ page }, use) => {
        await use(new loginPage(page));
    },
    navbar: async ({ page }, use) => {
        await use(new navbarPage(page));
    },
    userMgt: async ({ page }, use) => {
        await use(new userManagementPage(page));
    },
})