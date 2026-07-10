import { test as base } from '@playwright/test'
import { loginPage } from '../pages/login/loginPage';
import { navbarPage } from '../pages/navbar/navbarPage';
import { userManagementPage } from '../pages/admin/userManagementPage';
import { navAdminPage } from '../pages/admin/navAdminPage';
import { jobPage } from '../pages/admin/jobPage';
type myFixture = {
    login: loginPage,
    navbar: navbarPage,
    userMgt: userManagementPage,
    navAdmin: navAdminPage,
    jobs: jobPage
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
    navAdmin: async ({ page }, use) => {
        await use(new navAdminPage(page));
    },
    jobs: async ({ page }, use) => {
        await use(new jobPage(page));
    },
})