import { test, expect } from '@playwright/test';
import { employee } from '../pages/employee';

test('Employee', async ({ request }) => {
  const employeeObj = new employee();
  // await employeeObj.getAllEmployeeAndVerify(request, '/employees');
  await employeeObj.getIndividualDataAndVerify(request, '/employee', '1');
  // await employeeObj.createNewEmployeeAndVerify(request, '/create', 'kiran', '40000', '24');
  // await employeeObj.updateTheNewEmployeeAndVerify(request, '/update','1', 'kiran', '40000', '23')
  // await employeeObj.deleteEmployeeAndVerify(request, '/delete', '1');
})