import { data, url } from "../data/userData";
import { test } from "../fixtures/fixture";

test.beforeEach('login Valid User', async ({ basePage, page }) => {
  await basePage.login.gotoOrangeHRMLogin();
  await basePage.login.loginValidUser();
  await page.waitForLoadState('load', { timeout: 120_000 })
})

test.skip('login Invalid User', async ({ basePage }) => {
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

test.describe('Admin', () => {
  test.skip('User Management', async ({ basePage }) => {
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

  test.describe('Job', () => {
    test.skip('Job Title', async ({ basePage }) => {
      await basePage.navbar.navToAdminAndVerify();
      await basePage.navAdmin.openAndNavAndVerify('viewJobTitleList', 'Job', 'Job Titles')
      await basePage.main.add('Accountant', 'viewJobTitleList');
      await basePage.main.update('Accountant', 'viewJobTitleList', 'Accounts');
      await basePage.main.delete('Accounts');
    })
    test.skip('Pay Grades', async ({ basePage }) => {
      await basePage.navbar.navToAdminAndVerify();
      await basePage.navAdmin.openAndNavAndVerify('viewPayGrades', 'Job', 'Pay Grades')
      await basePage.jobs.addNewPayGradesAndVerify('Grade I', url.payGrades);
      await basePage.jobs.updatePayGradesAndVerify('Grade I', 'Grades I', url.payGrades);
      await basePage.main.delete('Grades I');
    })
    test.skip('Employment Status', async ({ basePage }) => {
      await basePage.navbar.navToAdminAndVerify();
      await basePage.navAdmin.openAndNavAndVerify('employmentStatus', 'Job', 'Employment Status')
      await basePage.main.add('Full Time QA', 'employmentStatus')
      await basePage.main.update('Full Time QA', 'employmentStatus', 'Part Time QA');
      await basePage.main.delete('Part Time QA');
    })
    test.skip('Job Categories', async ({ basePage }) => {
      await basePage.navbar.navToAdminAndVerify();
      await basePage.navAdmin.openAndNavAndVerify('jobCategory', 'Job', 'Job Categories')
      await basePage.main.add('HR Manager', 'jobCategory')
      await basePage.main.update('HR Manager', 'jobCategory', 'QA Manager');
      await basePage.main.delete('QA Manager');
    })
    test.skip('Work Shifts', async ({ basePage }) => {
      await basePage.navbar.navToAdminAndVerify();
      await basePage.navAdmin.openAndNavAndVerify('workShift', 'Job', 'Work Shifts')
      await basePage.main.add('Day Shift', 'workShift')
      await basePage.main.update('Day Shift', 'workShift', 'Mon-Fri');
      await basePage.main.delete('Mon-Fri');
    })
  })

  test.describe('Organization', () => {
    test.skip('General Information', async ({ basePage }) => {
      await basePage.navbar.navToAdminAndVerify();
      await basePage.navAdmin.openAndNavAndVerify('viewOrganizationGeneralInformation', 'Organization', 'General Information');
      await basePage.org.addGeneralInfoAndVerify('1234');
    })
    test('Locations', async ({ basePage }) => {
      await basePage.navbar.navToAdminAndVerify();
      await basePage.navAdmin.openAndNavAndVerify('viewLocations', 'Organization', 'Locations');
      await basePage.org.addLocationAndVerify('New Delhi', 'Delhi', 'India', 'viewLocations');
      await basePage.org.filterByNameAndVerify('New Delhi');
      await basePage.org.filterByCityAndVerify('Delhi')
      await basePage.org.editLocationAndVerify('New Delhi', 'Mumbai', 'viewLocations')
      await basePage.main.delete('Mumbai')
    })
  })
})





