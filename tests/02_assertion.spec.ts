import{test,expect} from '@playwright/test';
test("assertions",async({page,baseURL})=>{
    test.slow(); //slow the execution locally for global slow set it config
   // test.slow(browserName==='firebox') - for slow the execution on particular browser
    const myMessage="INDIA";
    await page.goto(`${baseURL}`)
    //await page.waitForTimeout(1000);
    const inputElement=page.getByPlaceholder("Please enter your Message")
    await expect(inputElement).toHaveAttribute("placeholder","Please enter your Message");
    await inputElement.fill(`${myMessage}`);
    //await page.waitForTimeout(1000);
    await page.click("#showInput");
    const disMessage=page.locator("#message");
    await expect(disMessage).toHaveText(`${myMessage}`);
    // testMatch: ['file1','file2']


})
