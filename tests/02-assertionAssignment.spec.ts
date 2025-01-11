import{test,expect}from'@playwright/test';
import { equal } from 'assert';
test("assertion1",async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const twoInputField = page.locator("//div[normalize-space()='Two Input Fields']");
    await twoInputField.scrollIntoViewIfNeeded();
    await expect(twoInputField).toBeVisible();
    const innerText=await twoInputField.innerText();
    console.log("inner text is:" +innerText);
    const firstvalue=page.locator("#sum1");
    await firstvalue.scrollIntoViewIfNeeded();
    await firstvalue.click();
    await firstvalue.fill("5");
    await page.waitForTimeout(1000);
    const secondvalue = page.locator("#sum2");
    await secondvalue.scrollIntoViewIfNeeded();
    await secondvalue.click();
    await secondvalue.fill("4");
    await page.waitForTimeout(1000);
    const sumButton = await page.getByRole("button",{name:"Get Sum"});
    //await firstvalue.scrollIntoViewIfNeeded();
    await sumButton.click();
    await page.waitForTimeout(1000);
    const resultfield=page.locator("//p[@id='addmessage']");
    const resultfieldText= await resultfield.textContent()
    console.log(resultfieldText)
    expect(resultfieldText).toBe("9");




})