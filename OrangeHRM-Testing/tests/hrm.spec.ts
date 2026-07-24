import { url } from "../data/userData";
import { test } from "../fixtures/fixture";

test.beforeEach('Dashboard', async ({ page }) => {
  await page.goto(url.homepage);
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
    test.skip('Locations', async ({ basePage }) => {
      await basePage.navbar.navToAdminAndVerify();
      await basePage.navAdmin.openAndNavAndVerify('viewLocations', 'Organization', 'Locations');
      await basePage.org.addLocationAndVerify('New Delhi', 'Delhi', 'India', 'viewLocations');
      await basePage.org.filterByNameAndVerify('New Delhi');
      await basePage.org.filterByCityAndVerify('Delhi')
      await basePage.org.editLocationAndVerify('New Delhi', 'Mumbai', 'viewLocations')
      await basePage.main.delete('Mumbai')
    })
  })

  test.describe('Qualifications', () => {
    test.skip('Skills', async ({ basePage }) => {
      await basePage.navbar.navToAdminAndVerify();
      await basePage.navAdmin.openAndNavAndVerify('viewSkills', 'Qualifications', 'Skills');
      await basePage.main.add('C++', 'viewSkills');
      await basePage.main.update('C++', 'viewSkills', 'DSA C++')
      await basePage.main.delete('DSA C++')
    })

    test.skip('Education', async ({ basePage }) => {
      await basePage.navbar.navToAdminAndVerify();
      await basePage.navAdmin.openAndNavAndVerify('viewEducation', 'Qualifications', 'Education');
      await basePage.main.add('BCA', 'viewEducation');
      await basePage.main.update('BCA', 'viewEducation', 'BTech')
      await basePage.main.delete('BTech')
    })
    test.skip('Licenses', async ({ basePage }) => {
      await basePage.navbar.navToAdminAndVerify();
      await basePage.navAdmin.openAndNavAndVerify('viewLicenses', 'Qualifications', 'Licenses');
      await basePage.main.add('Hackathon Certificate', 'viewLicenses');
      await basePage.main.update('Hackathon Certificate', 'viewLicenses', 'Microsoft Hackathon Certificate')
      await basePage.main.delete('Microsoft Hackathon Certificate')
    })
    test.skip('Languages', async ({ basePage }) => {
      await basePage.navbar.navToAdminAndVerify();
      await basePage.navAdmin.openAndNavAndVerify('viewLanguages', 'Qualifications', 'Languages');
      await basePage.main.add('American English', 'viewLanguages');
      await basePage.main.update('American English', 'viewLanguages', 'British English')
      await basePage.main.delete('British English')
    })
    test.skip('Memberships', async ({ basePage }) => {
      await basePage.navbar.navToAdminAndVerify();
      await basePage.navAdmin.openAndNavAndVerify('membership', 'Qualifications', 'Memberships');
      await basePage.main.add('AAPC', 'membership');
      await basePage.main.update('AAPC', 'membership', 'AHIMA')
      await basePage.main.delete('AHIMA')
    })
  })

  test.skip('Nationalities', async ({ basePage }) => {
    await basePage.navbar.navToAdminAndVerify();
    await basePage.navAdmin.openAndNavAndVerify('nationality', 'Nationalities');
    await basePage.main.add('abc', 'nationality');
    await basePage.main.update('abc', 'nationality', 'abcd')
    await basePage.main.delete('abcd')
  })
})

test.describe('PIM', () => {
  test.skip('Add Employee', async ({ basePage }) => {
    await basePage.navbar.navToPIMAndVerify();
    await basePage.navAdmin.openAndNavAndVerify('addEmployee', 'Add Employee');
    await basePage.emp.addEmployeeAndVerify('viewPersonalDetails', 'Kirti', undefined, 'Sharma')
  })
  test.skip('Employee', async ({ basePage }) => {
    await basePage.navbar.navToPIMAndVerify();
    await basePage.navAdmin.openAndNavAndVerify('viewEmployeeList', 'Employee List');
    await basePage.emp.filterBasedOnTypeAndVerify('Employee Name', 'Kirti Sharma')
    await basePage.emp.filterBasedOnTypeAndVerify('Employment Status', 'Freelance')
  })
})

test.describe('Leave', () => {
  test.skip('Add Leave', async ({ basePage }) => {
    await basePage.navbar.navToLeaveAndVerify();
    await basePage.navAdmin.openAndNavAndVerify('applyLeave', 'Apply')
    await basePage.leave.addNewLeaveAndVerify('CAN - Personal', '2026-23-07', 'Family Vacation');
    await basePage.navAdmin.openAndNavAndVerify('viewMyLeaveList', 'My Leave');
    await basePage.leave.VerifyAdd('CAN - Personal', 'Family Vacation');
  })
})

test.describe('Time', () => {
  test('Attendence', async ({ basePage }) => {
    await basePage.navbar.navToTimeAndVerify();
    await basePage.navAdmin.openAndNavAndVerify('attendance', 'Attendance ', 'Punch In/Out');
    await basePage.attend.clockInAndClockOut('Time Mgt', 'punchIn');
    await basePage.navAdmin.openAndNavAndVerify('viewMyAttendanceRecord', 'Attendance ', 'My Records');
    await basePage.attend.updateAttendenceAndVerify('Time Mgt', 'Time Management', 'viewMyAttendanceRecord');
    await basePage.main.delete('Time Management')
  })
  test('Customers', async ({ basePage }) => {
    await basePage.navbar.navToTimeAndVerify();
    await basePage.navAdmin.openAndNavAndVerify('viewCustomers', 'Project Info', 'Customers')
    await basePage.main.add('TFT', 'viewCustomers');
    await basePage.main.update('TFT', 'viewCustomers', 'Think Future Technology');
    await basePage.main.delete('Think Future Technology')
  })
})