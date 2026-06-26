import { test as base } from '@playwright/test';
import { loginPage } from '../pages/loginPage';
import { signupPage } from '../pages/signupPage';

type myFixture = {
    signup: signupPage
    login: loginPage
}

export const test = base.extend<myFixture>({
    signup: async ({ page }, use) => {
        await use(new signupPage(page));
    },
    login: async ({ page }, use) => {
        await use(new loginPage(page));
    }
})