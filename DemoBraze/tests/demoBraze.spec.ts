import { url, userInfo } from "../Data/demoBrazeData";
import { test } from "../fixtures/fixture";

test.beforeEach(async ({ page }) => {
    await page.goto(url.homePage);
    await page.setViewportSize({width : 1200 , height : 8000})
    await page.waitForLoadState()
})

// success
test.skip('New User Signup', async ({ signup }) => {
    await signup.uniqueNewUserAndVerify();
})

// success
test.skip('Existing User Signup', async ({ signup }) => {
    await signup.existingUserAndVerify();
})

// success
test.skip('Missing Username Signup', async ({ signup }) => {
    await signup.userNameMissingAndVerify();
})

// success
test.skip('Missing Password Signup', async ({ signup }) => {
    await signup.passwordMissingAndVerify();
})

// success
test.skip('Valid User Login', async ({ login }) => {
    await login.validUserLoginAndVerify();
})

test.skip('Non Existing User Login', async ({ login }) => {
    await login.nonExistingUserLoginAndVerify()
})

// success
test.skip('Missing Username Login', async ({ login }) => {
    await login.missingUsernameLoginAndVerify()
})

// success
test.skip('Missing Password Login', async ({ login }) => {
    await login.missingPasswordLoginAndVerify();
})

// end - end testing
test('Complete App Testing', async ({ page, login, home, cart }) => {
    await login.validUserLoginAndVerify();
    await home.addToCardAndVerify();
    await cart.gotocartAndVerify();
    await page.reload()
    await cart.verifyCartItems(1);
    await cart.placeOrderAndConfirm();
})