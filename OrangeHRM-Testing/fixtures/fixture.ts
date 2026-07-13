import { test as base } from '@playwright/test'
import { loginPage } from '../pages/login/loginPage';
import { navbarPage } from '../pages/navbar/navbarPage';
import { userManagementPage } from '../pages/admin/userManagementPage';
import { navAdminPage } from '../pages/admin/navAdminPage';
import { jobPage } from '../pages/admin/jobPage';
import { basePage } from '../pages/base/basePage';
type myFixture = {
    basePage: basePage
}
export const test = base.extend<myFixture>({
    basePage: async ({ page }, use) => {
        await use(new basePage(page));
    }
})