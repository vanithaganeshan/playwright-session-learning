import {test,expect}from '@playwright/test';
test("mydemotest", async({page})=>{
await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
const multiDropDown = page.locator("#multi-select option");
await page.selectOption("#multi-select",[
    {label:"Florida"},
    {index: 2},
    {value:"Texas"} // this is a method of passing values with maultiple identifiers.
])
await page.waitForTimeout(2000);

await page.selectOption("#multi-select",["Washington","Texas"]) //Passing an array of values
await page.waitForTimeout(2000);
await expect(multiDropDown).toHaveCount(8);
console.log(await multiDropDown.nth(4).innerText());

expect(await multiDropDown.nth(4).evaluate(el=>el.textContent)).toContain("Ohio")//use evaluate when textcontent (object) needs to validate as string
await page.waitForTimeout(2000)
})