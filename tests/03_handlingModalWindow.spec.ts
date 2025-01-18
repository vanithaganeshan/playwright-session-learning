import { test,expect } from "@playwright/test";
import { equal } from "assert";
test("Handling Modal Windows SAVE",async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo");
    await page.locator("'Launch Modal'").nth(0).click();
    await page.locator("//div[@id='myModal']//button[@type='button'][normalize-space()='Save Changes']").click();

})

test("Handling Modal Windows CLOSE",async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo");
    await page.locator("'Launch Modal'").nth(0).click();
    await page.locator("'Close'").nth(0).click();
})

test("Handling Multi Modal Windows SAVE",async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo");
    await page.locator("'Launch Modal'").nth(1).click();
    await page.locator("[data-target='#mySecondModal']").nth(0).click();
    await page.waitForTimeout(2000);
    await page.locator("'Save Changes'").nth(2).click();
    //await page.locator(".btn]").nth(1).click();
})

test.only("Handling Multi Modal Windows CLOSE",async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo");
    await page.locator("'Launch Modal'").nth(1).click();
    await page.locator("'Launch Modal'").nth(2).click();
    await page.waitForTimeout(2000);
    await page.locator("'Close'").nth(2).click();
    await page.waitForTimeout(3000);

    //await page.locator(".btn]").nth(1).click();
})
