import {test,expect}from '@playwright/test';
test("mydemotest", async({page})=>{
await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo");
await page.locator("span.select2-selection select2-selection--single").nth(1).click()
await page.waitForTimeout(1000)
})
