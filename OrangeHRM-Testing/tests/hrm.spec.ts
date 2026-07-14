import { data, url } from "../data/userData";
import { test } from "../fixtures/fixture";

test.beforeEach('basePage.login Valid User', async ({ basePage, page }) => {
  await basePage.login.gotoOrangeHRMLogin();
  await basePage.login.loginValidUser();
  await page.waitForLoadState('load', { timeout: 120_000 })
})

test.skip('basePage.login Invalid User', async ({ basePage }) => {
  await basePage.login.gotoOrangeHRMLogin();
  await basePage.login.loginForInvalidUser();
})

test.skip('Verify Navigations', async ({ basePage }) => {
  await basePage.navbar.navToAdminAndVerify();
  await basePage.navbar.navToPIMAndVerify();
  await basePage.navbar.navToLeaveAndVerify();
  await basePage.navbar.navToTimeAndVerify();
  await basePage.navbar.navToRecruiteAndVerify();
  await basePage.navbar.navToUserInfoAndVerify();
  await basePage.navbar.navToPerformanceAndVerify();
  await basePage.navbar.navToDashboardAndVerify();
  await basePage.navbar.navToDirectoryAndVerify();
  // await basePage.navbar.navToMaintenanceAndVerify();
  await basePage.navbar.navToClaimAndVerify();
  await basePage.navbar.navToBuzzAndVerify();
  await basePage.navbar.searchAndVerifyFilter('b');
})

test.skip('Admin User Management', async ({ basePage }) => {
  // add - filter from each - reset - update - delete
  await basePage.navbar.navToAdminAndVerify();
  await basePage.userMgt.addNewUserAndVerify();
  await basePage.userMgt.filterSystemUserByUsernameAndVerify();
  await basePage.userMgt.resetFilterAndVerify();
  await basePage.userMgt.filterSystemUserByRoleAndVerify();
  await basePage.userMgt.resetFilterAndVerify();
  await basePage.userMgt.filterSystemUserByEmpNameAndVerify();
  await basePage.userMgt.resetFilterAndVerify();
  await basePage.userMgt.filterSystemUserByStatus();
  await basePage.userMgt.resetFilterAndVerify();
  await basePage.userMgt.updateTheInfoAndVerify();
  await basePage.userMgt.deleteSysetmUserAndVerify();
})

test('Admin Job Title', async ({ basePage, page }) => {
  await basePage.navbar.navToAdminAndVerify();
  await basePage.navAdmin.openAndNavAndVerify('Job', 'Job Titles', 'viewJobTitleList')
  await basePage.main.add('Accountant', 'viewJobTitleList');
  await basePage.main.update('Accountant', 'viewJobTitleList', 'Accounts');
  await basePage.main.delete('Accounts');
  await basePage.navAdmin.openAndNavAndVerify('Job', 'Pay Grades', 'viewPayGrades')
  await basePage.main.delete('Grades I');
  await basePage.navAdmin.openAndNavAndVerify('Job', 'Employment Status', 'employmentStatus')
  await basePage.main.add('Full Time QA', 'employmentStatus')
  await basePage.main.update('Full Time QA', 'employmentStatus', 'Part Time QA');
  await basePage.main.delete('Part Time QA');
  await basePage.navAdmin.openAndNavAndVerify('Job', 'Job Categories', 'jobCategory')
  await basePage.main.add('HR Manager', 'jobCategory')
  await basePage.main.update('HR Manager', 'jobCategory', 'QA Manager');
  await basePage.main.delete('QA Manager');
  await basePage.navAdmin.openAndNavAndVerify('Job', 'Work Shifts', 'workShift')
  await basePage.main.add('Day Shift', 'workShift')
  await basePage.main.update('Day Shift', 'workShift', 'Mon-Fri');
  await basePage.main.delete('Mon-Fri');
})