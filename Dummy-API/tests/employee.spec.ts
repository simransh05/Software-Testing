import { test, expect } from '@playwright/test';
import { employee } from '../pages/employee';
import endpoint from '../data/constantData';

test('Employee Apis', async ({ request }) => {
  const employeeObj = new employee();
  await employeeObj.getAllEmployeesAndVerify(request, endpoint.allEmployees);
  await employeeObj.getIndividualEmployeeDataAndVerify(request, endpoint.individualEmployee, '1');
  await employeeObj.createNewEmployeeAndVerify(request, endpoint.createNew, 'kiran', '40000', '24');
  await employeeObj.updateTheNewEmployeeAndVerify(request, endpoint.update, '1', 'kiran', '40000', '23')
  await employeeObj.deleteOneEmployeeAndVerify(request, endpoint.delete, '1');
})