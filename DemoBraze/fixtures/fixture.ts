import { test as base } from '@playwright/test';
import { loginPage } from '../pages/loginPage';
import { signupPage } from '../pages/signupPage';
import { homePage } from '../pages/homePage';
import { cartPage } from '../pages/cartPage';

type myFixture = {
    signup: signupPage
    login: loginPage
    home: homePage
    cart: cartPage
}

export const test = base.extend<myFixture>({
    signup: async ({ page }, use) => {
        await use(new signupPage(page));
    },
    login: async ({ page }, use) => {
        await use(new loginPage(page));
    },
    home: async ({ page }, use) => {
        await use(new homePage(page));
    },
    cart: async ({ page }, use) => {
        await use(new cartPage(page));
    }
})