import { url, userInfo } from "../Data/demoBrazeData";
import { test } from "../fixtures/fixture";

test.beforeEach(async ({ page }) => {
    await page.goto(url.homePage);
    await page.waitForLoadState()
})

// success
test.skip('New User Signup', async ({ signup }) => {
    await signup.uniqueNewUserAndVerify();
})

// success
test('Existing User Signup', async ({ signup }) => {
    await signup.existingUserAndVerify();
})

test('Missing Username Signup', async ({ signup }) => {
    await signup.userNameMissingAndVerify();
})

test('Missing Password Signup', async ({ signup }) => {
    await signup.passwordMissingAndVerify();
})

// success
test.skip('Valid User Login', async ({ login }) => {
    await login.validUserLoginAndVerify();
})

test.skip('Invalid User Login', async ({ login }) => {
    await login.invalidUserLoginAndVerify();
})

// end - end testing

test.skip('Complete App Testing', async ({ login }) => {
    await login.validUserLoginAndVerify();
})