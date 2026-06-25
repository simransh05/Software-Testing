import { test } from "../fixtures/fixture";

test('Login Valid User', async ({ login }) => {
  await login.gotoOrangeHRMLogin();
  await login.loginValidUser();
})

test('Login Invalid User', async ({ login }) => {
  await login.gotoOrangeHRMLogin();
  await login.loginForInvalidUser();
})