import { test } from "../fixtures/fixture";

test.beforeEach('Login Valid User', async ({ login, page }) => {
  await login.gotoOrangeHRMLogin();
  await login.loginValidUser();
  await page.waitForLoadState('load', { timeout: 120_000 })
})

test.skip('Login Invalid User', async ({ login }) => {
  await login.gotoOrangeHRMLogin();
  await login.loginForInvalidUser();
})

test.skip('Verify Navigations', async ({ navbar }) => {
  // await navbar.navToAdminAndVerify();
  // await navbar.navToPIMAndVerify();
  // await navbar.navToLeaveAndVerify();
  // await navbar.navToTimeAndVerify();
  // await navbar.navToRecruiteAndVerify();
  // await navbar.navToUserInfoAndVerify();
  // await navbar.navToPerformanceAndVerify();
  // await navbar.navToDashboardAndVerify();
  // await navbar.navToDirectoryAndVerify();
  // // await navbar.navToMaintenanceAndVerify();
  // await navbar.navToClaimAndVerify();
  // await navbar.navToBuzzAndVerify();
  await navbar.searchAndVerifyFilter('b');
})

test('admin', async ({ navbar , userMgt }) => {
  await navbar.navToAdminAndVerify();
  await userMgt.resetFilterAndVerify();
})