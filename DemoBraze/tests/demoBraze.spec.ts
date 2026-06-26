import { url } from "../Data/demoBrazeData";
import { test } from "../fixtures/fixture";

test.beforeEach(async ({ page }) => {
    await page.goto(url.homePage);
})

test('New User Signup', async ({ signup }) => {
    await signup.uniqueNewUserAndVerify();
})

test('Invalid Signup', async ({ signup }) => {
    await signup.invalidUserAndVerify();
})

test('Valid User Login', async ({ login }) => {
    await login.validUserLoginAndVerify();
})

test('Invalid User Login', async ({ login }) => {
    await login.invalidUserLoginAndVerify();
})

// end - end testing

test.skip('Complete App Testing', async ({ login }) => {
    await login.validUserLoginAndVerify();
})